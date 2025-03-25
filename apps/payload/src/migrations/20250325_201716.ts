import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "home_blocks_hero_links" CASCADE;
  DROP TABLE "home_blocks_hero" CASCADE;
  DROP TABLE "home_blocks_service_cards_block_service_card_list" CASCADE;
  DROP TABLE "home_blocks_service_cards_block" CASCADE;
  DROP TABLE "home_blocks_case_cards_block_case_cards" CASCADE;
  DROP TABLE "home_blocks_case_cards_block" CASCADE;
  DROP TABLE "home_blocks_cta_block" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "home_rels" CASCADE;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "home_blocks_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "home_blocks_hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight_title_title" jsonb NOT NULL,
  	"highlight_title_html" varchar,
  	"body" varchar,
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_blocks_service_cards_block_service_card_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service_card_icon_id" integer,
  	"service_card_title" varchar,
  	"service_card_link_type" "link_type" DEFAULT 'reference',
  	"service_card_link_new_tab" boolean,
  	"service_card_link_url" varchar,
  	"service_card_link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "home_blocks_service_cards_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_blocks_case_cards_block_case_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"case_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "home_blocks_case_cards_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home_blocks_cta_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content_richtext" jsonb,
  	"link_type" "link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "home_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"cases_id" integer
  );
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_hero_links" ADD CONSTRAINT "home_blocks_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_hero"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_hero" ADD CONSTRAINT "home_blocks_hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_hero" ADD CONSTRAINT "home_blocks_hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_service_cards_block_service_card_list" ADD CONSTRAINT "home_blocks_service_cards_block_service_card_list_service_card_icon_id_icons_id_fk" FOREIGN KEY ("service_card_icon_id") REFERENCES "public"."icons"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_service_cards_block_service_card_list" ADD CONSTRAINT "home_blocks_service_cards_block_service_card_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_service_cards_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_service_cards_block" ADD CONSTRAINT "home_blocks_service_cards_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_case_cards_block_case_cards" ADD CONSTRAINT "home_blocks_case_cards_block_case_cards_case_id_cases_id_fk" FOREIGN KEY ("case_id") REFERENCES "public"."cases"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_case_cards_block_case_cards" ADD CONSTRAINT "home_blocks_case_cards_block_case_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_blocks_case_cards_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_case_cards_block" ADD CONSTRAINT "home_blocks_case_cards_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_cta_block" ADD CONSTRAINT "home_blocks_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home" ADD CONSTRAINT "home_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_cases_fk" FOREIGN KEY ("cases_id") REFERENCES "public"."cases"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "home_blocks_hero_links_order_idx" ON "home_blocks_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_hero_links_parent_id_idx" ON "home_blocks_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_hero_order_idx" ON "home_blocks_hero" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_hero_parent_id_idx" ON "home_blocks_hero" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_hero_path_idx" ON "home_blocks_hero" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_hero_image_idx" ON "home_blocks_hero" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_service_cards_block_service_card_list_order_idx" ON "home_blocks_service_cards_block_service_card_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_service_cards_block_service_card_list_parent_id_idx" ON "home_blocks_service_cards_block_service_card_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_service_cards_block_service_card_list_service_card_service_card_icon_idx" ON "home_blocks_service_cards_block_service_card_list" USING btree ("service_card_icon_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_service_cards_block_order_idx" ON "home_blocks_service_cards_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_service_cards_block_parent_id_idx" ON "home_blocks_service_cards_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_service_cards_block_path_idx" ON "home_blocks_service_cards_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_case_cards_block_case_cards_order_idx" ON "home_blocks_case_cards_block_case_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_case_cards_block_case_cards_parent_id_idx" ON "home_blocks_case_cards_block_case_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_case_cards_block_case_cards_case_idx" ON "home_blocks_case_cards_block_case_cards" USING btree ("case_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_case_cards_block_order_idx" ON "home_blocks_case_cards_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_case_cards_block_parent_id_idx" ON "home_blocks_case_cards_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_case_cards_block_path_idx" ON "home_blocks_case_cards_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_blocks_cta_block_order_idx" ON "home_blocks_cta_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_cta_block_parent_id_idx" ON "home_blocks_cta_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_cta_block_path_idx" ON "home_blocks_cta_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "home_meta_meta_image_idx" ON "home" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "home_rels_order_idx" ON "home_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "home_rels_parent_idx" ON "home_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "home_rels_path_idx" ON "home_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "home_rels_pages_id_idx" ON "home_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "home_rels_cases_id_idx" ON "home_rels" USING btree ("cases_id");`)
}
