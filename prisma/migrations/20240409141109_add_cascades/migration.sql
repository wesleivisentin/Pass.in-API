-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_attendees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "event_id" TEXT NOT NULL,
    CONSTRAINT "attendees_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_attendees" ("created_at", "email", "event_id", "id", "name") SELECT "created_at", "email", "event_id", "id", "name" FROM "attendees";
DROP TABLE "attendees";
ALTER TABLE "new_attendees" RENAME TO "attendees";
CREATE UNIQUE INDEX "attendees_event_id_email_key" ON "attendees"("event_id", "email");
CREATE TABLE "new_chack_ins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "attendee_id" INTEGER NOT NULL,
    CONSTRAINT "chack_ins_attendee_id_fkey" FOREIGN KEY ("attendee_id") REFERENCES "attendees" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_chack_ins" ("attendee_id", "created_at", "id") SELECT "attendee_id", "created_at", "id" FROM "chack_ins";
DROP TABLE "chack_ins";
ALTER TABLE "new_chack_ins" RENAME TO "chack_ins";
CREATE UNIQUE INDEX "chack_ins_attendee_id_key" ON "chack_ins"("attendee_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
