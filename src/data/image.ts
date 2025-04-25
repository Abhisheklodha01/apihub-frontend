import { ApiSection } from "./apiData";

export const imagesData: Record<string, ApiSection> = {
 images: {
    name: "Images",
    description: "Manage and retrieve images from the database",
    endpoints: {
      getAll: {
        name: "Get All images",
        path: "/images",
        method: "GET",
        description: "Retrieve a list of all images",
        code: {
          javascript: `const getAllimages = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/images');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_images():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/images')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Image {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllimages = async (): Promise<Image[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/images');
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
  "message": "Images fetched successfully",
  "images": [
    {
      "id": 1,
      "name": "Sunset",
      "description": "A beautiful sunset view over the mountains.",
      "url": "https://example.com/images/sunset.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Ocean Waves",
      "description": "Crystal clear ocean waves crashing onto the beach.",
      "url": "https://example.com/images/ocean-waves.jpg",
      "createdAt": "2025-01-22T09:15:00Z",
      "updatedAt": "2025-01-22T09:15:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Image by ID",
        path: "/images/:id",
        method: "GET",
        description: "Retrieve a specific Image by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Image",
          },
        ],
        code: {
          javascript: `const getImageById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/images/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Image_by_id(Image_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/images/{Image_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getImageById = async (id: number): Promise<Image | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/images/\${id}\`);
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
    "message": "Image fetched successfully",
    "image":
      {
       "id": 1,
      "name": "Sunset",
      "description": "A beautiful sunset view over the mountains.",
      "url": "https://example.com/images/sunset.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Image",
        path: "/images/random",
        method: "GET",
        description: "Retrieve a random Image",
        code: {
          javascript: `const getRandomImage = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/images/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Image():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/images/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomImage = async (): Promise<Image | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/images/random');
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
    "message": "Random Image fetched successfully",
    "image":
      {
       "id": 1,
      "name": "Sunset",
      "description": "A beautiful sunset view over the mountains.",
      "url": "https://example.com/images/sunset.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
 }
};
