import React from "react";
import Spells from "./Spells.jsx";
import axios from "axios";

class SpellList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spells: [{ name:"Alohomora", description: "unlocks locks" }, { name:"Confundo", description:"confuses target"}],
      showForm: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount () {
    
  }

  handleClick () {
    this.setState({
      showForm: !this.state.showForm,
    })
  }

  render() {
    return (
      <div className='spell-list'>
        <ul>
          {this.state.spells.map((spell, i) => {
            return <Spells spell={spell} key={i} />;
          })}
        </ul>
        <button onClick={this.handleClick}>Add Spell</button>
        {this.state.showForm ? "True" : <div></div>}
      </div>
    );
  }
}

export default SpellList;
