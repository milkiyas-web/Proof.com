import { pgTable, serial, text, varchar, integer, boolean, uuid } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name"),
  description: text("description"),
  url: text("url"),
  userId: varchar("user_id")
});
export const projectsRelations = relations
(projects, ({ many }) => ({
  reviews: many(reviews),
}));

export const reviews = pgTable("reviews", {
  id: serial("id").primaryKey(),
  projectId: integer("project_id").notNull(),
  review: text("review"),
  customerName: text("customer_name"),
  customerEmail: text("customer_email"),
  rating: integer("rating").notNull()
  
})

export const reviewsRelations = relations(reviews, ({ one }) => ({
  project: one(projects, {
    fields: [reviews.projectId],
    references: [projects.id],
  })
}))
