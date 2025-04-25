import { ApiSection } from "./apiData";

export const productsData: Record<string, ApiSection> = {
 products: {
    name: "Products",
    description: "Manage and retrieve products from the database",
    endpoints: {
      getAll: {
        name: "Get All products",
        path: "/products",
        method: "GET",
        description: "Retrieve a list of all products",
        code: {
          javascript: `const getAllproducts = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/products');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_all_products():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/products')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `interface Product {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  }
  
  const getAllproducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/products');
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
  "message": "Products fetched successfully",
  "products": [
    {
      "id": 1,
      "name": "Wireless Mouse",
      "price": 29.99,
      "categories": ["Electronics", "Accessories"],
      "availableOn": "2025-01-23",
      "description": "A high-precision wireless mouse with customizable buttons.",
      "url": "https://example.com/images/wireless-mouse.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "name": "Organic Coffee",
      "price": 15.99,
      "categories": ["Groceries", "Beverages"],
      "availableOn": "2025-01-22",
      "description": "Freshly roasted organic coffee beans with a rich flavor.",
      "url": "https://example.com/images/organic-coffee.jpg",
      "createdAt": "2025-01-22T09:15:00Z",
      "updatedAt": "2025-01-22T09:15:00Z"
    }
  ]
}
`,
      },
      getById: {
        name: "Get Product by ID",
        path: "/products/:id",
        method: "GET",
        description: "Retrieve a specific Product by its ID",
        params: [
          {
            name: "id",
            type: "number",
            required: true,
            description: "The unique identifier of the Product",
          },
        ],
        code: {
          javascript: `const getProductById = async (id) => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/products/\${id}\`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_Product_by_id(Product_id):
      try:
          response = requests.get(f'https://apistack.onrender.com/api/v1/products/{Product_id}')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getProductById = async (id: number): Promise<Product | null> => {
    try {
      const response = await fetch(\`https://apistack.onrender.com/api/v1/products/\${id}\`);
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
    "message": "Product fetched successfully",
    "product":
      {
        "id": 1,
      "name": "Wireless Mouse",
      "price": 29.99,
      "categories": ["Electronics", "Accessories"],
      "availableOn": "2025-01-23",
      "description": "A high-precision wireless mouse with customizable buttons.",
      "url": "https://example.com/images/wireless-mouse.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
      getRandom: {
        name: "Get Random Product",
        path: "/products/random",
        method: "GET",
        description: "Retrieve a random Product",
        code: {
          javascript: `const getRandomProduct = async () => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/products/random');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
    }
  };`,
          python: `import requests
  
  def get_random_Product():
      try:
          response = requests.get('https://apistack.onrender.com/api/v1/products/random')
          return response.json()
      except requests.RequestException as e:
          print(f"Error: {e}")`,
          typescript: `const getRandomProduct = async (): Promise<Product | null> => {
    try {
      const response = await fetch('https://apistack.onrender.com/api/v1/products/random');
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
    "message": "Random Product fetched successfully",
    "product":
      {
        "id": 1,
      "name": "Wireless Mouse",
      "price": 29.99,
      "categories": ["Electronics", "Accessories"],
      "availableOn": "2025-01-23",
      "description": "A high-precision wireless mouse with customizable buttons.",
      "url": "https://example.com/images/wireless-mouse.jpg",
      "createdAt": "2025-01-23T10:00:00Z",
      "updatedAt": "2025-01-23T10:00:00Z"
      },
  }`,
      },
    },
 }
};
