import { NextPage } from "next";
import { useState } from "react";
import { STORAGE_TEXT_KEY } from "../features/storage/storageText";

type PageProps = {};

const Page: NextPage<PageProps> = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Debug</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          localStorage.setItem(STORAGE_TEXT_KEY, text);
        }}
      >
        <label>
          <p>Storage Text</p>
          <input
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </label>

        <div>
          <button type="submit">Save</button>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem(STORAGE_TEXT_KEY);
              location.reload();
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
