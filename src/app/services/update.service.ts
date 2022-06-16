import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  cat: Category | undefined;
  user: User | undefined;

  constructor() { }

}
