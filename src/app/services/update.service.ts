import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Department } from '../models/Department';
import { Modul } from '../models/Modul';
import { Subdepartment } from '../models/subdepartment';
import { Subsubdepartment } from '../models/subsubdepartment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  cat: Category = new Category;
  user: User = new User;
  dep: Department = new Department;
  subdep: Subdepartment = new Subdepartment;
  subsubdep: Subsubdepartment = new Subsubdepartment;
  modul: Modul = new Modul;
  constructor() { }

}
