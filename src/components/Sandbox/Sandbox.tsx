import React from "react";
import Children from "./Children";

//styles

//interfaces
interface Person {
  name: string;
}
interface State {
  personList: Person[];
}

const data: State["personList"] = [{ name: "nico" }, { name: "paul" }, { name: "lau" }];

const Sandbox: React.FC = () => {
  return (
    <div>
      <Children text={data} />
    </div>
  );
};

export default Sandbox;
