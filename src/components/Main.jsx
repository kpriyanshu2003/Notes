import { useEffect, useState } from "react";
import Category from "./Category";
import List from "./List";
import Note from "./Note";
import Search from "./Search";

export default function Main() {
  const [shoNote, setShoNote] = useState(false);
  const [current, setCurrent] = useState("");
  const [category, setCategory] = useState("none");

  useEffect(() => {
    if (localStorage.getItem("notes") == null)
      localStorage.setItem("notes", JSON.stringify([]));
    if (
      localStorage.getItem("activeCategory") == null ||
      localStorage.getItem("activeCategory").length > 0
    )
      localStorage.setItem("activeCategory", "none");
  }, []);

  const showNote = (n) => {
    setCurrent(n);
    setShoNote(!shoNote);
  };
  const activeCategory = (x) => {
    setCategory(x);
    localStorage.setItem("activeCategory", x);
  };
  return (
    <div
      className={`h-screen w-screen scrollbar-hide ${
        shoNote ? "overflow-hidden" : "overflow-auto"
      } relative`}
    >
      <div className="flex justify-center pt-5">
        <div className="w-1/2">
          <Search />
          <Category showNote={showNote} activeCategory={activeCategory} />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <List showNote={showNote} category={category} />
      </div>
      <div
        className={` ${
          shoNote ? "block" : "hidden"
        } absolute h-screen w-screen bg-[#000000bd] z-10 top-0 left-0`}
      >
        {shoNote && <Note showNote={showNote} current={current} />}
      </div>
    </div>
  );
}
