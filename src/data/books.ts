import { ApiSection } from "./apiData";

export const booksData: Record<string, ApiSection> = {
  books: {
    name: "Books",
    description: "Manage and retrieve books from the database",
    endpoints: {
      getAll: {
        name: "Get All books",
        path: "/books",
        method: "GET",
        description: "Retrieve a list of all books",
        code: {
          javascript: `const getAllBooks = async () => {
    try {
      const response = await fetch('https://api.apistack.site/books/get-books');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_books():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/books/get-books')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Article {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllbooks = async (): Promise<Article[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/books//get-books');
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
    "message": "Books fetched successfully",
    "data": [
      {
        "id": 1,
        "title": "First Book",
        "description": "Book description here...",
        author: "Book author here",
        "imageUrl": "http://images.bookimage.com/",
        "createdAt": "2024-01-22T10:00:00Z",
        "updatedAt": "2024-01-22T10:00:00Z" 
      },
      {
       "id": 1,
        "title": "Second Book",
        "description": "Book description here...",
        author: "Book author here",
        "imageUrl": "http://images.bookimage.com/",
        "createdAt": "2024-01-22T10:00:00Z",
        "updatedAt": "2024-01-22T10:00:00Z" 
      }
    ]
  }`,
      },
      getById: {
        name: "Get Book by ID",
        path: "/books/:id",
        method: "GET",
        description: "Retrieve a specific book by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the book",
          },
        ],
        code: {
          javascript: `const getBookById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/books/get-books/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_book_by_id(article_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/books/get-books/{article_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getArticleById = async (id: number): Promise<Article | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/books/get-books/\${id}\`);
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
    "message": "Book fetched successfully",
    "data":
      {
        "id": 1,
        "title": "First Book",
        "description": "Book description here...",
        author: "Book author here",
        "imageUrl": "http://images.bookimage.com/",
        "createdAt": "2024-01-22T10:00:00Z",
        "updatedAt": "2024-01-22T10:00:00Z" 
      },
  }`,
      },
      getRandom: {
        name: "Get Random Book",
        path: "/books/get-random-book",
        method: "GET",
        description: "Retrieve a random book",
        code: {
          javascript: `const getRandomBook = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/books/get-random-book');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_article():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/books/get-random-book')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomArticle = async (): Promise<Article | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/books/get-random-book');
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
    "message": "Random Book fetched successfully",
    "data":
      {
       "id": 1,
        "title": "Random Book",
        "description": "Book description here...",
        author: "Book author here",
        "imageUrl": "http://images.bookimage.com/",
        "createdAt": "2024-01-22T10:00:00Z",
        "updatedAt": "2024-01-22T10:00:00Z" 
      },
  }`,
      },
    },
  },
};
