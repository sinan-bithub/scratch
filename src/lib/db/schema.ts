import { pgTable, uuid, varchar, timestamp, pgEnum, doublePrecision, boolean } from "drizzle-orm/pg-core";

// Define User Roles
export const roleEnum = pgEnum("role", ["COACH", "PLAYER", "PARENT"]);

// Users Table (Linked to Supabase Auth)
export const users = pgTable("users", {
    id: uuid("id").primaryKey(), // This matches Supabase auth.users.id
    email: varchar("email", { length: 255 }).notNull().unique(),
    role: roleEnum("role").default("PLAYER").notNull(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    avatarUrl: varchar("avatar_url", { length: 1024 }),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Relationships: Parents -> Children (Players)
export const parentChildRelations = pgTable("parent_child_relations", {
    id: uuid("id").primaryKey().defaultRandom(),
    parentId: uuid("parent_id")
        .references(() => users.id)
        .notNull(),
    childId: uuid("child_id")
        .references(() => users.id)
        .notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Attendance / Check-In Data (With Geofencing)
export const attendance = pgTable("attendance", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
        .references(() => users.id)
        .notNull(),
    date: timestamp("date").defaultNow().notNull(),
    status: varchar("status", { length: 50 }).notNull(), // 'PRESENT', 'ABSENT', 'EXCUSED'

    // Geolocation verification points
    checkInLat: doublePrecision("check_in_lat"),
    checkInLng: doublePrecision("check_in_lng"),

    isVerifiedGeo: boolean("is_verified_geo").default(false), // true if within 50m of pitch
    createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Camp Settings / Pitch Locations (For Coach)
export const campSettings = pgTable("camp_settings", {
    id: uuid("id").primaryKey().defaultRandom(),
    coachId: uuid("coach_id")
        .references(() => users.id)
        .notNull(),
    pitchName: varchar("pitch_name", { length: 255 }).notNull(),
    pitchLat: doublePrecision("pitch_lat").notNull(),
    pitchLng: doublePrecision("pitch_lng").notNull(),
    allowedRadiusMeters: doublePrecision("allowed_radius_meters").default(50).notNull(), // Maximum 50m Geofence
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
