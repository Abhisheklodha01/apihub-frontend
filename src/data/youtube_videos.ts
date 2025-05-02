import { ApiSection } from "./apiData";

export const youtube_videoData: Record<string, ApiSection> = {
 youtube_video: {
    name: "Youtube_Video",
    description: "Manage and retrieve youtube_video from the database",
    endpoints: {
      getAll: {
        name: "Get All youtube_video",
        path: "/youtube_video",
        method: "GET",
        description: "Retrieve a list of all youtube_video",
        code: {
          javascript: `const getAllyoutube_video = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/youtube/get-youtube-videos');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_youtube_video():
      try:
          response = requests.get('https://api.apistack.site/api/v1/youtube/get-youtube-videos')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Youtube_Video {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllyoutube_video = async (): Promise<Youtube_Video[]> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/youtube/get-youtube-videos');
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
  "message": "Videos retrieved successfully",
  "videos": [
    {
      "id": 101,
      "title": "How to Build a REST API",
      "description": "A comprehensive guide on building REST APIs using Node.js",
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "createdAt": "2025-01-23T12:00:00Z",
      "updatedAt": "2025-01-23T12:00:00Z"
    },
    {
      "id": 102,
      "title": "Introduction to JavaScript",
      "description": "A beginner-friendly tutorial on JavaScript basics",
      "url": "https://www.youtube.com/watch?v=Ks-_Mh1QhMc",
      "createdAt": "2025-01-22T10:30:00Z",
      "updatedAt": "2025-01-22T10:30:00Z"
    },
  ]
}

`,
      },
      getById: {
        name: "Get Youtube_Video by ID",
        path: "/youtube_video/:id",
        method: "GET",
        description: "Retrieve a specific Youtube_Video by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Youtube_Video",
          },
        ],
        code: {
          javascript: `const getYoutube_VideoById = async (id) => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/youtube/get-youtube-video/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Youtube_Video_by_id(Youtube_Video_id):
      try:
          response = requests.get(f'https://api.apistack.site/api/v1/youtube/get-youtube-video/{Youtube_Video_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getYoutube_VideoById = async (id: number): Promise<Youtube_Video | null> => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/youtube/get-youtube-video/\${id}\`);
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
    "message": "Youtube_Video fetched successfully",
    "youtube_video":
      {
       "id": 101,
      "title": "How to Build a REST API",
      "description": "A comprehensive guide on building REST APIs using Node.js",
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "createdAt": "2025-01-23T12:00:00Z",
      "updatedAt": "2025-01-23T12:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Youtube_Video",
        path: "/youtube_video/random",
        method: "GET",
        description: "Retrieve a random Youtube_Video",
        code: {
          javascript: `const getRandomYoutube_Video = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/youtube/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Youtube_Video():
      try:
          response = requests.get('https://api.apistack.site/api/v1/youtube/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomYoutube_Video = async (): Promise<Youtube_Video | null> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/youtube/random');
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
    "message": "Random Youtube_Video fetched successfully",
    "youtube_video": {
      {
       "id": 101,
      "title": "How to Build a REST API",
      "description": "A comprehensive guide on building REST APIs using Node.js",
      "url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "createdAt": "2025-01-23T12:00:00Z",
      "updatedAt": "2025-01-23T12:00:00Z"
      },
  }`,
      },
    },
 }
};
