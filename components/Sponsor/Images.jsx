import Image from "next/image";

const Images = () => {
  return (
    <div className="relative flex justify-center pt-32">
      <div>
        <Image src="/mac.png" width={1142} height={520} alt="mac display" />
      </div>
      <div className="absolute md:hidden top-44 right-0">
        <Image
          src="/iphone.png"
          width={146.54}
          height={283.82}
          alt="mac display"
        />
      </div>
      <div className="absolute hidden md:block lg:hidden top-44 right-0">
        <Image src="/iphone.png" width={240} height={480} alt="mac display" />
      </div>
      <div className="absolute hidden lg:block top-44 right-0">
        <Image src="/iphone.png" width={375} height={714} alt="mac display" />
      </div>
    </div>
  );
};

export default Images;
