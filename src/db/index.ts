import Dexie, { type EntityTable } from "dexie";
import type { RecentProject } from "../types";


const db = new Dexie('astula') as Dexie & {
    recent_projects: EntityTable<RecentProject , 'id'>
}

db.version(1).stores({
    recent_projects: '++id, name, path, created_at'
})

export default db;