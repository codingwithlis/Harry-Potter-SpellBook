import React from "react";
import Spells from "./Spells.jsx";
import Form from "./Form.jsx";
import axios from "axios";

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
    this.getAllSpells = this.getAllSpells.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  };

  toggleForm () {
    this.setState({
      showForm: !this.state.showForm,
    });
  };

  handleFormChange (e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  
  //post request
  handleFormSubmit () {
    axios.post('http://localhost:4444/spells', {
      name: this.state.name,
      description: this.state.description 
    })
    .then((response) => {
      console.log(response);
      this.getAllSpells();
    })
  }

  //get request 
  getAllSpells () {
    axios.get('http://localhost:4444/spells')
    .then((response) => {
      this.setState({
        spells: response.data
        })
    });
  };

  componentDidMount() {
    this.getAllSpells();
  };

  render() {
    return (
      <div className='spell-list'>
        <ul>
          {this.state.spells.map((spell, i) => {
            return <Spells spell={spell} key={i} />;
          })}
        </ul>
        <button onClick={this.toggleForm}>Add Spell</button>
        {this.state.showForm ? <Form handleSubmit = {this.handleFormSubmit} handleChange = {this.handleFormChange} toggleForm={this.toggleForm}/> : <div></div>}
      </div>
    );
  };
};

export default SpellList;
