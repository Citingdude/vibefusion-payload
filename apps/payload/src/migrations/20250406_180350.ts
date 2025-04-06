import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "pages_blocks_kpi_block_kpi_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"kpi_card_icon_id" integer,
  	"kpi_card_title" varchar NOT NULL,
  	"kpi_card_body" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_kpi_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_kpi_block_kpi_cards" ADD CONSTRAINT "pages_blocks_kpi_block_kpi_cards_kpi_card_icon_id_icons_id_fk" FOREIGN KEY ("kpi_card_icon_id") REFERENCES "public"."icons"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_kpi_block_kpi_cards" ADD CONSTRAINT "pages_blocks_kpi_block_kpi_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_kpi_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_kpi_block" ADD CONSTRAINT "pages_blocks_kpi_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_blocks_kpi_block_kpi_cards_order_idx" ON "pages_blocks_kpi_block_kpi_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kpi_block_kpi_cards_parent_id_idx" ON "pages_blocks_kpi_block_kpi_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kpi_block_kpi_cards_kpi_card_kpi_card_icon_idx" ON "pages_blocks_kpi_block_kpi_cards" USING btree ("kpi_card_icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kpi_block_order_idx" ON "pages_blocks_kpi_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kpi_block_parent_id_idx" ON "pages_blocks_kpi_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kpi_block_path_idx" ON "pages_blocks_kpi_block" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_blocks_kpi_block_kpi_cards" CASCADE;
  DROP TABLE "pages_blocks_kpi_block" CASCADE;`)
}
