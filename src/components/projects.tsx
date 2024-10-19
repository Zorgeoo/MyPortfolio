import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const expenseTrackerTech = ["Express", "Node", "Tailwind CSS", "Next.js"];

const Projects = () => {
  return (
    <div className="py-12">
      <div>
        <div className="font-bold text-4xl">Projects</div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-1 border">
            <div className="w-1/2 flex flex-col justify-between">
              <div className="font-bold text-xl">Expense Tracker</div>
              <div>Description</div>
              <div className="flex gap-4">
                {expenseTrackerTech.map((el, i) => {
                  return <div key={i}>{el}</div>;
                })}
              </div>
              <div className="flex">
                <Link
                  href={"https://github.com/Zorgeoo/expense"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </Link>
                <Link
                  href={"https://expense-smoky.vercel.app/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink />
                </Link>
              </div>
            </div>
            <div className="relative w-1/2 h-64">
              <Image
                src={"/Expense.png"}
                alt="No image"
                fill
                className="absolute -z-10"
              />
            </div>
          </div>
          <div className="flex flex-1 border"></div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
