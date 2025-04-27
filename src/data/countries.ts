import { ApiSection } from "./apiData";

export const countriesData: Record<string, ApiSection> = {
  countries: {
    name: "countries",
    description: "Manage and retrieve countries from the database",
    endpoints: {
      getAll: {
        name: "Get All countries",
        path: "/countries",
        method: "GET",
        description: "Retrieve a list of all countries",
        code: {
          javascript: `const getAllcountries = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/countries/get-countries');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_countries():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/countries/get-countries')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Country {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllcountries = async (): Promise<Country[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/countries/get-countries');
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
  "message": "Countries fetched successfully",
  "countries": [
    {
      "id": 1,
      "name": "India",
      "population": 1400000000,
      "capital": "New Delhi",
      "currency": "Indian Rupee",
      "description": "A culturally rich and diverse country in South Asia.",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Japan",
      "population": 125800000,
      "capital": "Tokyo",
      "currency": "Japanese Yen",
      "description": "An East Asian country known for its technology and culture.",
      "createdAt": "2025-01-22T09:30:00Z",
      "updatedAt": "2025-01-22T09:30:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Country by ID",
        path: "/countries/:id",
        method: "GET",
        description: "Retrieve a specific Country by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Country",
          },
        ],
        code: {
          javascript: `const getCountryById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/countries/get-country/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Country_by_id(Country_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/countries/get-country/{Country_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getCountryById = async (id: number): Promise<Country | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/countries/get-country/\${id}\`);
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
    "message": "Country fetched successfully",
    "country":
      {
       "id": 1,
      "name": "India",
      "population": 1400000000,
      "capital": "New Delhi",
      "currency": "Indian Rupee",
      "description": "A culturally rich and diverse country in South Asia.",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Country",
        path: "/countries/random",
        method: "GET",
        description: "Retrieve a random Country",
        code: {
          javascript: `const getRandomCountry = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/countries/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Country():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/countries/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomCountry = async (): Promise<Country | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/countries/random');
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
    "message": "Random Country fetched successfully",
    "country":
      {
       "id": 1,
      "name": "India",
      "population": 1400000000,
      "capital": "New Delhi",
      "currency": "Indian Rupee",
      "description": "A culturally rich and diverse country in South Asia.",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
  },
};
