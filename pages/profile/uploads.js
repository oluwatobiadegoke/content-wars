import Image from "next/image";
import Layout from "../../components/General/Layout";

const Uploads = () => {
  return (
    <Layout>
      <main className="py-14">
        <p className="text-appYellow-100 text-lg mb-8 text-center font-medium">
          Uploads (9)
        </p>
        <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Image
              src="/upload1.png"
              height={200}
              width={283}
              alt="image"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/upload2.png"
              height={200}
              width={283}
              alt="image"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/upload3.png"
              height={200}
              width={283}
              alt="image"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/upload4.png"
              height={200}
              width={283}
              alt="image"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/upload5.png"
              height={200}
              width={283}
              alt="image"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/upload6.png"
              height={200}
              width={283}
              alt="image"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/upload7.png"
              height={200}
              width={283}
              alt="image"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/upload8.png"
              height={200}
              width={283}
              alt="image"
              layout="responsive"
            />
          </div>
          <div>
            <Image
              src="/upload9.png"
              height={200}
              width={283}
              alt="image"
              layout="responsive"
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Uploads;
