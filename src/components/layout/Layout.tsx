import { Outlet } from "react-router-dom";
import Header from "../../ui/header/Header";

export default function Layout() {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="flex justify-center">
        <div className="p-4 container  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
