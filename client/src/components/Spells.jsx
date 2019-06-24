import React from "react";

function Spells (props) {
  return(
    <li>
      {props.spell.name} - {props.spell.description}
    </li>
  )

}

export default Spells;