import { useEffect, useState } from "react";

export const useKey = (keyToPress, action) => {
  useEffect(() => {
    const callback = (e) => {
      if (e.code.toLowerCase() === keyToPress.toLowerCase()) {
        action();
      }
    };

    document.addEventListener("keydown", callback);

    return () => {
      document.removeEventListener("keydown", callback);
    };
  }, [action, keyToPress]);
};
