import { Button } from "@/components/ui/button";
import BlogFooter from "@/components/ui/home/blog-footer";
import Navbar from "@/components/ui/home/header/navbar";
import HeroSection from "@/components/ui/home/hero-section";
import TopArticles from "@/components/ui/home/top-articles";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section className="relative py-16 md:py:24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold tracking-tight tetx-gray-900 dark:text-white sn:text-xl">
              Featured Articles
            </h2>
            <p>Discover our more popular and trending content</p>
          </div>

          <TopArticles />
          <div className="text-center mt-12">
            <Link href={"/articles"}>
              <Button className="rounded-full hover:bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">
                View all articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </div>
  );
}
