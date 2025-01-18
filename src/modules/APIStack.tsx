"use client";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Hands-On Learning",
    description:
      "API Stack offers hands-on learning experiences where you can build and test APIs in real-world scenarios, gaining practical knowledge.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Hands-On Learning
      </div>
    ),
  },
  {
    title: "Community Collaboration",
    description:
      "API Stack fosters community collaboration, allowing you to join a thriving network of developers and contributors, sharing insights and working together on projects.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        Community Collaboration
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Industry-Relevant Tools",
    description:
      "With API Stack, you’ll master industry-relevant tools and APIs that are highly sought after in today’s tech landscape, enhancing your career growth.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Industry-Relevant Tools
      </div>
    ),
  },
];
export default function APIStack() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
