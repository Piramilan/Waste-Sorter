import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <title>Waste Sorter</title>
      <meta
        name="description"
        content="Waste Sorter - Waste Classification App"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}
