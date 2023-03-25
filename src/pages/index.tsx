import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import TextButton from "@/components/UI/TextButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [images, setImages] = useState<(string | ArrayBuffer | null)[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray: File[] = Array.from(files);
      const readerArray: FileReader[] = [];
      const imageArray: (string | ArrayBuffer | null)[] = [...images];

      fileArray.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          imageArray.push(reader.result);
          setImages((prevImages) => [reader.result, ...prevImages]);
        };
        reader.readAsDataURL(file);
        readerArray.push(reader);
      });
    }
  };
  return (
    <>
      <Head>
        <title>Waste Sorter</title>
        <meta
          name="description"
          content="Waste Sorter - Waste Classification App"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="max-w-[80vw] mx-auto">
          <h1 className="text-white font-semibold text-[1.75rem] leading-tight lg:text-5xl text-center">
            Classify Your Waste as Organic or Recyclable with Machine Learning
          </h1>
          {/* <label htmlFor="image" className="block mb-2 font-bold text-gray-700">
            Upload Images:
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mb-4"
          /> */}
          {/* <div className="m-4">
            <label className="inline-block mb-2 text-[#fff]">
              Upload Image(jpg,png,svg,jpeg)
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-32 border-4 border-[#fff] border-dashed hover:bg-[#cbd5e1] hover:border-[#cbd5e1]">
                <div className="flex flex-col items-center justify-center pt-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-[#fff] group-hover:text-[#0f172a]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="pt-1 text-sm tracking-wider text-[#fff] group-hover:text-[#0f172a]">
                    Upload Image
                  </p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  required
                  onChange={handleImageChange}
                  className="opacity-0 file:bg-gradient-to-b
                   file:from-blue-500 file:to-blue-600
                   file:px-6 file:py-3
                   file:m-5 file:border-none 
                   file:rounded-full file:text-white 
                   file:cursor-pointer file:shadow-lg 
                   file:shadow-blue-600
                   
                   bg-gradient-to-br from-gray-600 to-gray-700
                   text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60"
                />
              </label>
            </div>
          </div> */}
          <div className="flex justify-center items-center my-8">
            <input
              type="file"
              multiple
              accept="image/*"
              required
              onChange={handleImageChange}
              className="file:bg-gradient-to-b
                   file:from-blue-500 file:to-blue-600
                   file:px-6 file:py-3
                   file:m-5 file:border-none 
                   file:rounded-full file:text-white 
                   file:cursor-pointer file:shadow-lg 
                   file:shadow-blue-600
font-bold
                   file:active:scale-90 file:transition file:duration-150
                   
                   px-2
                   bg-gradient-to-br from-gray-600 to-gray-700
                   text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex items-center  justify-center bg-gray-100 border border-gray-300"
              >
                {image && (
                  // <img
                  //   src={image.toString()}
                  //   className="max-h-full max-w-full"
                  // />
                  <Image
                    src={image.toString()}
                    alt="Uploaded Image"
                    width={400}
                    height={400}
                  />
                )}
              </div>
            ))}
          </div>
          {images.length > 0 && (
            <div className="flex justify-center items-center mt-4">
              <TextButton link="/results">Predicte It</TextButton>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
