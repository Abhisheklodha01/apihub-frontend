import { ApiSection } from "./apiData";

export const catsData: Record<string, ApiSection> = {
  cats: {
    name: "Cats",
    description: "Manage and retrieve cats from the database",
    endpoints: {
      getAll: {
        name: "Get All cats",
        path: "/cats",
        method: "GET",
        description: "Retrieve a list of all cats",
        code: {
          javascript: `const getAllcats = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/cats/get-cats');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_cats():
      try:
          response = requests.get('https://api.apistack.site/api/v1/cats/get-cats')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Cats {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllcats = async (): Promise<Cats[]> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/cats/get-cats');
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
  "message": "Cats fetched successfully",
  "cats": [
    {
      "id": 1,
      "name": "Whiskers",
      "breed": "Persian",
      "location": "New York",
      "imageUrl": "https://api.apistack.site/api/v1/cat-images/whiskers.jpg",
      "description": "A friendly and fluffy Persian cat.",
      "createdAt": "2025-01-22T08:30:00Z",
      "updatedAt": "2025-01-22T08:30:00Z"
    },
    {
      "id": 2,
      "name": "Mittens",
      "breed": "Siamese",
      "location": "Los Angeles",
      "imageUrl": "https://api.apistack.site/api/v1/cat-images/mittens.jpg",
      "description": "An energetic and playful Siamese cat.",
      "createdAt": "2025-01-21T14:15:00Z",
      "updatedAt": "2025-01-21T14:15:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Cat by ID",
        path: "/cats/:id",
        method: "GET",
        description: "Retrieve a specific Cats by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Cats",
          },
        ],
        code: {
          javascript: `const getCatsById = async (id) => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/cats/get-cat/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Cats_by_id(Cats_id):
      try:
          response = requests.get(f'https://api.apistack.site/api/v1/cats/get-cat/{Cats_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getCatsById = async (id: number): Promise<Cats | null> => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/cats/get-cat/\${id}\`);
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
    "message": "Cat fetched successfully",
    "data":
      {
      "id": 2,
      "name": "Mittens",
      "breed": "Siamese",
      "location": "Los Angeles",
      "imageUrl": "https://api.apistack.site/api/v1/cat-images/mittens.jpg",
      "description": "An energetic and playful Siamese cat.",
      "createdAt": "2025-01-21T14:15:00Z",
      "updatedAt": "2025-01-21T14:15:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Cats",
        path: "/cats/random",
        method: "GET",
        description: "Retrieve a random Cat",
        code: {
          javascript: `const getRandomCats = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/cats/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_cat():
      try:
          response = requests.get('https://api.apistack.site/api/v1/cats/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomCats = async (): Promise<Cats | null> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/cats/random');
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
    "message": "Random Cat fetched successfully",
    "data":
      {
      "id": 2,
      "name": "Mittens",
      "breed": "Siamese",
      "location": "Los Angeles",
      "imageUrl": "https://api.apistack.site/api/v1/cat-images/mittens.jpg",
      "description": "An energetic and playful Siamese cat.",
      "createdAt": "2025-01-21T14:15:00Z",
      "updatedAt": "2025-01-21T14:15:00Z"
      },
  }`,
      },
    },
  },
};
