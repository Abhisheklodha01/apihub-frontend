import { ApiSection } from "./apiData";

export const carsData: Record<string, ApiSection> = {
  cars: {
    name: "Cars",
    description: "Manage and retrieve cars from the databse",
    endpoints: {
      getAll: {
        name: "Get All Cars",
        path: "/cars",
        method: "GET",
        description: "Retrieve a list of all cars",
        code: {
          javascript: `const getAllCars = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/cars');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_cars():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/cars')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Car {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllCars = async (): Promise<car[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/cars');
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
   {
  "success": true,
  "message": "Cars fetched successfully",
  "cars": [
    {
      "id": 2,
      "name": "Honda Civic",
      "model": "EX",
      "year": 2021,
      "mileage": 12000,
      "description": "A sporty and comfortable sedan with advanced safety features.",
      "imageUrl": "https://apistack.onrender.com/api/v1/car-images/honda-civic.jpg",
      "createdAt": "2025-01-22T08:30:00Z",
      "updatedAt": "2025-01-22T08:30:00Z"
    },
    {
      "id": 1,
      "name": "Toyota Corolla",
      "model": "LE",
      "year": 2020,
      "mileage": 15000,
      "description": "A well-maintained compact sedan with excellent fuel efficiency.",
      "imageUrl": "https://apistack.onrender.com/api/v1/car-images/toyota-corolla.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Car by ID",
        path: "/carss/:id",
        method: "GET",
        description: "Retrieve a specific Car by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Car",
          },
        ],
        code: {
          javascript: `const getCarById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/cars/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_car_by_id(car_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/cars/{car_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getCarById = async (id: number): Promise<Car | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/cars/\${id}\`);
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
  "message": "Cars fetched successfully",
    {
      "id": 1,
      "name": "Toyota Corolla",
      "model": "LE",
      "year": 2020,
      "mileage": 15000,
      "description": "A well-maintained compact sedan with excellent fuel efficiency.",
      "imageUrl": "https://apistack.onrender.com/api/v1/car-images/toyota-corolla.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    }
}
`,
      },
      getRandom: {
        name: "Get Random Car",
        path: "/cars/random",
        method: "GET",
        description: "Retrieve a random car",
        code: {
          javascript: `const getRandomcar = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/cars/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_car():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/cars/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomCar = async (): Promise<Car | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/cars/random');
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
    "message": "Random Car fetched successfully",
    "data":
      {
      "id": 2,
      "name": "Honda Civic",
      "model": "EX",
      "year": 2021,
      "mileage": 12000,
      "description": "A sporty and comfortable sedan with advanced safety features.",
      "imageUrl": "https://apistack.onrender.com/api/v1/car-images/honda-civic.jpg",
      "createdAt": "2025-01-22T08:30:00Z",
      "updatedAt": "2025-01-22T08:30:00Z"
    },
  }`,
      },
    },
  },
};
