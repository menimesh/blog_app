import BlogDashboard from "@/components/dashboard/blog-dashboard";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, MessageCircle, PlusCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RecentArticles from "@/components/dashboard/recent-article";

const page = () => {
  return (
    <main className="p-4 md:p-8 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">Blog Dashboard</h1>
          <p className="text-sm text-muted-foreground">Manage your content</p>
        </div>
        <Link href={"/dashboard/articles/create"}>
          <Button>
            <PlusCircle className="h-5 w-5 mr-2" />
            New Article
          </Button>
        </Link>
      </div>

      {/* Stats or Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Total Articles
            </CardTitle>
            <FileText className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p>+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Total Comments
            </CardTitle>
            <MessageCircle className="w-4 h-4" />
            {/* You can show number count here if available */}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p>12 awaiting moderation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium text-sm">
              Avg rating time
            </CardTitle>
            <MessageCircle className="w-4 h-4" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p>+5 from last month</p>
          </CardContent>
        </Card>
      </div>
      <RecentArticles />
    </main>
  );
};

export default page;
