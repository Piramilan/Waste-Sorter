import type { AppProps } from "next/app";
import ModelProvider from "@/lib/ModelContext";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import "@/styles/animation.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModelProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ModelProvider>
  );
}
