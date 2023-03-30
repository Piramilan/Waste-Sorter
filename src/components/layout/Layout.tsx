import { useRouter } from "next/router";
import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Loading from "@/components/UI/Loading";
import { useModel } from "@/lib/ModelContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const router = useRouter();
  const { model } = useModel();

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading && router.pathname === "/" ? (
        <Loading />
      ) : (
        <div
          className={`bg-primary scroll-smooth flex flex-col min-h-screen ${
            router.pathname === "/" && "fade-in"
          }`}
        >
          <Header />
          <main className="flex-grow my-8 max-w-[1600px] mx-auto">
            {children}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
