import './App.css';

  function App(param){
    var input1 = document.getElementById('input1').val;
    var input2 = document.getElementById('input2').val;
    
    switch(param){
      case "sumar":
        var total = input1 + input2;
        break;
      case "restar":
        var total = input1 - input2;
        break;
      case "multi":
        var total = input1 * input2;
        break;
      case "dividir":
        var total = input1 / input2;
        break;
      default:
        var total = "parametro no valido";
        break;
    }
    return total;
  }
  

export default App;
