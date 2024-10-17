import { Moon, MoonStar } from "lucide-react";

const Navbar = () => {
  return (
    <div className="max-w-screen-md w-4/5 mx-auto flex justify-between py-4">
      <div className="flex gap-8 items-center">
        <div>Home</div>
        <div>Projects</div>
        <div>About me</div>
      </div>
      <div className="bg-slate-300 rounded-md p-2">
        <MoonStar className="" />
      </div>
    </div>
  );
};
export default Navbar;
