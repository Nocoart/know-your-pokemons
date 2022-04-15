import React from "react";

//styles

//interfaces
interface Props {
  text: { name: string }[];
}

const Children: React.FC<Props> = (data) => {
  return (
    <div>
      {data.text.map((el, index) => (
        <div>coucou du child name : {data.text[index].name}</div>
      ))}
    </div>
  );
};

export default Children;
