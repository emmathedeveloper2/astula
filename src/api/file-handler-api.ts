import { encode } from "@lib/index";
import { join } from "@tauri-apps/api/path";
import { mkdir , remove, writeFile } from "@tauri-apps/plugin-fs";
import { initial_page_structure } from "@templates";

const PROJECT_FOLDERS = ['pages' , 'components']

export default class FileHandlerAPI {

    static async create_project(name: string , project_path: string){

        const paths = await Promise.all(PROJECT_FOLDERS.map(name => join(project_path , name)))
        
        await mkdir(project_path , { recursive: true })

        for(const path of paths){
            await mkdir(path)
        }

        await writeFile(await join(project_path , 'page1.json') , encode(JSON.stringify(initial_page_structure('Page1'))))
    }

    static async delete_project(path: string){
        await remove(path , { recursive: true })
    }
}