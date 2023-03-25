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
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {!loading && router.pathname === "/" ? (
        <Loading />
      ) : (
        <div
          className={`bg-[#0f172a] min-h-screen ${
            router.pathname === "/" && "fade-in"
          }`}
        >
          <Header />
          <main className="my-8 min-h-[82vh]">{children}</main>
          <Footer />
        </div>
      )}
    </>
  );
}
