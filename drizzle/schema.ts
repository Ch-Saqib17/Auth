import { pgTable, serial, varchar, unique, uuid, text, integer, date } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"



export const todos = pgTable("todos", {
	id: serial("id").notNull(),
	task: varchar("task", { length: 255 }),
});

export const users = pgTable("users", {
	id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	email: text("email").notNull(),
	password: text("password").notNull(),
},
(table) => {
	return {
		usersEmailKey: unique("users_email_key").on(table.email),
	}
});

export const customers = pgTable("customers", {
	id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	email: varchar("email", { length: 255 }).notNull(),
	imageUrl: varchar("image_url", { length: 255 }).notNull(),
});

export const invoices = pgTable("invoices", {
	id: uuid("id").default(sql`uuid_generate_v4()`).primaryKey().notNull(),
	customerId: uuid("customer_id").notNull(),
	amount: integer("amount").notNull(),
	status: varchar("status", { length: 255 }).notNull(),
	date: date("date").notNull(),
});

export const revenue = pgTable("revenue", {
	month: varchar("month", { length: 4 }).notNull(),
	revenue: integer("revenue").notNull(),
},
(table) => {
	return {
		revenueMonthKey: unique("revenue_month_key").on(table.month),
	}
});
export const Users=pgTable("user",{
    id:serial("id").primaryKey(),
    name:varchar("name", { length: 255 }),
    email:varchar("email", { length: 255 }),
    password:varchar("password", { length: 255 }),
    createdAt:varchar("created_at", { length: 255 }),
    updatedAt:varchar("updated_at", { length: 255 }),
})