import React from "react";
import Note from "../components/Note";

export default function Main() {
  const openNote = () => {
    alert("Note Opened");
  };
  return (
    <div>
      This will be the main page that displays smaller content.
      <div className="flex flex-wrap">
        <Note
          title="Uno"
          body="Hola mi nombre es Priyanshu"
          openNotee={() => openNote()}
        />
        <Note
          title="Dosdfhddfsdgsdgs"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Ornare lectus sit amet est placerat in egestas erat imperdiet. Tortor at risus viverra adipiscing at in tellus integer. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Est ultricies integer quis auctor elit. Dui vivamus arcu felis bibendum ut tristique et egestas. Habitant morbi tristique senectus et netus. Tincidunt eget nullam non nisi. Nulla pellentesque dignissim enim sit amet venenatis. Dapibus ultrices in iaculis nunc sed augue."
          openNotee={() => openNote()}
        />
      </div>
    </div>
  );
}
