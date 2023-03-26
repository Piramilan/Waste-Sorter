import { NextPageContext } from "next";

type Image = {
  name: string;
  url: string;
};

type ResultsProps = {
  images: Image[];
};

function Results({ images }: ResultsProps) {
  return <div></div>;
}

Results.getInitialProps = async (ctx: NextPageContext) => {
  const { images } = ctx.query;

  return {
    images: images ? JSON.parse(images as string) : [],
  };
};

export default Results;
