import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <label>Spell Name</label>
      <br /> 
      <input id="name" onChange={props.handleChange}></input>
      <br />
      <label>Description</label>
      <br />
      <input id="description" onChange={props.handleChange}></input>
      <br />
      <button>Submit</button>
    </form>
  )
}

export default Form;