import Image from "next/image";
import Link from "next/link";

import SigninForm from "../../components/Auth/SigninForm";

const Signin = () => {
  return (
    <main className="px-4 lg:px-0 h-screen w-full bg-black flex flex-col justify-center items-center">
      <div className="w-full lg:w-1/2 bg-deepGrey-100 py-10  px-4 lg:px-20">
        <div className="flex justify-center">
          <Image
            src="/content-coin.png"
            width={226}
            height={75}
            alt="Content Wars Logo"
            className=" text-center"
          />
        </div>
        <p className="text-center text-white text-xl mt-8">
          Login to your account
        </p>
        <SigninForm />
      </div>
      <p className="text-white mt-10">
        You dont have an account?{" "}
        <Link href="/signup">
          <a className="text-appYellow-100">Create account now.</a>
        </Link>
      </p>
    </main>
  );
};

export default Signin;
