import { useEffect, useState } from 'react';

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
  const [list, setList] = useState([]);
  function newListFunction() {
    const newList = [...list, firstName + ' ' + lastName];
    setList(newList);
    // step 1: copy list state
    // step 2: add the new element to the copy - firstName + etc. -  ex with spread operator
    // step 3: setList to the copy
    // maybe an array of obj is better
    // evrytime I update the state I need to go through the 3 steps above
    // proper data structure !!! not strings, objs instead!!!
    // delete as new input field and part of the object? boolean so it deletes a guest if set to true?
    // list.push(setFullName(firstName + ' ' + lastName)); // push inside of a setName is bad
    // datatype obj, attending property and delete property as input fieldsd in the <li>?
  }

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
        onClick={
          () => {
            newListFunction();
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
