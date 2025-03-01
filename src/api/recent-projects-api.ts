import db from "@db";
import { sleep } from "@lib/index";
import type { RecentProject } from "@types";
import { liveQuery, type InsertType } from "dexie";


export default class RecentProjectsAPI {

    static async load(){

        await sleep(2000)

        const data = await db.recent_projects.toArray()

        return data
    }

    static async add(name: string , path: string){

        const new_project = {
            name,
            path,
            created_at: (new Date()).toISOString()
        }

        await db.recent_projects.add(new_project)
    }

    static async delete(id: string){
        await db.recent_projects.delete(id)
    }

    static async update(){

    }

    static realtime(){
        return liveQuery(() => db.recent_projects.toArray())
    }
}