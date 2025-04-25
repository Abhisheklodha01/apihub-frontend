import { ApiSection } from "./apiData";

export const todosData: Record<string, ApiSection> = {
  todos: {
    name: "Todos",
    description: "Manage and retrieve todos from the database",
    endpoints: {
      getAll: {
        name: "Get All todos",
        path: "/todos",
        method: "GET",
        description: "Retrieve a list of all todos",
        code: {
          javascript: `const getAlltodos = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/todos');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_todos():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/todos')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Todo {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAlltodos = async (): Promise<Todo[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/todos');
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
  "message": "Todos fetched successfully",
  "todos": [
    {
      "id": 1,
      "name": "Finish React project",
      "description": "Complete the pending tasks in the React project",
      "createdAt": "2025-01-23T11:00:00Z",
      "updatedAt": "2025-01-23T11:00:00Z"
    },
    {
      "id": 2,
      "name": "Grocery shopping",
      "description": "Buy vegetables and fruits for the week",
      "createdAt": "2025-01-22T10:30:00Z",
      "updatedAt": "2025-01-22T10:30:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Todo by ID",
        path: "/todos/:id",
        method: "GET",
        description: "Retrieve a specific Todo by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Todo",
          },
        ],
        code: {
          javascript: `const getTodoById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/todos/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Todo_by_id(Todo_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/todos/{Todo_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getTodoById = async (id: number): Promise<Todo | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/todos/\${id}\`);
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
    "message": "Todo fetched successfully",
    "todo":
      {
        "id": 1,
      "name": "Finish React project",
      "description": "Complete the pending tasks in the React project",
      "createdAt": "2025-01-23T11:00:00Z",
      "updatedAt": "2025-01-23T11:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Todo",
        path: "/todos/random",
        method: "GET",
        description: "Retrieve a random Todo",
        code: {
          javascript: `const getRandomTodo = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/todos/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Todo():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/todos/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomTodo = async (): Promise<Todo | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/todos/random');
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
    "message": "Random Todo fetched successfully",
    "todo":
      {
        "id": 1,
      "name": "Finish React project",
      "description": "Complete the pending tasks in the React project",
      "createdAt": "2025-01-23T11:00:00Z",
      "updatedAt": "2025-01-23T11:00:00Z"
        "createdAt": "2024-01-22T10:00:00Z"
      },
  }`,
      },
    },
  },
};
