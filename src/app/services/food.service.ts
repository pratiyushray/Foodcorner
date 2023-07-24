import { Injectable } from '@angular/core';
import { Food } from '../shared/model/Food';
import { sample_foods, sample_tags } from 'src/data';
import { sampleTime } from 'rxjs';
import { Tag } from '../shared/model/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods
  }

  //search food
  getAllFoodBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  //Get All Food by Tags
  getAllTags():Tag[]{
    return sample_tags
  }

  //Get Food by Tags
  getAllFoodByTag(tag:string):Food[]{
    return tag==="All"?this.getAll():this.getAll().filter(food=>food.tags?.includes(tag))
  }
}
