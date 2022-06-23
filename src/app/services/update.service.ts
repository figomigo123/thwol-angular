import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { Department } from '../models/Department';
import { Subdepartment } from '../models/subdepartment';
import { Subsubdepartment } from '../models/subsubdepartment';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  cat: Category | undefined;
  user: User | undefined;
  dep: Department | undefined;
  subdep: Subdepartment | undefined;
  subsubdep: Subsubdepartment | undefined;
  constructor() { }

}
