import MyInfo from "@/components/myInfo";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import HoverScrollName from "@/components/test";
import HoverName from "@/components/test";

export default function Home() {
  return (
    <div className="max-w-screen-md w-4/5 mx-auto">
      <MyInfo />
      <Skills />
      <Projects />
      <HoverScrollName />
    </div>
  );
}
