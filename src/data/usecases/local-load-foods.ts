import { FoodModel } from "@/domain/@models/foods.model";
import { LoadFoods } from "@/domain/usecases/load-foods";

export class LocalLoadFoods implements LoadFoods {
  load(): FoodModel[] {
    const foods = newFoods;
    return foods;
  }
}

const newFoods = [
  {
    id: "0001",
    name: "Pizza",
  },
  {
    id: "0002",
    name: "Salad",
  },
  {
    id: "0003",
    name: "Coke",
  },
  {
    id: "0004",
    name: "Coffee",
  },
];
