import { useEffect } from "react";

function useSound(url) {
  useEffect(() => {
    const audio = new Audio(url);
    audio.play();
    return () => {
      audio.pause();
    };
  }, [url]);
}

export default useSound;
