import React from "react";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

const RecentArticles = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Articles</CardTitle>
          <Button className="text-muted-foreground" variant={"ghost"} size="sm">
            View all{" "}
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default RecentArticles;
