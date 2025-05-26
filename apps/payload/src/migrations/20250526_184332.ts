import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "blog_category" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "blog_category_id" integer;
  CREATE UNIQUE INDEX IF NOT EXISTS "blog_category_slug_idx" ON "blog_category" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "blog_category_updated_at_idx" ON "blog_category" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "blog_category_created_at_idx" ON "blog_category" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_blog_category_fk" FOREIGN KEY ("blog_category_id") REFERENCES "public"."blog_category"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_blog_category_id_idx" ON "payload_locked_documents_rels" USING btree ("blog_category_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "blog_category" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "blog_category" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_blog_category_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_blog_category_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "blog_category_id";`)
}
