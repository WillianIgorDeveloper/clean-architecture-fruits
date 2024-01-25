import { FoodModel } from "../@models/foods.model";

export interface LoadFoods {
  load: () => FoodModel[];
}
