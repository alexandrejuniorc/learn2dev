import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

import { checkUserAuthenticated } from "@/function/check-user-authenticated";

import { APP_ROUTES } from "@/constants/app-routes";

type PrivateRouteProps = {
  children: ReactNode;
};
export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { push } = useRouter();
  const isUserAuthenticated = checkUserAuthenticated();

  useEffect(() => {
    if (!isUserAuthenticated) {
      push(APP_ROUTES.public.login);
    }
  }, [isUserAuthenticated, push]);

  return <>{isUserAuthenticated ? children : null}</>;
}
