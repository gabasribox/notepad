import * as SQLite from "expo-sqlite";

const db = await SQLite.openDatabaseAsync("notes.db");

await db.execAsync(`CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY NOT NULL, title TEXT, content TEXT)`)

export default db;