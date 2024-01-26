export type HomeLayoutProps = {
  fruitsList: {
    id: number;
    name: string;
    family: string;
    order: string;
    genus: string;
    nutritions: NutritionsType;
  }[];
};

type NutritionsType = {
  calories: number;
  fat: number;
  sugar: number;
  carbohydrates: number;
  protein: number;
};
