import { ApiSection } from "./apiData";

export const restaurantsData: Record<string, ApiSection> = {
 restaurants: {
    name: "Restaurants",
    description: "Manage and retrieve restaurants from the database",
    endpoints: {
      getAll: {
        name: "Get All restaurants",
        path: "/restaurants",
        method: "GET",
        description: "Retrieve a list of all restaurants",
        code: {
          javascript: `const getAllrestaurants = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/restaurants');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_restaurants():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/restaurants')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Restaurant {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllrestaurants = async (): Promise<Restaurant[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/restaurants');
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
  "message": "Restaurants fetched successfully",
  "restaurants": [
    {
      "id": 1,
      "name": "The Gourmet Kitchen",
      "foodType": "Continental",
      "location": "Downtown",
      "priceRange": "Mid-range",
      "restaurantType": "Casual Dining",
      "city": "New York",
      "description": "A cozy restaurant offering a variety of continental dishes with great ambiance.",
      "createdAt": "2025-01-23T11:00:00Z",
      "updatedAt": "2025-01-23T11:00:00Z"
    },
    {
      "id": 2,
      "name": "Spicy Haven",
      "foodType": "Indian",
      "location": "Suburbs",
      "priceRange": "Affordable",
      "restaurantType": "Fast Food",
      "city": "Los Angeles",
      "description": "An Indian fast food joint known for its authentic flavors and quick bites.",
      "createdAt": "2025-01-22T10:30:00Z",
      "updatedAt": "2025-01-22T10:30:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Restaurant by ID",
        path: "/restaurants/:id",
        method: "GET",
        description: "Retrieve a specific Restaurant by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Restaurant",
          },
        ],
        code: {
          javascript: `const getRestaurantById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/restaurants/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Restaurant_by_id(Restaurant_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/restaurants/{Restaurant_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRestaurantById = async (id: number): Promise<Restaurant | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/restaurants/\${id}\`);
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
    "message": "Restaurant fetched successfully",
    "restaurant":
      {
       "id": 1,
      "name": "The Gourmet Kitchen",
      "foodType": "Continental",
      "location": "Downtown",
      "priceRange": "Mid-range",
      "restaurantType": "Casual Dining",
      "city": "New York",
      "description": "A cozy restaurant offering a variety of continental dishes with great ambiance.",
      "createdAt": "2025-01-23T11:00:00Z",
      "updatedAt": "2025-01-23T11:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Restaurant",
        path: "/restaurants/random",
        method: "GET",
        description: "Retrieve a random Restaurant",
        code: {
          javascript: `const getRandomRestaurant = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/restaurants/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Restaurant():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/restaurants/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomRestaurant = async (): Promise<Restaurant | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/restaurants/random');
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
    "message": "Random Restaurant fetched successfully",
    "restaurant":
      {
       "id": 1,
      "name": "The Gourmet Kitchen",
      "foodType": "Continental",
      "location": "Downtown",
      "priceRange": "Mid-range",
      "restaurantType": "Casual Dining",
      "city": "New York",
      "description": "A cozy restaurant offering a variety of continental dishes with great ambiance.",
      "createdAt": "2025-01-23T11:00:00Z",
      "updatedAt": "2025-01-23T11:00:00Z"
      },
  }`,
      },
    },
 }
};
