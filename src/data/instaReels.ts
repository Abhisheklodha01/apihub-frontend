import { ApiSection } from "./apiData";

export const instareelsData: Record<string, ApiSection> = {
 instareels: {
    name: "Instareels",
    description: "Manage and retrieve instareels from the database",
    endpoints: {
      getAll: {
        name: "Get All instareels",
        path: "/instareels",
        method: "GET",
        description: "Retrieve a list of all instareels",
        code: {
          javascript: `const getAllinstareels = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/instareels');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_instareels():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/instareels')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface instareels {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllinstareels = async (): Promise<instareels[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/instareels');
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
  "message": "Videos fetched successfully",
  "videos": [
    {
      "id": 1,
      "title": "Morning Routine",
      "description": "A soothing morning routine to start your day.",
      "url": "https://example.com/videos/morning-routine.mp4",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "title": "Workout Session",
      "description": "Intense workout session to keep you fit.",
      "url": "https://example.com/videos/workout-session.mp4",
      "createdAt": "2025-01-22T09:15:00Z",
      "updatedAt": "2025-01-22T09:15:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get instareels by ID",
        path: "/instareels/:id",
        method: "GET",
        description: "Retrieve a specific instareels by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the instareels",
          },
        ],
        code: {
          javascript: `const getinstareelsById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/instareels/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_instareels_by_id(instareels_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/instareels/{instareels_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getinstareelsById = async (id: number): Promise<instareels | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/instareels/\${id}\`);
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
    "message": "instareel fetched successfully",
    "video":
      {
          "id": 1,
      "title": "Morning Routine",
      "description": "A soothing morning routine to start your day.",
      "url": "https://example.com/videos/morning-routine.mp4",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random instareels",
        path: "/instareels/random",
        method: "GET",
        description: "Retrieve a random instareels",
        code: {
          javascript: `const getRandominstareels = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/instareels/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_instareels():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/instareels/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandominstareels = async (): Promise<instareels | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/instareels/random');
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
    "message": "Random instareel fetched successfully",
    "video":
      {
          "id": 1,
      "title": "Morning Routine",
      "description": "A soothing morning routine to start your day.",
      "url": "https://example.com/videos/morning-routine.mp4",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
 }
};
