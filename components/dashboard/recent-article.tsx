import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Edit, Trash2 } from "lucide-react";

const RecentArticles = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Recent Articles</CardTitle>
          <Button className="text-muted-foreground" variant="ghost" size="sm">
            View all
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Comments</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Getting Started with Next.js
              </TableCell>
              <TableCell>
                <Badge className="rounded-full bg-green-100 text-green-800 hover:bg-green-100">
                  Published
                </Badge>
              </TableCell>
              <TableCell>12</TableCell>
              <TableCell className="text-muted-foreground">
                Dec 15, 2024
              </TableCell>
              <TableCell>
                <div className="flex justify-end gap-1">
                  <Link href={`/dashboard/articles/${123}/edit`}>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Building Modern UIs</TableCell>
              <TableCell>
                <Badge className="rounded-full bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                  Draft
                </Badge>
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell className="text-muted-foreground">
                Dec 14, 2024
              </TableCell>
              <TableCell>
                <div className="flex justify-end gap-1">
                  <Link href={`/dashboard/articles/${124}/edit`}>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                Advanced React Patterns
              </TableCell>
              <TableCell>
                <Badge className="rounded-full bg-green-100 text-green-800 hover:bg-green-100">
                  Published
                </Badge>
              </TableCell>
              <TableCell>8</TableCell>
              <TableCell className="text-muted-foreground">
                Dec 12, 2024
              </TableCell>
              <TableCell>
                <div className="flex justify-end gap-1">
                  <Link href={`/dashboard/articles/${125}/edit`}>
                    <Button variant="ghost" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <DeleteButton />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

const DeleteButton = () => {
  return (
    <form>
      <Button variant="ghost" size="sm">
        <Trash2 className="h-4 w-4 text-red-500" />
      </Button>
    </form>
  );
};

export default RecentArticles;
