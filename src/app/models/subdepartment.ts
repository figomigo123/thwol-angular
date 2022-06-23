import { Injectable } from "@angular/core";
import { Department } from "./Department";

export class Subdepartment {
    id!: string;
    name!: string;
    departmentDto!: Department;
}