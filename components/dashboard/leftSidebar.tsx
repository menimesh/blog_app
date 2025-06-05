import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Ghost, LayoutDashboard, Link } from "lucide-react";

export function LeftSidebar() {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Button>
            <LayoutDashboard className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <DashboardSidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
}
export default LeftSidebar;
const DashboardSidebar = () => {
  return (
    <div className="h-full px-4 py-6">
      <div className="flex items-center gap-2 mb-8 px-2">
        <Link href={"/"}>
          <span className="text-xl font-bold ">AbcCode</span>
        </Link>
      </div>
      <nav>
        <Link href={"/dashboard"}>
          <Button variant={"ghost"} className="w-full justify-start">
            Overview
          </Button>
        </Link>
      </nav>
    </div>
  );
};
