import { articlesData } from "./articles";
import { booksData } from "./books";
import { carsData } from "./cars";
import { catsData } from "./cats";
import { countriesData } from "./countries";
import { dogsData } from "./dogs";
import { flowersData } from "./flowers";
import { foodnutritionsData } from "./food_nutrition";
import { hotelsData } from "./hotel";
import { imagesData } from "./image";
import { instareelsData } from "./instaReels";
import { jokesData } from "./jokes";
import { moviesData } from "./movies";
import { plantsData } from "./plants";
import { productsData } from "./products";
import { programming_languagesData } from "./programming";
import { quotesData } from "./quotes";
import { restaurantsData } from "./restaurants";
import { todosData } from "./todos";
import { youtube_videoData } from "./youtube_videos";

export interface CodeExample {
  javascript: string;
  python: string;
  typescript: string;
}

interface Endpoint {
  name: string;
  path: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  description: string;
  code: CodeExample;
  response: string;
  params?: {
    name: string;
    type: string;
    required: boolean;
    description: string;
  }[];
}

export interface ApiSection {
  name: string;
  description: string;
  endpoints: Record<string, Endpoint>;
}

export const apiData: Record<string, ApiSection> = {
  articles: articlesData.articles,
  books: booksData.books,
  cars: carsData.cars,
  cats: catsData.cats,
  countries: countriesData.countries,
  dogs: dogsData.dogs,
  flowers: flowersData.flowers,
  food_nutrients: foodnutritionsData.foodnutritions,
  hotels: hotelsData.hotels,
  images: imagesData.images,
  instareels: instareelsData.instareels,
  jokes: jokesData.jokes,
  movies: moviesData.movies,
  plants: plantsData.plants,
  products: productsData.products,
  programming_languages: programming_languagesData.programming_languages,
  quotes: quotesData.quotes,
  restaurants: restaurantsData.restaurants,
  todos: todosData.todos,
  youtube_videos: youtube_videoData.youtube_video,
};
