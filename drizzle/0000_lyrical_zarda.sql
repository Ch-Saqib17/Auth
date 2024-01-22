CREATE TABLE IF NOT EXISTS "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255),
	"password" varchar(255),
	"created_at" varchar(255),
	"updated_at" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "customers" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"image_url" varchar(255) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "invoices" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"customer_id" uuid NOT NULL,
	"amount" integer NOT NULL,
	"status" varchar(255) NOT NULL,
	"date" date NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "revenue" (
	"month" varchar(4) NOT NULL,
	"revenue" integer NOT NULL,
	CONSTRAINT "revenue_month_key" UNIQUE("month")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial NOT NULL,
	"task" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT uuid_generate_v4() NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	CONSTRAINT "users_email_key" UNIQUE("email")
);
