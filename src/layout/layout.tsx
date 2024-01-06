import { FC, ReactElement } from "react";

import { Header } from "./components/header";
import NavigationBar from "./components/navbar";

interface LayoutProps {
  children: ReactElement
}

export const Layout: FC<LayoutProps> = ({ children }) => {

  return (
    <div className="relative min-h-screen bg-slate-200">
      <Header />
      {children}
      <NavigationBar />
    </div>
  )
}