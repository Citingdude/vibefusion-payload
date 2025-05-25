import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_blog_cards_block_blog_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"blog_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_blog_cards_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blog_cards_block_blog_cards" ADD CONSTRAINT "pages_blocks_blog_cards_block_blog_cards_blog_id_blogs_id_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blog_cards_block_blog_cards" ADD CONSTRAINT "pages_blocks_blog_cards_block_blog_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_blog_cards_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_blog_cards_block" ADD CONSTRAINT "pages_blocks_blog_cards_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_cards_block_blog_cards_order_idx" ON "pages_blocks_blog_cards_block_blog_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_cards_block_blog_cards_parent_id_idx" ON "pages_blocks_blog_cards_block_blog_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_cards_block_blog_cards_blog_idx" ON "pages_blocks_blog_cards_block_blog_cards" USING btree ("blog_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_cards_block_order_idx" ON "pages_blocks_blog_cards_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_cards_block_parent_id_idx" ON "pages_blocks_blog_cards_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_blog_cards_block_path_idx" ON "pages_blocks_blog_cards_block" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_blog_cards_block_blog_cards" CASCADE;
  DROP TABLE "pages_blocks_blog_cards_block" CASCADE;`)
}
