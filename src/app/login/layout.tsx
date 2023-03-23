import { ReactNode } from "react";

type LoginLayoutProps = {
  children: ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <html lang="pt-br">
      <body>
        {/*  <header>Header do login</header> */}
        {children}
      </body>
    </html>
  );
}
