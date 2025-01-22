import { ApiSection } from "./apiData";

export const jokesData: Record<string, ApiSection> = {
 jokes: {
    name: "Jokes",
    description: "Manage and retrieve jokes from the database",
    endpoints: {
      getAll: {
        name: "Get All jokes",
        path: "/jokes",
        method: "GET",
        description: "Retrieve a list of all jokes",
        code: {
          javascript: `const getAlljokes = async () => {
    try {
      const response = await fetch('https://api.apistack.site/jokes');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_jokes():
      try:
          response = requests.get('https://api.example.com/jokes')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Joke {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAlljokes = async (): Promise<Joke[]> => {
    try {
      const response = await fetch('https://api.example.com/jokes');
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
  "message": "Jokes fetched successfully",
  "jokes": [
    {
      "id": 1,
      "title": "Why did the chicken cross the road?",
      "type": "Classic",
      "description": "To get to the other side!",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "title": "Knock, knock",
      "type": "Interactive",
      "description": "Who's there?",
      "createdAt": "2025-01-22T09:15:00Z",
      "updatedAt": "2025-01-22T09:15:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Joke by ID",
        path: "/jokes/:id",
        method: "GET",
        description: "Retrieve a specific Joke by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Joke",
          },
        ],
        code: {
          javascript: `const getJokeById = async (id) => {
    try {
      const response = await fetch(\`https://api.example.com/jokes/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Joke_by_id(Joke_id):
      try:
          response = requests.get(f'https://api.example.com/jokes/{Joke_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getJokeById = async (id: number): Promise<Joke | null> => {
    try {
      const response = await fetch(\`https://api.example.com/jokes/\${id}\`);
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
    "message": "Joke fetched successfully",
    "joke":
      {
       "id": 1,
      "title": "Why did the chicken cross the road?",
      "type": "Classic",
      "description": "To get to the other side!",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Joke",
        path: "/jokes/random",
        method: "GET",
        description: "Retrieve a random Joke",
        code: {
          javascript: `const getRandomJoke = async () => {
    try {
      const response = await fetch('https://api.example.com/jokes/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Joke():
      try:
          response = requests.get('https://api.example.com/jokes/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomJoke = async (): Promise<Joke | null> => {
    try {
      const response = await fetch('https://api.example.com/jokes/random');
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
    "message": "Random Joke fetched successfully",
    "joke":
      {
        "id": 1,
      "title": "Why did the chicken cross the road?",
      "type": "Classic",
      "description": "To get to the other side!",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
 }
};
