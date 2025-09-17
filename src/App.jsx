import Counter from './Counter';
import Batsman from './Batsman';
import './App.css'


function App() {
  
  function handleClick(){
    alert('I am clicked.')
  }

  const handleClick3 = () => {
    alert('clicked 3')
  }

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>


      {/* <button onClick="handleClick()">Cilck Me</button> */}

      <button onClick={handleClick}>Click Me</button>

      <button onClick={function handleClick2(){
        alert('clicked 2')
      }}>Click Me2</button>

      <button onClick={handleClick3}>Click Me 3</button>

      <button onClick={() => alert('Click 4')}>Click Me 4</button>

      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
     
    </>
  )
}

export default App
