import React from 'react';

export function Filter({ getFilterName }) {
  const getValue = ({ target: { value } }) => {
    getFilterName(value);
  };
  return (
    <>
      <label>
        Find contacts by name
        <input
          onChange={getValue}
          type="text"
          name="filter"
          placeholder="Enter name"
        />
      </label>
    </>
  );
}
