"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import PrivateRoute from "@/components/PrivateRoute";

import { checkIsPublicRoute } from "../function/check-is-public-route/index";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();

  const isPublicRoute = checkIsPublicRoute(pathname);

  return (
    <html lang="pt-br">
      <body>
        {isPublicRoute && children}
        {!isPublicRoute && <PrivateRoute children={children} />}
      </body>
    </html>
  );
}
