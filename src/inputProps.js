import { useEffect, useState } from 'react';

// guestListObjs sollte nicht sofort angezeigt werden
// id sollte dnymaisch generiert werden
// Name vom Gast sollte angezeigt werden

function FullName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const guestListObjs = [
    {
      id: 0,
      name: firstName + ' ' + lastName,
      attending: true,
    },
  ];
  // const listItem = [
  //   {
  //     name: firstName + ' ' + lastName,
  //   },
  // ]; // is an array of objects
  // const [list, setList] = useState([]);
  const [list, setList] = useState(guestListObjs);
  function showGuestObj() {
    console.log(list);
  }
  showGuestObj();
  function newListFunction() {
    const lastID = list[list.length - 1].id;
    // [list.length - 1] schaut sich die Länge des Array an (also hier die Anzahl der Objejkte), subtrahiert diese um 1 und ruft somit den letzten Index auf - [] innen drinen wird zu einer Zahl bei eine Array
    // Ist bei einem Array immer dabei, der Key ist an den Index gekoppelt
    console.log(lastID);
    const newList = [
      ...list,

      {
        id: lastID + 1,
        name: firstName + ' ' + lastName,
      },
    ];
    setList(newList);
    // step 1: copy list state
    // step 2: add the new element to the copy - firstName + etc. -  ex with spread operator
    // step 3: setList to the copy
    // maybe an array of obj is better
    // evrytime I update the state I need to go through the 3 steps above
    // proper data structure !!! not strings, objs instead!!!
    // delete as new input field and part of the object? boolean so it deletes a guest if set to true?
    // list.push(setFullName(firstName + ' ' + lastName)); // push inside of a setName ios bad
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
            // console.log(guestListObjs);
            setFirstName('');
            setLastName('');
          }

          // sollte den Wert, also den neuen Namen vom user, in das 2te Array pushen
          // (list = [])) // sollte das erste Array list wieder cleanen damit wieder die Inputfielder leer sind?
        }
      >
        {' '}
        submit{' '}
      </button>{' '}
      <ul>
        {list.map((mappedGuest) => {
          return (
            <li key={mappedGuest.id}>
              {/* .id weil ich objects habe */}
              {/* mappedGuest ist der individuelle Gast und wird nach dem li closign tag namentlich nagezeigt */}
              {/*  onClick inside of the <li> </li> to gain access to the mappedGuest */}
              {mappedGuest.name}
              <button
                onClick={() => {
                  console.log('old list', list);
                  const filteredGuestList = list.filter((filteredGuest) => {
                    return mappedGuest !== filteredGuest;
                  });
                  console.log('new list', filteredGuestList);
                  setList(filteredGuestList);
                  // console.log everything
                  // klare Namen für Variablen, functions etc die gut beschreiben worum es geht
                }}
              >
                remove guest from list{' '}
              </button>
            </li>
          );
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

// setFirstName(''),
//             setLastName(''),
