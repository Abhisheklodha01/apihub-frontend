import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgetPassword from "./pages/ForgetPassword";
import Home from "./pages/Home";
import { useEffect } from "react"
import Sidebar from "./pages/Sidebar";
import { Admin } from "./pages/Admin";
import { ArticleForm } from "./pages/ArticleForm";
import { BookForm } from "./pages/BookForm";
import { CarForm } from "./pages/CarForm";
import { CatForm } from "./pages/CatForm";
import { CountryForm } from "./pages/CountryForm";
import { DogForm } from "./pages/DogForm";
import { FlowerForm } from "./pages/FlowerForm";
import { Food_NutritionForm } from "./pages/Food_NutritionForm";
import { HotalForm } from "./pages/HotalForm";
import { ImageForm } from "./pages/ImageForm";
import { Insta_ReelForm } from "./pages/Insta_ReelForm";
import { JokesForm } from "./pages/JokesForm";
import { MovieForm } from "./pages/MovieForm";
import { PlantForm } from "./pages/PlantForm";
import { ProductForm } from "./pages/ProductForm";
import { ProgrammingForm } from "./pages/ProgrammingForm";
import { QuotesForm } from "./pages/QuotesForm";
import { ResturentsForm } from "./pages/ResturentsForm";
import { TodoForm } from "./pages/TodoForm";
import { Youtube_VideoForm } from "./pages/Youtube_VideoForm";

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Signin />} />
        <Route path="/auth/forget-password" element={<ForgetPassword />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/articles" element={<ArticleForm />} />
        <Route path="/admin/books" element={<BookForm />} />
        <Route path="/admin/cars" element={<CarForm />} />
        <Route path="/admin/cats" element={<CatForm />} />
        <Route path="/admin/country" element={<CountryForm />} />
        <Route path="/admin/dogs" element={<DogForm />} />
        <Route path="/admin/flowers" element={<FlowerForm />} />
        <Route path="/admin/food_nutritions" element={<Food_NutritionForm />} />

        <Route path="/admin/hotals" element={<HotalForm />} />
        <Route path="/admin/images" element={<ImageForm />} />
        <Route path="/admin/insta_reels" element={<Insta_ReelForm />} />
        <Route path="/admin/jokes" element={<JokesForm />} />
        <Route path="/admin/movies" element={<MovieForm />} />
        <Route path="/admin/plants" element={<PlantForm />} />
        <Route path="/admin/products" element={<ProductForm />} />
        <Route path="/admin/programming" element={<ProgrammingForm />} />
        <Route path="/admin/quotes" element={<QuotesForm />} />
        <Route path="/admin/resturents" element={<ResturentsForm />} />
        <Route path="/admin/todo" element={<TodoForm />} />
        <Route path="/admin/youtube_videos" element={<Youtube_VideoForm />} />
      </Routes>
      <Routes>
        <Route path="/docs/sidebar" element={<Sidebar />} />
      </Routes>
    </>
  );
}

export default App;
