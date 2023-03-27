import ImageUploader from "@/components/ImageUploader";
import Head from "@/components/Head";
import WasteManagement from "@/components/UI/WasteManagement";

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <ImageUploader />
        <WasteManagement />
      </main>
    </>
  );
}
