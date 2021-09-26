import { useState } from 'react';

export const Abc = function () {
  return <button> Submit </button>;
};
export function Def() {
  return <button> Clear </button>;
}
// export Def

// export const function

function FullName() {
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [fullName, setFullName] = useState('Full Name');
  const testName = fullName;
  const list = ['Test Name'];
  list.push(fullName);
  console.log(list);
  // function submit(first, last) {
  //   SetFullName = firstName + lastName;
  // }

  // Problems: list gets rendered everytime the input fields recieve any form of new input like a new letter AND the second value, the fullName, gets constantly overwritten
  // should only be rendered onCLick AND needs a loop? Or some way to add names to the array instead of overwritting them

  return (
    <>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.currentTarget.value)}
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.currentTarget.value)}
      />
      <button
        onClick={() => list.push(setFullName(firstName + ' ' + lastName))}
      >
        {' '}
        submit{' '}
      </button>{' '}
      <p> {testName} </p>
      {/* <br />
      <br />
      <br />
      <ul> {name} </ul> */}
    </>
  );
}
// Idee: array und dann den Wert reinpushen?
export default FullName;

// export function showName() {}

// onClick function handler that the values from both inputs are passed to one new const
