//  Creating a guest with separate first name and last name fields
// After a guest is created, the fields should be cleared again
/*
STEPS
#1 useEffect and state variable required
input fields that are shown

- Create 2 input fields and a submit button that send the data to the server
- onClick must submit the input of the user and clear the input fields
- need to use useEffect and useState (state variable). useEffecet has it's dependancy the onClick event that submits the data.
- the input fields for first name and last name must use a state vairable?
- controlled components?

https://github.com/upleveled/express-guest-list-api-memory-data-store
*/
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import PropTypes from 'prop-types'; // is a default import
import { useState } from 'react'; // is a named import
import FullName, { Def } from './inputProps';
import { Abc } from './inputProps.js'; // 2 types of imports - default and named - {} for named ones and imports without {} for default imports
import { headerStyle } from './styles.js';

function GuestList() {
  const [first, setFirst] = useState();

  async function fetchGuestList() {
    const baseUrl = 'http://localhost:5000';
    const response = await fetch(`${baseUrl}/`);
    const allGuests = await response.json();
    console.log(allGuests);

    fetchGuestList(); // Maybe outside of it's function?

    async function addGuest() {
      const response = await fetch(`${baseUrl}/`, {7
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName: 'Karl', lastName: 'Horky' }),
      });
      const createdGuest = await response.json();
    }
  }
  fetchGuestList();
}

export default function inputPart() {
  return (
    <div>
      <header css={headerStyle}>
        <h1>Guest List. It adds guests... To a list!</h1>
        {/* <input /> */}
        {/* <input /> */}
        <Abc> Test </Abc>
        <Def> </Def>
        <FullName />
      </header>
    </div>
  );
}