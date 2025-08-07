// import { ArrowBack } from "@mui/icons-material";
// import { Toaster } from "sonner";
import React from "react";
import Image from "next/image";

export const metadata = {
  title: "My Events",
  description: "My Events App",
  verification: {
    google: "Kgwc7apwSgQ78KHX9S3HLqqZCET7TAQk-OGZJGVJ1mg",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* <div className="absolute top-6 left-8 hover:cursor-pointer hover:scale-[1.03] transition-transform duration-300">
        <Link href="/" className="ml-2 gap-4 font-bold flex items-center ">
          <ArrowBack className="transition-transform duration-300" />
          <span> Back To Home </span>
        </Link>
      </div> */}
      <div className=" w-screen h-screen flex items-center justify-center p-6">
        <div className="container flex relative max-w-[850px] w-full bg-white dark:bg-black p-0 border-2  ">
          <div className="right-0 z-10 lg:w-1/2 hidden lg:flex dark:hidden items-center justify-center border-r ">
            <Image
              src="/logo.png"
              alt="image"
              width={500}
              height={500}
              className=" object-cover z-10"
            />
          </div>
          <div className="lg:flex !hidden dark:!flex right-0 z-10 lg:w-1/2    items-center justify-center border-r ">
            <Image
              src="/logoWhite.png"
              alt="image"
              width={500}
              height={500}
              className=" object-cover z-10"
            />
          </div>

          <div className="lg:w-1/2 w-full border-l dark:!text-white !text-black">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
