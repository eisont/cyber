export type Recipe = {
  caloriesPerServing: number;
  cookTimeMinutes: number;
  cuisine: string;
  difficulty: string;
  id: number;
  image: string;
  ingredients: string[];
  instructions: string[];
  mealType: string[];
  name: string;
  prepTimeMinutes: number;
  rating: number;
  reviewCount: number;
  servings: number;
  tags: string[];
  userId: number;
};
export type RecipeCard = Pick<Recipe, 'id' | 'image' | 'name' | 'rating' | 'cookTimeMinutes' | 'prepTimeMinutes' | 'servings' | 'cuisine' | 'difficulty' | 'caloriesPerServing'>;
