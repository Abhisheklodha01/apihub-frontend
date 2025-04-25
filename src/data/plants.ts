import { ApiSection } from "./apiData";

export const plantsData: Record<string, ApiSection> = {
 plants: {
    name: "Plants",
    description: "Manage and retrieve plants from the database",
    endpoints: {
      getAll: {
        name: "Get All plants",
        path: "/plants",
        method: "GET",
        description: "Retrieve a list of all plants",
        code: {
          javascript: `const getAllplants = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/plants');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_plants():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/plants')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Plant {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllplants = async (): Promise<Plant[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/plants');
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
  "message": "Plants fetched successfully",
  "plants": [
    {
      "id": 1,
      "name": "Rose",
      "species": "Rosa",
      "description": "A beautiful flowering plant known for its fragrant blooms.",
      "imageUrl": "https://example.com/images/rose.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Tulip",
      "species": "Tulipa",
      "description": "A spring-blooming perennial with colorful, cup-shaped flowers.",
      "imageUrl": "https://example.com/images/tulip.jpg",
      "createdAt": "2025-01-22T09:15:00Z",
      "updatedAt": "2025-01-22T09:15:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Plant by ID",
        path: "/plants/:id",
        method: "GET",
        description: "Retrieve a specific Plant by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Plant",
          },
        ],
        code: {
          javascript: `const getPlantById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/plants/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Plant_by_id(Plant_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/plants/{Plant_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getPlantById = async (id: number): Promise<Plant | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/plants/\${id}\`);
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
    "message": "Plant fetched successfully",
    "plant":
      {
       "id": 1,
      "name": "Rose",
      "species": "Rosa",
      "description": "A beautiful flowering plant known for its fragrant blooms.",
      "imageUrl": "https://example.com/images/rose.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Plant",
        path: "/plants/random",
        method: "GET",
        description: "Retrieve a random Plant",
        code: {
          javascript: `const getRandomPlant = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/plants/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Plant():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/plants/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomPlant = async (): Promise<Plant | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/plants/random');
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
    "message": "Random Plant fetched successfully",
    "plant":
      {
        "id": 1,
      "name": "Rose",
      "species": "Rosa",
      "description": "A beautiful flowering plant known for its fragrant blooms.",
      "imageUrl": "https://example.com/images/rose.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
 }
};
