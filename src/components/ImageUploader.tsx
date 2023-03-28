import { useState } from "react";
import ImageUploadInput from "./UI/ImageUploadInput";
import ImageList from "./UI/ImageList";
import { ClassPrediction, UploadedImage } from "@/types/types";
import { useModel } from "@/lib/ModelContext";

export default function ImageUploader() {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [imageUploaded, setImageUploaded] = useState(false);
  const { model } = useModel();

  const predictImage = async (image: UploadedImage) => {
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
    const files = event.target.files;
    if (files && files.length > 0) {
      setImageUploaded(true);
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
    <div className="max-w-[90vw] lg:max-w-[80vw] mx-auto">
      <h1 className="text-white font-semibold text-[1.8rem] leading-tight lg:text-5xl text-center">
        Classify Your Waste as Organic or Recyclable with Machine Learning
      </h1>
      <div>
        <div className="flex flex-col justify-center items-center mb-14 my-10">
          <ImageUploadInput handleImageUpload={handleImageChange} />
          <p className="text-xs text-gray-500 mt-4 text-center">
            We do not save your images. Your privacy is important to us.
          </p>
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
