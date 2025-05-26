import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "blogs" ADD COLUMN "image_id" integer;
  DO $$ BEGIN
   ALTER TABLE "blogs" ADD CONSTRAINT "blogs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "blogs_image_idx" ON "blogs" USING btree ("image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "blogs" DROP CONSTRAINT "blogs_image_id_media_id_fk";
  
  DROP INDEX IF EXISTS "blogs_image_idx";
  ALTER TABLE "blogs" DROP COLUMN IF EXISTS "image_id";`)
}
