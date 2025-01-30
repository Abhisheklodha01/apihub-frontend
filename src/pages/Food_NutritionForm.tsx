import React from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { backendUrl } from "@/utils/server";
import { toast } from "react-hot-toast";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export const Food_NutritionForm = () => {
  const [food_name, setFood_Name] = React.useState<string>("");
  const [servingSize, setServingSize] = React.useState<string>("");
  const [calories, setCalories] = React.useState<string>("");
  const [protein, setProtein] = React.useState<string>("");
  const [carbohydrates, setCarbohydrates] = React.useState<string>();
  const [fats, setFats] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${backendUrl}/foodnutritions/add-foodnutrition`,
        {
          food_name,
          servingSize,
          calories,
          protein,
          carbohydrates,
          fats,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setLoading(false);
      toast.success(data.message, {
        position: "top-center",
      });
    } catch (error: any) {
      setLoading(false);
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen dark">
      <div className="pb-40"></div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-slate-700">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to API Stack
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Add Food Data!
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Food Name</Label>
            <Input
              name="name"
              id="name"
              placeholder="Enter food name"
              type="text"
              value={food_name}
              onChange={(e) => setFood_Name(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="serving_size">Serving Size</Label>
            <Input
              name="serving_size"
              id="serving_size"
              placeholder="Enter serving size"
              type="text"
              required
              value={servingSize}
              onChange={(e) => setServingSize(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="calories">Calories</Label>
            <Input
              name="calories"
              id="calories"
              placeholder="Enter food calories"
              type="text"
              required
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="protien">Protien</Label>
            <Input
              name="protien"
              id="protien"
              placeholder="Enter how much protien present"
              type="text"
              required
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="carbohydrates">Carbohydrates</Label>
            <Input
              name="carbohydrates"
              id="carbohydrates"
              placeholder="Enter carbohydrates rate"
              type="text"
              required
              value={carbohydrates}
              onChange={(e) => setCarbohydrates(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="fats">Fats</Label>
            <Input
              name="fats"
              id="fats"
              placeholder="Enter how much fat present in food"
              type="text"
              required
              value={fats}
              onChange={(e) => setFats(e.target.value)}
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black
             dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block
              dark:bg-zinc-800 w-full text-white rounded-md h-10 
              font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]
               dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
             {loading ? (
              <div
                className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-slate-100 rounded-full"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only"></span>
              </div>
            ) : (
              <p>Add Food &rarr;</p>
            )}
            <BottomGradient />
          </button>

          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
