import { Injectable } from "@angular/core";
import { User } from "./User";

@Injectable()
export class Category {
    id!: string;
    name!: string;
    manager: User = new User;



}