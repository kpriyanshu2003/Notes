import React from "react";

export default function Note(props) {
  let title = props.title;
  if (props.title.length > 10) title = props.title.substring(0, 10) + "...";
  return (
    <div className="m-2 border-slate-500 border rounded overflow-hidden">
      <div
        className="w-full bg-slate-100 text-center px-2 h-8 grid place-items-center cursor-pointer"
        onClick={() => props.openNotee()}
      >
        <span className="whitespace-nowrap">{title}</span>
      </div>
      <div className="p-2 overflow-auto h-40 w-40">
        <span className="">{props.body}</span>
      </div>
    </div>
  );
}
