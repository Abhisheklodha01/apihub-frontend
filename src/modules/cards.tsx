import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Cards() {
 const projects = [
    {
      title: "API Fundamentals <🚀>",
      description:
        "Master API basics like GET, POST, PUT, DELETE, and enhance your understanding of RESTful principles.",
      link: "#",
    },
    {
      title: "Diverse Responses 🛢️",
      description:
        "Explore various API response formats, including JSON, Videos, images, and more.",
      link: "#",
    },
    {
      title: "Ready-to-Use Backends 📃",
      description:
        "Access prebuilt backends for user authentication, task management, social media, and e-commerce.",
      link: "#",
    },
    {
      title: "Interactive Documentation 📃",
      description:
        "Test APIs with our interactive and user-friendly documentation.",
      link: "#",
    },
    {
      title: "Open Source Contributions 🐙",
      description:
        "Learn, contribute, and grow with our open-source community.",
      link: "#",
    },
    {
      title: "API Categories 🌐",
      description:
        "Explore APIs across diverse categories, including weather, finance, social media, and more, tailored to your project needs.",
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
