import Image from "next/image";

const Images = () => {
  return (
    <div className="relative flex justify-center pt-32 px-6 md:px-12">
      <div>
        <Image src="/mac.png" width={960} height={540} alt="mac display" />
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
        <Image src="/iphone.png" width={260} height={520} alt="mac display" />
      </div>
      <div className="absolute hidden lg:block top-56  lg:right-0 xl:right-36">
        <Image src="/iphone.png" width={318} height={606} alt="mac display" />
      </div>
    </div>
  );
};

export default Images;
