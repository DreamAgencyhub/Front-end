import Nav from "./Nav";
import UserInfoCard from "./UserInfoCard";

export default function MobileSidebar() {
  return (
    <div className="fixed right-0 bottom-0 top-0  bg-default-color z-100 flex flex-col items-center py-10 px-4 shadow-xl rounded-l-4xl ">
      <UserInfoCard />
      <Nav />
    </div>
  );
}
