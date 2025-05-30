import { ApiSection } from "./apiData";

export const foodnutritionsData: Record<string, ApiSection> = {
 foodnutritions: {
    name: "foodnutritions",
    description: "Manage and retrieve foodnutritions from the database",
    endpoints: {
      getAll: {
        name: "Get All foodnutritions",
        path: "/foodnutritions",
        method: "GET",
        description: "Retrieve a list of all foodnutritions",
        code: {
          javascript: `const getAllfoodnutritions = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/foodnutritions/get-foodnutritions');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_foodnutritions():
      try:
          response = requests.get('https://api.apistack.site/api/v1/foodnutritions/get-foodnutritions')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface food_nutrient {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllfoodnutritions = async (): Promise<food_nutrient[]> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/foodnutritions/get-foodnutritions');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };`,
        },
        response: `
{
  "success": true,
  "message": "Food nutrition data fetched successfully",
  "foods": [
    {
      "id": 1,
      "food_name": "Apple",
      "servingSize": "100g",
      "calories": 52,
      "protein": 0.3,
      "carbohydrates": 14,
      "fats": 0.2,
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "food_name": "Chicken Breast",
      "servingSize": "100g",
      "calories": 165,
      "protein": 31,
      "carbohydrates": 0,
      "fats": 3.6,
      "createdAt": "2025-01-22T08:30:00Z",
      "updatedAt": "2025-01-22T08:30:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get food_nutrient by ID",
        path: "/foodnutritions/:id",
        method: "GET",
        description: "Retrieve a specific food_nutrient by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the food_nutrient",
          },
        ],
        code: {
          javascript: `const getfood_nutrientById = async (id) => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/foodnutritions/get-foodnutrition/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_food_nutrient_by_id(food_nutrient_id):
      try:
          response = requests.get(f'https://api.apistack.site/api/v1/foodnutritions/get-foodnutrition/{food_nutrient_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getfood_nutrientById = async (id: number): Promise<food_nutrient | null> => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/foodnutritions/get-foodnutrition/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };`,
        },
        response: `{
    "success": true,
    "message": "food_nutrient fetched successfully",
    "food":
      {
       "id": 2,
      "food_name": "Chicken Breast",
      "servingSize": "100g",
      "calories": 165,
      "protein": 31,
      "carbohydrates": 0,
      "fats": 3.6,
      "createdAt": "2025-01-22T08:30:00Z",
      "updatedAt": "2025-01-22T08:30:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random food_nutrient",
        path: "/foodnutritions/get-random-foodnutrientation",
        method: "GET",
        description: "Retrieve a random food_nutrient",
        code: {
          javascript: `const getRandomfood_nutrient = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/foodnutritions/get-random-foodnutrientation');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_food_nutrient():
      try:
          response = requests.get('https://api.apistack.site/api/v1/foodnutritions/get-random-foodnutrientation')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomfood_nutrient = async (): Promise<food_nutrient | null> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/foodnutritions/get-random-foodnutrientation');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      return null;
    }
  };`,
        },
        response: `{
    "success": true,
    "message": "Random food_nutrient fetched successfully",
    "food":
      {
        "id": 2,
      "food_name": "Chicken Breast",
      "servingSize": "100g",
      "calories": 165,
      "protein": 31,
      "carbohydrates": 0,
      "fats": 3.6,
      "createdAt": "2025-01-22T08:30:00Z",
      "updatedAt": "2025-01-22T08:30:00Z"
      },
  }`,
      },
    },
 }
};
