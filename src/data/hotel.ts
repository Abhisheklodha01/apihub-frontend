import { ApiSection } from "./apiData";

export const hotelsData: Record<string, ApiSection> = {
  hotels: {
    name: "Hotels",
    description: "Manage and retrieve hotels from the databse",
    endpoints: {
      getAll: {
        name: "Get All hotels",
        path: "/hotels",
        method: "GET",
        description: "Retrieve a list of all hotels",
        code: {
          javascript: `const getAllhotels = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/hotels/get-hotels');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_hotels():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/hotels/get-hotels')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Hotel {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllhotels = async (): Promise<Hotel[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/hotels/get-hotels');
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
  "message": "Hotels fetched successfully",
  "hotels": [
    {
      "id": 1,
      "name": "The Grand Resort",
      "city": "mumbai",
      "location": "Marine Drive, Mumbai",
      "priceRange": "$200 - $400 per night",
      "description": "A luxurious hotel with sea-facing views and premium amenities.",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Hilltop Inn",
      "city": "manali",
      "location": "Old Manali Road, Manali",
      "priceRange": "$50 - $100 per night",
      "description": "A cozy inn located amidst the hills of Manali with beautiful views.",
      "createdAt": "2025-01-22T08:30:00Z",
      "updatedAt": "2025-01-22T08:30:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Hotel by ID",
        path: "/hotels/:id",
        method: "GET",
        description: "Retrieve a specific Hotel by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Hotel",
          },
        ],
        code: {
          javascript: `const getHotelById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/hotels/get-hotel/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Hotel_by_id(Hotel_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/hotels/get-hotel/{Hotel_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getHotelById = async (id: number): Promise<Hotel | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/hotels/get-hotel/\${id}\`);
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
    "message": "Hotel fetched successfully",
    "hotel":
      {
        "id": 1,
      "name": "The Grand Resort",
      "city": "mumbai",
      "location": "Marine Drive, Mumbai",
      "priceRange": "$200 - $400 per night",
      "description": "A luxurious hotel with sea-facing views and premium amenities.",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Hotel",
        path: "/hotels/random",
        method: "GET",
        description: "Retrieve a random Hotel",
        code: {
          javascript: `const getRandomHotel = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/hotels/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Hotel():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/hotels/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomHotel = async (): Promise<Hotel | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/hotels/random');
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
    "message": "Random Hotel fetched successfully",
    "hotel":
      {
        "id": 1,
      "name": "The Grand Resort",
      "city": "mumbai",
      "location": "Marine Drive, Mumbai",
      "priceRange": "$200 - $400 per night",
      "description": "A luxurious hotel with sea-facing views and premium amenities.",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
  },
};
