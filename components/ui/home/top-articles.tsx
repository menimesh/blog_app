import { cn } from "@/lib/utils";
import React from "react";
import { Card } from "../card";
import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1234,
    title: "The Power of Consistency in Writing",
    description:
      "Discover how writing every day can help you build an audience and refine your voice.",
    image:
      "https://images.unsplash.com/photo-1499417267106-45cebb7187c9?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Jane Doe",
    date: "June 1, 2025",
  },
  // Add more articles as needed
];

const TopArticles = () => {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-4 py-10">
      {articles.map((article) => (
        <Card
          key={article.id}
          className={cn(
            "group relative overflow-hidden transition-transform hover:scale-[1.02]",
            "border border-gray-200/50 dark:border-white/10",
            "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg rounded-2xl"
          )}
        >
          <Link href={`/articles/${article.id}`} className="block">
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 transition">
                {article.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {article.description}
              </p>
              <div className="mt-4 flex justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>By {article.author}</span>
                <span>{article.date}</span>
              </div>
            </div>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default TopArticles;
