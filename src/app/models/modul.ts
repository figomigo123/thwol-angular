import { Category } from "./Category";
import { Department } from "./Department";
import { Studydata } from "./studydata";
import { Subdepartment } from "./subdepartment";
import { Subsubdepartment } from "./subsubdepartment";
import { User } from "./User";

export class Modul {
    id!: string;
    name!: string;
    shortcut!: string;
    modulno!: number;
    credits!: number;
    duration!: number;
    semesters!: number[];
    enabled!: boolean;
    opened!: boolean;


    category!: Category;
    department!: Department;
    subDepartment!: Subdepartment;
    subsubdepartment!: Subsubdepartment;
    managers!: User[];
    studyData!: Studydata[];
}
