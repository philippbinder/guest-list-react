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
  const [firstName, setFirstName] = useState('Placeholder: First Name');
  const [lastName, setLastName] = useState('Placeholder: Last Name');
  const [fullName, setFullName] = useState('Placeholder: Full Name');
  const testName = fullName;
  const list = [];
  // const [list, setList] = useState([]);
  const allGuests = ['Test'];
  list.push(fullName);
  function firstFunction() {
    list.push(setFullName(firstName + ' ' + lastName));
  }
  function secondFunction() {
    allGuests.push(list);
  }
  function setterFunction() {
    const showMe = list[0];
    console.log(showMe);
  }
  // console.log(list);
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
        // onClick={() => list.push(setFullName(firstName + ' ' + lastName))}
        onClick={
          () => {
            firstFunction();
            secondFunction();
            setterFunction();
          }
          // sollte den Wert, also den neuen Namen vom user, in das 2te Array pushen
          // (list = [])) // sollte das erste Array list wieder cleanen damit wieder die Inputfielder leer sind?
        }
      >
        {' '}
        submit{' '}
      </button>{' '}
      {/* <p> {list} </p> */}
      <ul>
        {list.map((newName) => {
          return <li key={newName}> {newName}</li>;
        })}
      </ul>
    </>
  );
}

// https://www.youtube.com/watch?v=uBzgn2RQyYw&list=PLMZMRynGmhsix2_xWKX6sp4rDr0E1tIQ_&index=26 ca Minute 34
// Idee: array und dann den Wert reinpushen?
// Idee: onClick sets array to empty []? To clear?
// 2 Arrays machen? Das erste ist das was der User eingibt, das 2te ist das, was die Namen anzeigt?
// useEffect für das Verändern des Arrays?
// destructuring von dem Array um den aktuellen Wert rauszunehmen?
export default FullName;

// export function showName() {}

// onClick function handler that the values from both inputs are passed to one new const
