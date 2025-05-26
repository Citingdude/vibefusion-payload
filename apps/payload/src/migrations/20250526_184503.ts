import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "blogs_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"blog_category_id" integer
  );
  
  DO $$ BEGIN
   ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."blogs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "blogs_rels" ADD CONSTRAINT "blogs_rels_blog_category_fk" FOREIGN KEY ("blog_category_id") REFERENCES "public"."blog_category"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "blogs_rels_order_idx" ON "blogs_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "blogs_rels_parent_idx" ON "blogs_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "blogs_rels_path_idx" ON "blogs_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "blogs_rels_blog_category_id_idx" ON "blogs_rels" USING btree ("blog_category_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "blogs_rels" CASCADE;`)
}
