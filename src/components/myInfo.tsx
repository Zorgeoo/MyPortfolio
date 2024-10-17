import Image from "next/image";

const MyInfo = () => {
  return (
    <div className="py-12">
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-4xl font-bold">
              <div>Э.Энхзориг</div>
              <div>Зоригоо</div>
            </div>
            <div>Front-end Developer</div>
          </div>
          <div>Love to build</div>
        </div>
        <div className="relative w-40 h-40 first-letter: border rounded-full overflow-hidden">
          <Image alt="" src={"/me.jpg"} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};
export default MyInfo;
