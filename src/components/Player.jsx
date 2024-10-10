import { useRef, useState } from "react";

export default function Player() {

  const palyerName = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState('');
  // const [submitted, setSubmitted] = useState(false)

  // function handleChange(e){
  //   // console.log(e);
  //   setSubmitted(false)
  //   setInputValue(e.target.value)
  // }

  function handleClick(){
    // setSubmitted(true)
    setEnteredPlayerName(palyerName.current.value)
    palyerName.current.value = ''
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'Unknown Entity'}</h2>
      {/* <h2>Welcome {enteredPlayerName ?? 'Unknown Entity'}</h2> */}

      <p>
        <input ref={palyerName} type="text" /* onChange={handleChange} */  />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
