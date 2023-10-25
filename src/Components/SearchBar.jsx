import { useEffect, useRef } from "react";
import { useKey } from "../Hooks/useKey";

const SearchBar = ({ query, setQuery }) => {
  const inputEl = useRef(null);

  useKey("Enter", () => {
    if (document.activeElement === inputEl.current) {
      return;
    }

    document.addEventListener("keydown", callback);
    inputEl.current.focus();
  });

  useEffect(() => {
    const callback = (e) => {
      if (document.activeElement === inputEl.current) {
        return;
      }
      if (e.code === "Enter") {
        inputEl.current.focus();
        setQuery("");
      }
    };

    document.addEventListener("keydown", callback);
    inputEl.current.focus();

    return () => document.removeEventListener("keydown", callback);
  }, [setQuery]);

  useEffect(() => {});

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
};

export default SearchBar;
