import { IPokemonType } from "pokeapi-typescript";

//utils, services & context
import getColorType from "../../utils/getColorType";

//styles
import "./PokeType.scss";

//interfaces
interface Props {
  type: IPokemonType;
}

const PokeType: React.FC<Props> = ({ type }) => {
  return (
    <div className="type" style={{ backgroundColor: getColorType(type.type.name) }}>
      {type.type.name}
    </div>
  );
};

export default PokeType;
