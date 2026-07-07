import type { ReactNode } from "react";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Header />

        <main className="flex-1 p-6">
          {children}
        </main>

      </div>

    </div>
  );
}