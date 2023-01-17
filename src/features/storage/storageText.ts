import { useSyncExternalStore } from "react";

export const STORAGE_TEXT_KEY = "STORAGE_TEXT";

export const useStorageText = () => {
  const storageText = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(STORAGE_TEXT_KEY),
    () => ""
  );

  return storageText;
};

const subscribe = (callback: () => void) => {
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("storage", callback);
  };
};
