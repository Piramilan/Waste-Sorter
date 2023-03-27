import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <title>
        Teachable Machine Image Classification for Waste Sorter App | Next.js
        TailwindCSS with TypeScript
      </title>
      <meta
        name="description"
        content="Waste Sorter - Waste Classification App"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Teachable Machine image classification app for sorting organic and recyclable waste, built with Next.js, TailwindCSS, and TypeScript."
      />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
