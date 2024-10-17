import MyInfo from "@/components/myInfo";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="max-w-screen-md w-4/5 mx-auto">
      <MyInfo />
      <Skills />
      <Projects />
    </div>
  );
}
