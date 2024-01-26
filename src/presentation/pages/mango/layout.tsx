import { MangoLayoutProps } from "./types";

export function MangoLayout({ fruitInformation }: MangoLayoutProps) {
  if (!fruitInformation)
    return (
      <main className="w-full h-full flex items-center justify-center">
        <h1 className="text-xl font-bold">Mango - No information avaliables</h1>
      </main>
    );

  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <div className="flex flex-col gap-3">
        <span className="font-semibold">Name: {fruitInformation.name}</span>
        <span>Family: {fruitInformation.family}</span>
        <span>Order: {fruitInformation.order}</span>
        <span>Genus: {fruitInformation.genus}</span>
        <span>Carbohydrates: {fruitInformation.nutritions.carbohydrates}</span>
        <span>Calories: {fruitInformation.nutritions.calories}</span>
        <span>Fat: {fruitInformation.nutritions.fat}</span>
        <span>Protein: {fruitInformation.nutritions.protein}</span>
        <span>Sugar: {fruitInformation.nutritions.sugar}</span>
      </div>
    </main>
  );
}
