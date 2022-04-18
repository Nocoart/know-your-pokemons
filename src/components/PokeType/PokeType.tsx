import { IPokemonType } from "pokeapi-typescript";

//components
import { getTypeColor } from "../../utils/getTypeColor";

//styles
import "./PokeType.scss";

//interfaces
interface Props {
  type: IPokemonType;
}

const PokeType: React.FC<Props> = ({ type }) => {
  return (
    <div className="type" style={{ backgroundColor: getTypeColor(type.type.name) }}>
      {type.type.name}
    </div>
  );
};

export default PokeType;
