import { ApiSection } from "./apiData";

export const quotesData: Record<string, ApiSection> = {
  quotes: {
    name: "Quotes",
    description: "Manage and retrieve quotes from the database",
    endpoints: {
      getAll: {
        name: "Get All quotes",
        path: "/quotes",
        method: "GET",
        description: "Retrieve a list of all quotes",
        code: {
          javascript: `const getAllquotes = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/quotes');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_quotes():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/quotes')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Quote {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllquotes = async (): Promise<Quote[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/quotes');
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
  "message": "Quotes fetched successfully",
  "quotes": [
    {
      "id": 1,
      "author": "Albert Einstein",
      "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "createdAt": "2025-01-23T10:30:00Z",
      "updatedAt": "2025-01-23T10:30:00Z"
    },
    {
      "id": 2,
      "author": "Maya Angelou",
      "quote": "You will face many defeats in life, but never let yourself be defeated.",
      "createdAt": "2025-01-22T09:45:00Z",
      "updatedAt": "2025-01-22T09:45:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Quote by ID",
        path: "/quotes/:id",
        method: "GET",
        description: "Retrieve a specific Quote by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Quote",
          },
        ],
        code: {
          javascript: `const getQuoteById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/quotes/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Quote_by_id(Quote_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/quotes/{Quote_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getQuoteById = async (id: number): Promise<Quote | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/quotes/\${id}\`);
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
    "message": "Quote fetched successfully",
    "quote":
      {
        "id": 1,
      "author": "Albert Einstein",
      "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "createdAt": "2025-01-23T10:30:00Z",
      "updatedAt": "2025-01-23T10:30:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Quote",
        path: "/quotes/random",
        method: "GET",
        description: "Retrieve a random Quote",
        code: {
          javascript: `const getRandomQuote = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/quotes/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Quote():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/quotes/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomQuote = async (): Promise<Quote | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/quotes/random');
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
    "message": "Random Quote fetched successfully",
    "quote":
      {
         "id": 1,
      "author": "Albert Einstein",
      "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "createdAt": "2025-01-23T10:30:00Z",
      "updatedAt": "2025-01-23T10:30:00Z"
      },
  }`,
      },
    },
  },
};
