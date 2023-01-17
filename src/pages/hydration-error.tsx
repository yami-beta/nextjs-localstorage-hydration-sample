import { NextPage } from "next";
import { STORAGE_TEXT_KEY } from "../features/storage/storageText";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  const storageText =
    typeof window === "undefined" ? "" : localStorage.getItem(STORAGE_TEXT_KEY);

  return (
    <div>
      <h1>Hydration Error</h1>
      <p>{storageText}</p>
    </div>
  );
};

export default Page;
