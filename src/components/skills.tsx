const Skills = () => {
  return (
    <div className="py-12">
      <div className="font-bold text-4xl">Skills</div>
      <div className="flex w-full gap-10">
        <div className="relative p-1 bg-gradient-to-r rounded-lg flex-1">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-fuchsia-200 to-violet-600"></div>
          <div className="relative z-10 bg-white p-6 rounded-lg">
            Your content here
          </div>
        </div>
        <div className="relative p-1 bg-gradient-to-r rounded-lg flex-1">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-300 to-violet-500"></div>
          <div className="relative z-10 bg-white p-6 rounded-lg">
            Your content here
          </div>
        </div>
        <div className="relative p-1 bg-gradient-to-r rounded-lg flex-1">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-300 to-orange-500"></div>
          <div className="relative z-10 bg-white p-6 rounded-lg">
            Your content here
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
