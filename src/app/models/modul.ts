import { Category } from "./Category";
import { Department } from "./Department";
import { Studydata } from "./studydata";
import { Subdepartment } from "./subdepartment";
import { SubSubDepData } from "./subSubDepData";
import { User } from "./User";

export class Modul {
    id!: string;
    name!: string;
    shortcut!: string;
    modulno!: number;
    credits!: number;
    duration!: number;
    selfStudy!: number;
    workload!: number;
    semesters: number[] = [];
    enabled!: boolean;
    opened!: boolean;
    category: Category = new Category;
    departmentDto: Department = new Department;
    subDepartment: Subdepartment = new Subdepartment;
    subsubdepartments: SubSubDepData[] = [];
    managers: User[] = [];
    studyData: Studydata[] = [];
}
