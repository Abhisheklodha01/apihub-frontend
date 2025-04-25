import { ApiSection } from "./apiData";

export const flowersData: Record<string, ApiSection> = {
  flowers: {
    name: "flowers",
    description: "Manage and retrieve flowers from the database",
    endpoints: {
      getAll: {
        name: "Get All flowers",
        path: "/flowers",
        method: "GET",
        description: "Retrieve a list of all flowers",
        code: {
          javascript: `const getAllflowers = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/flowers');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_flowers():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/flowers')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Flower {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllflowers = async (): Promise<Flower[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/flowers');
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
  "message": "Flowers fetched successfully",
  "flowers": [
    {
      "id": 1,
      "name": "Rose",
      "color": "Red",
      "flowerType": "Perennial",
      "description": "A symbol of love and beauty, commonly used in bouquets.",
      "imageUrl": "https://example.com/flower-images/rose.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Sunflower",
      "color": "Yellow",
      "flowerType": "Annual",
      "description": "A large and bright flower known for its resemblance to the sun.",
      "imageUrl": "https://example.com/flower-images/sunflower.jpg",
      "createdAt": "2025-01-22T09:15:00Z",
      "updatedAt": "2025-01-22T09:15:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Flower by ID",
        path: "/flowers/:id",
        method: "GET",
        description: "Retrieve a specific Flower by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Flower",
          },
        ],
        code: {
          javascript: `const getFlowerById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/flowers/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Flower_by_id(Flower_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/flowers/{Flower_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getFlowerById = async (id: number): Promise<Flower | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/flowers/\${id}\`);
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
    "message": "Flower fetched successfully",
    "flower":
      {
       "id": 1,
      "name": "Rose",
      "color": "Red",
      "flowerType": "Perennial",
      "description": "A symbol of love and beauty, commonly used in bouquets.",
      "imageUrl": "https://example.com/flower-images/rose.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Flower",
        path: "/flowers/random",
        method: "GET",
        description: "Retrieve a random Flower",
        code: {
          javascript: `const getRandomFlower = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/flowers/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_flower():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/flowers/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomFlower = async (): Promise<Flower | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/flowers/random');
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
    "message": "Random flower fetched successfully",
    "flower":
      {
       "id": 1,
      "name": "Rose",
      "color": "Red",
      "flowerType": "Perennial",
      "description": "A symbol of love and beauty, commonly used in bouquets.",
      "imageUrl": "https://example.com/flower-images/rose.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
  },
};
