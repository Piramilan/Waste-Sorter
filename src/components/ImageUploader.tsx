import { useEffect, useState } from "react";
import TextButton from "./UI/TextButton";
import ImageUploadInput from "./UI/ImageUploadInput";
import ImageList from "./UI/ImageList";
import * as tmImage from "@teachablemachine/image";

type UploadedImage = {
  name: string;
  url: string;
  predictions: ClassPrediction[];
};

type ClassPrediction = {
  className: string;
  probability: number | string;
};

export default function ImageUploader() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const predictImage = async (image: UploadedImage, index: number) => {
    if (!model) return;
    const img = document.createElement("img");
    img.src = image?.url;
    await img.decode();

    const predictions = await model.predict(img);
    const maxFloatValue = Math.max(
      ...predictions.map((obj) => obj.probability)
    );

    const predictionData: ClassPrediction[] = predictions.map((p) => ({
      className: p.className,
      probability: p.probability === maxFloatValue ? p.probability : 0,
    }));
    const updatedImage = { ...image, predictions: predictionData };
    setImages((prevImages) => [updatedImage, ...prevImages]);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray: File[] = Array.from(files);
      const readerArray: FileReader[] = [];
      const imageArray: UploadedImage[] = [];

      // fileArray.forEach((file, index) => {
      //   const reader = new FileReader();
      //   reader.onloadend = () => {
      //     imageArray.push({
      //       name: file.name,
      //       url: reader.result as string,
      //       predictions: [],
      //     });
      //     setImages((prevImages) => [...imageArray, ...prevImages]);
      //   };
      //   reader.readAsDataURL(file);
      //   readerArray.push(reader);
      // });
      fileArray.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageArray = {
            name: file.name,
            url: reader.result as string,
            predictions: [],
          };
          predictImage(imageArray, images.length + index);
          // setImages((prevImages) => [...prevImages, imageArray]);
        };
        reader.readAsDataURL(file);
        readerArray.push(reader);
      });
    }
    setImageUploaded(true);
  };
  useEffect(() => {
    const loadModel = async () => {
      const modelURL =
        "https://teachablemachine.withgoogle.com/models/oaWWByFbS/model.json";
      const metadataURL =
        "https://teachablemachine.withgoogle.com/models/oaWWByFbS/metadata.json";
      const model = await tmImage.load(modelURL, metadataURL);
      setModel(model);
    };
    loadModel();
  }, []);

  // useEffect(() => {
  //   const predictImage = async (image: UploadedImage) => {
  //     if (!model) return;
  //     const img = document.createElement("img");
  //     img.src = image?.url;
  //     await img.decode();

  //     const predictions = await model.predict(img);
  //     const predictionData: ClassPrediction[] = predictions.map((p) => ({
  //       className: p.className,
  //       probability: p.probability.toFixed(2),
  //     }));
  //     const updatedImages = images.map((img) =>
  //       img.name === image.name ? { ...img, predictions: predictionData } : img
  //     );
  //     setImages(updatedImages);
  //   };

  //   if (imageUploaded) {
  //     // images.forEach((image) => predictImage(image));
  //     setImageUploaded(false);
  //   }
  // }, [imageUploaded]);

  return (
    <div className="max-w-[80vw] mx-auto">
      <h1 className="text-white font-semibold text-[1.75rem] leading-tight lg:text-5xl text-center">
        Classify Your Waste as Organic or Recyclable with Machine Learning
      </h1>
      <div>
        <div className="flex justify-center items-center my-8">
          <ImageUploadInput handleImageUpload={handleImageChange} />
        </div>
        <ImageList images={images} />
      </div>
    </div>
  );
}
