import { ApiSection } from "./apiData";

export const moviesData: Record<string, ApiSection> = {
 movies: {
    name: "Movies",
    description: "Manage and retrieve movies from the database",
    endpoints: {
      getAll: {
        name: "Get All movies",
        path: "/movies",
        method: "GET",
        description: "Retrieve a list of all movies",
        code: {
          javascript: `const getAllmovies = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/movies/get-movies');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_movies():
      try:
          response = requests.get('https://api.apistack.site/api/v1/movies/get-movies')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Movie {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllmovies = async (): Promise<Movie[]> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/movies/get-movies');
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
  "message": "Movies fetched successfully",
  "movies": [
    {
      "id": 1,
      "title": "Inception",
      "description": "A mind-bending thriller by Christopher Nolan.",
      "director": "Christopher Nolan",
      "realeDate": "2010-07-16",
      "poster": "https://example.com/images/inception.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "title": "The Matrix",
      "description": "A sci-fi action film about virtual reality.",
      "director": "Wachowskis",
      "realeDate": "1999-03-31",
      "poster": "https://example.com/images/matrix.jpg",
      "createdAt": "2025-01-22T09:15:00Z",
      "updatedAt": "2025-01-22T09:15:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Movie by ID",
        path: "/movies/:id",
        method: "GET",
        description: "Retrieve a specific Movie by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Movie",
          },
        ],
        code: {
          javascript: `const getMovieById = async (id) => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/movies/get-movies/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Movie_by_id(Movie_id):
      try:
          response = requests.get(f'https://api.apistack.site/api/v1/movies/get-movies/{Movie_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getMovieById = async (id: number): Promise<Movie | null> => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/movies/get-movies/\${id}\`);
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
    "message": "Movie fetched successfully",
    "movie":
      {
        "id": 1,
      "title": "Inception",
      "description": "A mind-bending thriller by Christopher Nolan.",
      "director": "Christopher Nolan",
      "realeDate": "2010-07-16",
      "poster": "https://example.com/images/inception.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Movie",
        path: "/movies/random",
        method: "GET",
        description: "Retrieve a random Movie",
        code: {
          javascript: `const getRandomMovie = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/movies/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Movie():
      try:
          response = requests.get('https://api.apistack.site/api/v1/movies/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomMovie = async (): Promise<Movie | null> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/movies/random');
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
    "message": "Random Movie fetched successfully",
    "movie":
      {
        "id": 1,
      "title": "Inception",
      "description": "A mind-bending thriller by Christopher Nolan.",
      "director": "Christopher Nolan",
      "realeDate": "2010-07-16",
      "poster": "https://example.com/images/inception.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
 }
};
