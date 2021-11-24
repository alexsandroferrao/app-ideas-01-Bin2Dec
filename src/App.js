import "./App.css";

function App() {
  return (
    <div className="conversorBinario">
      <h1>Conversor Binário</h1>
      <input type="text" id="binary" maxLength="8"></input>
      <input type="submit" value="Convert" onClick={convertValue} />
    </div>
  );
}

function convertValue() {
  const valorBinario = document.getElementById("binary").value;
  if (valorBinario.match(/^[0-1]+$/g) === null) {
    alert("Apenas valores binários são aceitos");
  }
}

export default App;
