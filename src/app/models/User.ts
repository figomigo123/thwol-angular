import { Injectable } from "@angular/core";

@Injectable()
export class User {
    id!: string ;
    firstName!: string ;
    lastName!: string ;
    email!: string ;
    roles: string[]=[] ;
    enabled!: boolean ;
}