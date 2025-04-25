import React from "react";
import { cn } from "@/lib/utils";
import axios from "axios";
import { backendUrl } from "@/utils/server";
import { toast } from "react-hot-toast";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export const CountryForm = () => {
  const [name, setName] = React.useState<string>("");
  const [population, setPopulation] = React.useState<string>("");
  const [capital, setCapital] = React.useState<string>("");
  const [currency, setCurrency] = React.useState<string>("");
  const [description, setDescription] = React.useState<string>();
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${backendUrl}/countries/add-country`,
        {
          name,
          population,
          capital,
          currency,
          description,
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
      <div className="ml-3 mr-3">
        <div className="max-w-md w-full mx-auto rounded-xl md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-slate-700">
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Welcome to API Stack
          </h2>
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Add Countries Data!
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="name">Country Name</Label>
              <Input
                name="name"
                id="name"
                placeholder="Enter country name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="capital">Capital</Label>
              <Input
                name="capital"
                id="capital"
                placeholder="Enter capital name"
                type="text"
                required
                value={capital}
                onChange={(e) => setCapital(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="population">Total Population</Label>
              <Input
                name="population"
                id="population"
                placeholder="Enter population"
                type="text"
                required
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="currency">Currency</Label>
              <Input
                name="currency"
                id="currency"
                placeholder="Enter currency name"
                type="text"
                required
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Country Description</Label>
              <Input
                name="description"
                id="description"
                placeholder="Enter country description like famous things"
                type="text"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
                <p>Add Country &rarr;</p>
              )}
              <BottomGradient />
            </button>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          </form>
        </div>
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
