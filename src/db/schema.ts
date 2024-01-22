import { pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const Users=pgTable("user",{
    id:serial("id").primaryKey(),
    name:varchar("name", { length: 255 }),
    email:varchar("email", { length: 255 }),
    password:varchar("password", { length: 255 }),
    createdAt:varchar("created_at", { length: 255 }),
    updatedAt:varchar("updated_at", { length: 255 }),
})