import { Injectable } from "@angular/core";
import { User } from "./User";


export interface Category {
    id: string ;
    name: string ;
    manager: User ;
}