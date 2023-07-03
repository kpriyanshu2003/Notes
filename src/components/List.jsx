export default function List(props) {
  const data = JSON.parse(localStorage.getItem("notes"));
  const setColor = (n) => {
    switch (n) {
      case "none":
        return "#CCCCCC";
      case "work":
        return "#89CFF0";
      case "personal":
        return "#bdbdff";
      case "home":
        return "#CCE8CF";
      default:
        return "#fff";
    }
  };

  let items;
  let filteredData = [];

  if (data && data !== null && data.length > 0) {
    if (props.category === "none") {
      filteredData = data;
    } else {
      filteredData = data.filter((datas) => datas.type === props.category);
    }

    if (filteredData.length > 0) {
      items = (
        <div className="grid grid-cols-4">
          {filteredData.map((datas) => (
            <div
              className="rounded-md m-4 shadow-md w-[300px] h-[260px] border relative"
              key={datas.id}
            >
              <div
                className="w-full text-xl p-2 cursor-pointer"
                onClick={() => props.showNote(datas.id)}
              >
                <span>
                  {datas.title.length > 21
                    ? datas.title.substring(0, 21) + "..."
                    : datas.title}
                </span>
              </div>
              <hr />
              <div className="w-full p-3 text-sm cursor-default">
                {datas.description.length > 350
                  ? datas.description.substring(0, 350) + "..."
                  : datas.description}
              </div>
              <div className="w-full px-4 py-2 absolute bottom-0 flex justify-between items-center cursor-default">
                <span>
                  {new Date(datas.lastmodified).toDateString().substring(4)}
                </span>
                <div
                  className={`bg-[${setColor(
                    datas.type
                  )}] w-4 h-4 rounded-full`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      items = (
        <div className="text-center w-full mt-10 font-light">
          No notes found.
        </div>
      );
    }
  } else {
    items = (
      <div className="text-center w-full mt-10 font-light">No notes found.</div>
    );
  }

  return <div className="">{items}</div>;
}
