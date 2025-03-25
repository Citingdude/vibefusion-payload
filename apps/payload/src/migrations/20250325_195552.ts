import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "seeders" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"has_seeder_run" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "seeders_id" integer;
  CREATE INDEX IF NOT EXISTS "seeders_updated_at_idx" ON "seeders" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "seeders_created_at_idx" ON "seeders" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_seeders_fk" FOREIGN KEY ("seeders_id") REFERENCES "public"."seeders"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_seeders_id_idx" ON "payload_locked_documents_rels" USING btree ("seeders_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "seeders" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "seeders" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_seeders_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_seeders_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "seeders_id";`)
}
