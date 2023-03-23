import { ReactNode } from "react";

type ForgetPasswordProps = {
  children: ReactNode;
};

export default function ForgetPasswordLayout({
  children,
}: ForgetPasswordProps) {
  return (
    <html lang="pt-br">
      <body>
        {/* <header>Header do forget</header> */}
        {children}
      </body>
    </html>
  );
}
