import React from "react";
import Spells from "./Spells.jsx";
import Form from "./Form.jsx";

class SpellList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spells: [{ name:"Alohomora", description: "unlocks locks" }, { name:"Confundo", description:"confuses target"}],
      showForm: false,
      name: '',
      description: ''
    };

    this.toggleForm= this.toggleForm.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  componentDidMount () {
    
  }

  toggleForm () {
    this.setState({
      showForm: !this.state.showForm,
    })
  }

  handleFormChange (e) {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleFormSubmit () {

  }

  getAllSpells () {

  }

  render() {
    return (
      <div className='spell-list'>
        <ul>
          {this.state.spells.map((spell, i) => {
            return <Spells spell={spell} key={i} />;
          })}
        </ul>
        <button onClick={this.toggleForm}>Add Spell</button>
        {this.state.showForm ? <Form handleChange = {this.handleFormChange} toggleForm={this.toggleForm}/> : <div></div>}
      </div>
    );
  }
}

export default SpellList;
