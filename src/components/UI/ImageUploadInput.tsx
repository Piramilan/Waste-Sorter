import { ChangeEventHandler } from "react";

interface ImageUploadProps {
  handleImageUpload: ChangeEventHandler<HTMLInputElement>;
}

const ImageUploadInput = ({ handleImageUpload }: ImageUploadProps) => {
  return (
    <input
      type="file"
      // multiple
      accept="image/*"
      required
      onChange={handleImageUpload}
      className="file:bg-gradient-to-b
                 file:from-blue-500 file:to-blue-600
                 file:px-6 file:py-3
                 file:m-5 file:border-none 
                 file:rounded-full file:text-white 
                 file:cursor-pointer file:shadow-lg 
             file:shadow-blue-600
font-bold
                 file:active:scale-90 file:transition file:duration-150
                 
                 px-2
                 bg-gradient-to-br from-gray-600 to-gray-700
                 text-white/80 rounded-full cursor-pointer shadow-xl shadow-gray-700/60"
    />
  );
};

export default ImageUploadInput;
