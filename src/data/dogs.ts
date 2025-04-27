import { ApiSection } from "./apiData";

export const dogsData: Record<string, ApiSection> = {
 dogs: {
    name: "dogs",
    description: "Manage and retrieve dogs from the database",
    endpoints: {
      getAll: {
        name: "Get All dogs",
        path: "/dogs",
        method: "GET",
        description: "Retrieve a list of all dogs",
        code: {
          javascript: `const getAlldogs = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/dogs/get-dogs');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_dogs():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/dogs/get-dogs')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Dog {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAlldogs = async (): Promise<Dog[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/dogs/get-dogs');
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
  "message": "Dogs fetched successfully",
  "dogs": [
    {
      "id": 1,
      "name": "Buddy",
      "breed": "Golden Retriever",
      "location": "San Francisco",
      "description": "A friendly and loyal dog who loves playing fetch.",
      "imageUrl": "https://example.com/dog-images/buddy.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Max",
      "breed": "German Shepherd",
      "location": "Los Angeles",
      "description": "A protective and intelligent dog, great for families.",
      "imageUrl": "https://example.com/dog-images/max.jpg",
      "createdAt": "2025-01-22T08:30:00Z",
      "updatedAt": "2025-01-22T08:30:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Dog by ID",
        path: "/dogs/:id",
        method: "GET",
        description: "Retrieve a specific Dog by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Dog",
          },
        ],
        code: {
          javascript: `const getDogById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/dogs/get-dogs/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Dog_by_id(Dog_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/dogs/get-dogs/{Dog_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getDogById = async (id: number): Promise<Dog | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/dogs/get-dogs/\${id}\`);
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
    "message": "Dog fetched successfully",
    "dog":
      {
      "id": 1,
      "name": "Buddy",
      "breed": "Golden Retriever",
      "location": "San Francisco",
      "description": "A friendly and loyal dog who loves playing fetch.",
      "imageUrl": "https://example.com/dog-images/buddy.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Dog",
        path: "/dogs/random",
        method: "GET",
        description: "Retrieve a random Dog",
        code: {
          javascript: `const getRandomDog = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/dogs/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Dog():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/dogs/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomDog = async (): Promise<Dog | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/dogs/random');
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
    "message": "Random Dog fetched successfully",
    "dog":
      {
      "id": 1,
      "name": "Buddy",
      "breed": "Golden Retriever",
      "location": "San Francisco",
      "description": "A friendly and loyal dog who loves playing fetch.",
      "imageUrl": "https://example.com/dog-images/buddy.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
 }
};
