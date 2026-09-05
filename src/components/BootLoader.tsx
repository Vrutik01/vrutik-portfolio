import { useEffect } from "react";
import { useLoading } from "../context/LoadingProvider";
import { setProgress } from "./Loading";

// Drives the loading-bar UI on boot. No external assets to wait on
// anymore, so this simply simulates a short, snappy progress fill.
const BootLoader = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    const timer = setTimeout(() => {
      progress.loaded();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return null;
};

export default BootLoader;
