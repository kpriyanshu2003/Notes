import { useEffect, useState } from "react";
import Select from "react-select";

export default function Note(props) {
  const [locked, setLocked] = useState(false);
  const [noteData, setNoteData] = useState({
    title: "",
    description: "",
    type: "none",
    lastmodified: new Date().toISOString(),
  });
  const options = [
    { value: "none", label: "None", color: "#F5F5DC" },
    { value: "home", label: "Home", color: "#CCE8CF" },
    { value: "work", label: "Work", color: "#89CFF0" },
    { value: "personal", label: "Personal", color: "#E6E6FA" },
  ];

  const handleAdd = () => {
    handleDelete();
    const dt = new Date();
    const data = JSON.parse(localStorage.getItem("notes")) || [];
    data.push({
      id: dt.getTime(),
      title: noteData.title,
      description: noteData.description,
      type: noteData.type,
      lastmodified: dt.toISOString(),
    });
    localStorage.setItem("notes", JSON.stringify(data));
    handleCancel();
  };

  const handleCancel = () => {
    setDefault();
    props.showNote("");
  };

  const handleDelete = () => {
    let data = JSON.parse(localStorage.getItem("notes")) || [];
    data = data.filter((datas) => props.current !== datas.id);
    localStorage.setItem("notes", JSON.stringify(data));
    handleCancel();
  };

  const setDefault = () => {
    setNoteData({
      title: "",
      description: "",
      type: "none",
      lastmodified: new Date().toISOString(),
    });
  };

  const arrangeData = (x) => {
    const dateObj = new Date(x);
    const date = dateObj.toLocaleDateString();
    const time = dateObj.toLocaleTimeString();
    return { date, time };
  };

  useEffect(() => {
    if (props.current === "") {
      setLocked(false);
    } else {
      setLocked(true);
      let data = JSON.parse(localStorage.getItem("notes")) || [];
      const currentNote = data.find((note) => note.id === props.current);
      if (currentNote) {
        setNoteData({
          title: currentNote.title,
          description: currentNote.description,
          type: currentNote.type,
          lastmodified: currentNote.lastmodified,
        });
      }
    }
  }, [props]);

  return (
    <div className="h-full w-full grid place-items-center font-alegreya">
      <div className="bg-white shadow-lg border w-4/6 h-5/6 rounded-md p-2 px-4 relative">
        <div className="flex items-center justify-between">
          <div className="text-5xl mt-2 ml-2 mb-4 font-bold font-alegreya-sc">
            {props.current === "" ? "Add" : "Edit"} Note
          </div>
          <div>
            <span className="mr-2">Last Modified :</span>
            <span className="mr-2">
              {arrangeData(noteData.lastmodified).date}
            </span>
            <span>{arrangeData(noteData.lastmodified).time}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <input
            type="text"
            name=""
            id=""
            value={noteData.title}
            placeholder="Enter Title"
            className="text-3xl rounded p-2 outline-none w-full"
            onChange={(e) =>
              setNoteData({ ...noteData, title: e.target.value })
            }
            readOnly={locked}
          />
          <div className="w-72 outline-none border-none ml-3">
            <Select
              options={options}
              defaultValue={options.find(
                (option) => option.value === noteData.type
              )}
              onChange={(e) => setNoteData({ ...noteData, type: e.value })}
              isDisabled={locked}
            />
          </div>
        </div>
        <hr />
        <div className="h-4/6">
          <textarea
            name=""
            id=""
            className="resize-none rounded p-2 w-full text-lg outline-none h-full"
            placeholder="Enter Description"
            value={noteData.description}
            onChange={(e) =>
              setNoteData({ ...noteData, description: e.target.value })
            }
            readOnly={locked}
          ></textarea>
        </div>
        <div
          className="absolute bottom-[20px] left-[20px] flex items-center cursor-pointer"
          onClick={() => setLocked(!locked)}
        >
          {locked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          )}
          <div className="ml-2">
            {locked ? "Locked" : "Unlocked"} For Editing
          </div>
        </div>
        <div className="absolute bottom-[10px] right-[10px] flex">
          {props.current !== "" && (
            <div
              className="rounded p-2 px-4 ml-2 bg-[#f00] text-white cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </div>
          )}
          <div
            className="rounded p-2 px-4 bg-[#f00] text-white cursor-pointer ml-2"
            onClick={handleCancel}
          >
            Cancel
          </div>
          <div
            className="rounded p-2 px-4 ml-2 bg-[#0f0] text-white cursor-pointer"
            onClick={handleAdd}
          >
            {props.current === "" ? "Add" : "Save"}
          </div>
        </div>
      </div>
    </div>
  );
}
