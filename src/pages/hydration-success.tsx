import { NextPage } from "next";
import { useStorageText } from "../features/storage/storageText";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  const storageText = useStorageText();

  return (
    <div>
      <h1>Hydration Success</h1>
      <p>{storageText}</p>
    </div>
  );
};

export default Page;
