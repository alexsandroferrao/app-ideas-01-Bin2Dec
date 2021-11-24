import { useState } from "react";
import "./App.css";

function App() {
  const [valorConvertido, setValorConvertido] = useState();


  function convertValue() {
    const valorBinario = document.getElementById("binary").value;
    const alteraValor = validaBinario(valorBinario);
    if(alteraValor){
      setValorConvertido(parseInt(valorBinario,2));
    }
  
  }
  
  function validaBinario(valorBinario) {
    if (valorBinario.match(/^[0-1]+$/g) === null) {
      alert("Apenas valores binários são aceitos");
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="conversorBinario">
      <h1>Conversor Binário</h1>
      <input type="text" id="binary" maxLength="8"></input>
      <input type="submit" value="Convert" onClick={convertValue} />
      <h2>{valorConvertido}</h2>
    </div>
  );
}



export default App;
