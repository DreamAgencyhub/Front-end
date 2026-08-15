"use client";

// import { useGetUser } from "@/app/hooks/useGetUser";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  return (
    <div>
      <MobileSidebar />
      <div className="hidden lg:block">
        <Sidebar />
      </div>
    </div>
  );
}
