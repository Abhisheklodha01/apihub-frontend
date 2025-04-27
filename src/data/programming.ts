import { ApiSection } from "./apiData";

export const programming_languagesData: Record<string, ApiSection> = {
  programming_languages: {
    name: "Programming_Languages",
    description: "Manage and retrieve programming_languages from the database",
    endpoints: {
      getAll: {
        name: "Get All programming_languages",
        path: "/programming_languages",
        method: "GET",
        description: "Retrieve a list of all programming_languages",
        code: {
          javascript: `const getAllprogramming_languages = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/programming_languages/get-programming-languages');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_programming_languages():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/programming_languages/get-programming-languages')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Programming_Language {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllprogramming_languages = async (): Promise<Programming_Language[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/programming_languages/get-programming-languages');
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
  "message": "Programming languages fetched successfully",
  "languages": [
    {
      "id": 1,
      "name": "JavaScript",
      "description": "A versatile, high-level programming language primarily used for web development.",
      "creator": "Brendan Eich",
      "year": 1995,
      "runtime": "Client and Server",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Python",
      "description": "A high-level programming language known for its simplicity and readability.",
      "creator": "Guido van Rossum",
      "year": 1991,
      "runtime": "Client and Server",
      "createdAt": "2025-01-22T09:15:00Z",
      "updatedAt": "2025-01-22T09:15:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Programming_Language by ID",
        path: "/programming_languages/:id",
        method: "GET",
        description: "Retrieve a specific Programming_Language by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Programming_Language",
          },
        ],
        code: {
          javascript: `const getProgramming_LanguageById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/programming_languages/get-programming-language/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Programming_Language_by_id(Programming_Language_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/programming_languages/get-programming-language/{Programming_Language_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getProgramming_LanguageById = async (id: number): Promise<Programming_Language | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/programming_languages/get-programming-language/\${id}\`);
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
    "message": "Programming_Language fetched successfully",
    "progamming_language":
      {
        "id": 1,
      "name": "JavaScript",
      "description": "A versatile, high-level programming language primarily used for web development.",
      "creator": "Brendan Eich",
      "year": 1995,
      "runtime": "Client and Server",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Programming_Language",
        path: "/programming_languages/random",
        method: "GET",
        description: "Retrieve a random Programming_Language",
        code: {
          javascript: `const getRandomProgramming_Language = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/programming_languages/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Programming_Language():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/programming_languages/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomProgramming_Language = async (): Promise<Programming_Language | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/programming_languages/random');
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
    "message": "Random Programming_Language fetched successfully",
    "programming_language":
      {
        "id": 1,
      "name": "JavaScript",
      "description": "A versatile, high-level programming language primarily used for web development.",
      "creator": "Brendan Eich",
      "year": 1995,
      "runtime": "Client and Server",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
  },
};
