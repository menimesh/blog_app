import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const stats = [
  { number: "1k+", label: "Published Articles" },
  { number: "500+", label: "Active Bloggers" },
  { number: "10k+", label: "Monthly Readers" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[650px] w-full overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-950 to-indigo-900 text-white flex items-center justify-center px-6 md:px-12">
      {/* Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none before:absolute before:left-1/3 before:top-10 before:h-[600px] before:w-[600px] before:rounded-full before:bg-gradient-to-r before:from-violet-500/30 before:to-indigo-900/0 before:blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-8 md:text-left md:flex md:items-center md:gap-16">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Share Your Stories with the{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              World
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            Start your blogging journey today. Write, publish, and inspire
            millions around the globe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
            <Button className="rounded-full px-8 py-3 shadow-lg transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-violet-400">
              Start Reading
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 text-black border-white hover:bg-white hover:text-indigo-900 transition"
            >
              Explore Topics
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-8 text-left">
            {stats.map(({ number, label }) => (
              <div key={label} className="space-y-1">
                <div className="text-3xl font-extrabold text-white">
                  {number}
                </div>
                <div className="text-sm text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "relative w-72 h-72 rounded-3xl overflow-hidden",
            "bg-gradient-to-br from-white/10 to-transparent",
            "border border-primary/30 backdrop-blur-lg",
            "shadow-2xl shadow-indigo-700/40",
            "transition-transform duration-500 hover:scale-105"
          )}
        >
          <Image
            src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Inspiring storytelling"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
