import {TYPES} from "../../data/types.js";

const TypeCard = ({text, index, ...rest}) => {
    return <button {...rest}>
        <img src={`types/${TYPES[index]}.png`} alt="Type Image"/>
        <div>{text}</div>
    </button>
}

export default TypeCard;