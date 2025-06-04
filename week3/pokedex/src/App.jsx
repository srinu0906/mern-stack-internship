import Hello from "./components/Hello";

function App() {
  const hi = 'hello';
  return (
    
  <>
    <h1>Hola</h1>
    <h1>This is Srinu Vakada</h1>
    {/* This is a comment inside JSX */}
    <p>1+1</p>
    <p>{1+1}</p>
    <p>{hi}</p>
    <Hello name='srinu' age={20}/>
  </>
  )
}

export default App;