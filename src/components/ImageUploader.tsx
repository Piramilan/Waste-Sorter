import { useEffect, useState } from "react";
import ImageUploadInput from "./UI/ImageUploadInput";
import ImageList from "./UI/ImageList";
import * as tmImage from "@teachablemachine/image";
import { config } from "@/config/config";
import { ClassPrediction, UploadedImage } from "@/types/types";

export default function ImageUploader() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const predictImage = async (image: UploadedImage) => {
    const model = await tmImage.load(config.modelURL, config.metadataURL);
    setModel(model);

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
    setImageUploaded(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUploaded(true);
    const files = event.target.files;
    if (files && files.length > 0) {
      const fileArray: File[] = Array.from(files);
      const readerArray: FileReader[] = [];

      fileArray.forEach((file, index) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const imageArray = {
            name: file.name,
            url: reader.result as string,
            predictions: [],
          };
          predictImage(imageArray);
        };
        reader.readAsDataURL(file);
        readerArray.push(reader);
      });
    }
  };

  return (
    <div className="max-w-[80vw] mx-auto">
      <h1 className="text-white font-semibold text-[1.75rem] leading-tight lg:text-5xl text-center">
        Classify Your Waste as Organic or Recyclable with Machine Learning
      </h1>
      <div>
        <div className="flex justify-center items-center my-8">
          <ImageUploadInput handleImageUpload={handleImageChange} />
        </div>
        <div
          className={`flex justify-center items-center ${
            imageUploaded && "my-14"
          }`}
        >
          {imageUploaded && <div className="borders" />}
        </div>
        <ImageList images={images} />
      </div>
    </div>
  );
}
