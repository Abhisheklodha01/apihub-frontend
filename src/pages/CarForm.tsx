import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from '@/lib/utils';

export const CarForm = () => {
  const [formData, setFormData] = useState({
      title: "",
      author: "",
      content: ""
    });
  
    const handleChange = (event: { target: { name: string; value: string } }) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };
  
  return (
    <div className="min-h-screen dark">
      <div className="pb-40"></div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border border-slate-700">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Welcome to API Stack
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Add Articles Data!
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Article Title</Label>
            <Input
              name="title"
              id="title"
              placeholder="enter article title"
              type="text"
              value={formData.title}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Article Author</Label>
            <Input
              name="author"
              id="author"
              placeholder="enter article author"
              type="text"
              value={formData.author}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Article Content</Label>
            <Input
              name="content"
              id="content"
              placeholder="enter article content"
              type="text"
              value={formData.content}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Add Article &rarr;
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
