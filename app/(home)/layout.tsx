import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import { prisma } from "@/lib/prisma";
const layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();
  if (!user) return null;
  const loggedInUser = await prisma.user.findUnique({
    where: { clearkUserId: user.id },
  });
  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        name: user.fullName as string,
        clearkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl,
      },
    });
  }
  return <div>{children}</div>;
};

export default layout;
