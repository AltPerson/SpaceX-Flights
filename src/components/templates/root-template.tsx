import Header from "@/components/organisms/header/header";
import { Outlet } from "react-router-dom";

const RootTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootTemplate;
