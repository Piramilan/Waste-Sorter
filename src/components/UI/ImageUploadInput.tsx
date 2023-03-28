import { ChangeEventHandler } from "react";

interface ImageUploadProps {
  handleImageUpload: ChangeEventHandler<HTMLInputElement>;
}

const ImageUploadInput = ({ handleImageUpload }: ImageUploadProps) => {
  return (
    <label className="block bg-white shadow-xl p-4 lg:px-6 rounded-full">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block w-full text-sm text-slate-500
        file:mr-5 file:py-2 file:px-4
        lg:file:mr-6 lg:file:py-3 lg:file:px-5
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:cursor-pointer
        file:bg-primary file:text-white
        hover:file:bg-violet-200
        hover:file:text-primary
        file:active:scale-90 file:transition file:duration-150
        cursor-pointer
    "
      />
    </label>
  );
};

export default ImageUploadInput;
