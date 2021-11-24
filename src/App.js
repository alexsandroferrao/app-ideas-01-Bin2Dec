import './App.css';

function App() {
  return (
    <div className="conversorBinario">
      <h1>Conversor Binário</h1>
      <input type='text' id="binary" maxLength="8">
      </input>
      <input type="submit" value="Convert" onClick={convertValue}/>
    </div>
  );
}

function convertValue(){
  console.log(document.getElementById("binary").value)
}

export default App;
