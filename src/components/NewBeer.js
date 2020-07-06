import React from 'react';

export default function NewBeer(props) {
  return (
    <div>
      <h1>Add New Beer</h1>

      <form onSubmit={props.onAdd}>
        <div>
          <label htmlFor="name">
            Name:<br></br>
          </label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="description">
            Tagline:<br></br>
          </label>
          <input type="text" name="tagline" id="tagline" />
        </div>
        <div>
          <label htmlFor="description">
            Description:<br></br>
          </label>
          <input type="text" name="description" id="description" />
        </div>
        <div>
          <label htmlFor="description">
            First Brewed:<br></br>
          </label>
          <input type="text" name="firstBrewed" id="firstBrewed" />
        </div>
        <div>
          <label htmlFor="description">
            Brewers Tips:<br></br>
          </label>
          <input type="text" name="brewersTips" id="brewersTips" />
        </div>
        <div>
          <label htmlFor="description">
            Attenuation Level:<br></br>
          </label>
          <input type="number" name="attenuationLevel" id="attenuationLevel" />
        </div>
        <div>
          <label htmlFor="description">
            Contributed By:<br></br>
          </label>
          <input type="text" name="contributedBy" id="contributedBy" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
