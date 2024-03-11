import React from "react";

import { Button, Card } from "../utilitities";

function UserInput({ handleSubmit, handleTextInput, name }) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            onChange={handleTextInput}
            type='text'
            placeholder='Enter your name'
            value={name}
            name='name-field'
          />
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </>
  );
}

export default UserInput;
