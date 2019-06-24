import React from "react";

const Form = (props) => {
  return (
    <div>
      <button className='toggle' onClick={props.toggleForm}>X</button>
      <form onSubmit={props.handleSubmit}>
        <label>Spell Name</label>
        <br />
        <input id="name" onChange={props.handleChange} />
        <br />
        <label>Description</label>
        <br />
        <input id="description" onChange={props.handleChange} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;