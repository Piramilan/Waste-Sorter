import { useRouter } from "next/router";
import * as React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Loading from "@/components/UI/Loading";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(true);
    }, 2500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {!loading && router.pathname === "/" ? (
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
