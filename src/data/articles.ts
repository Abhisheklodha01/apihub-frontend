import { ApiSection } from "./apiData";

export const articlesData: Record<string, ApiSection> = {
  articles: {
    name: "Articles",
    description: "Manage and retrieve articles from the database",
    endpoints: {
      getAll: {
        name: "Get All Articles",
        path: "/articles",
        method: "GET",
        description: "Retrieve a list of all articles",
        code: {
          javascript: `const getAllArticles = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/articles/get-articles');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_articles():
      try:
          response = requests.get('https://api.apistack.site/api/v1/articles/get-articles')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Article {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllArticles = async (): Promise<Article[]> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/articles/get-articles');
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
    "message": "Articles fetched successfully",
    "data": [
      {
        "id": 1,
        "title": "First Article",
        "content": "Content here...",
        "createdAt": "2024-01-22T10:00:00Z"
      },
      {
        "id": 2,
        "title": "Second Article",
        "content": "More content...",
        "createdAt": "2024-01-22T11:00:00Z"
      }
    ]
  }`,
      },
      getById: {
        name: "Get Article by ID",
        path: "/articles/:id",
        method: "GET",
        description: "Retrieve a specific article by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the article",
          },
        ],
        code: {
          javascript: `const getArticleById = async (id) => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/articles/get-article/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_article_by_id(article_id):
      try:
          response = requests.get(f'https://api.apistack.site/api/v1/articles/get-article/{article_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getArticleById = async (id: number): Promise<Article | null> => {
    try {
      const response = await fetch(\`https://api.apistack.site/api/v1/articles/get-article/\${id}\`);
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
    "message": "Article fetched successfully",
    "data":
      {
        "id": 1,
        "title": "First Article",
        "content": "Content here...",
        "createdAt": "2024-01-22T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Article",
        path: "/articles/get-random-article",
        method: "GET",
        description: "Retrieve a random article",
        code: {
          javascript: `const getRandomArticle = async () => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/articles/get-random-article');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_article():
      try:
          response = requests.get('https://api.apistack.site/api/v1/articles/get-random-article')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomArticle = async (): Promise<Article | null> => {
    try {
      const response = await fetch('https://api.apistack.site/api/v1/articles/get-random-article');
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
    "message": "Random article fetched successfully",
    "data":
      {
        "id": 1,
        "title": "First Article",
        "content": "Content here...",
        "createdAt": "2024-01-22T10:00:00Z"
      },
  }`,
      },
    },
  },
};
