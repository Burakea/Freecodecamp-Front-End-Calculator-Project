import { useState } from "react";


function App() {

  const [answer, setAnswer] = useState("");
  const [expression, setExpression] = useState("");


  const symbols = (e) =>{
    return /[*/+-]/.test(e);
  }

  const zed = expression.trim();

  
  const result = () => {
    if(symbols(zed.charAt(zed.length -1))) return
    const x = zed.split(" ");
    const nex = [];
    for(let i=x.length -1; i>=0; i--){
      if(["*","/","+"].includes(x[i])&& symbols(x[i-1])){
        nex.unshift(x[i]);
        let j = 0;
        let k = i - 1;
        while(symbols(x[k])){
          k--;
          j++;
        }
        i -= j;
      } else {
        nex.unshift(x[i])
      }
    }
    const finalExp = nex.join(" ");
    if(symbols(finalExp.charAt(0))){
      setAnswer(eval(answer + finalExp))
    } else {
      setAnswer(eval(finalExp))
    }
    setExpression("");
  }

  const buttonPress = (e) =>{
    if (e === "clear") {
      setAnswer("");
      setExpression("0");
    } else if (e === "negative") {
      if (answer === "") return;
      setAnswer(answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer);
    } else if (e === "percentage") {
      if (answer === "") return;
      setAnswer((parseFloat(answer) / 100).toString());
    } else if (symbols(e)) {
      setExpression(zed + " " + e + " ");
    } else if (e === "=") {
      result();
    } else if (e === "0") {
      if (expression.charAt(0) !== "0") {
        setExpression(expression + e);
      }
    } else if (e === ".") {
      const klein = expression.split(/[-+/*]/g).pop();
      if (!klein) return;
      if (klein?.includes(".")) return;
      setExpression(expression + e);
    } else {
      if (expression.charAt(0) === "0") {
        setExpression((expression.slice(1) + e).toString());
      } else {
        setExpression((expression + e).toString());
      }
    /* if(e === "clear"){
      setAnswer("0")
      setExpression("")
    } else if(e === "negative"){
      if(answer === "") return;
      setAnswer(answer.toString().charAt(0) === "-" ? answer.slice(1) : "-" + answer)
    } else if(e === "percentage"){
      if(answer === "") return;
      setAnswer((parseFloat(answer)/100).toString())
    } else if (symbols(e)){
      setExpression(zed + " " + e + " ")
    } else if(e === "="){
      result()
    } else if(e ==="0"){
      if(expression.charAt(0) !== "0"){
        setExpression(expression + e)
      }
    } else if(e === "."){
      const klein = expression.split(/[-+/*]/g).pop()

      if(klein?.includes(".")) return
      setExpression(expression + e)
    } else {
      if(expression.charAt(0) === "0"){
        setExpression(expression.slice(1) + e)
      } else {
        setExpression(expression + e)
      } */
    }


  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div id="calculator">
        <div id="display" >
          <div id="answer">{answer}</div>
          <div id="expression">{expression}</div>
        </div>
          <div id="clear" onClick={()=> buttonPress("clear")} className="divs">C</div>
          <div id="negative" onClick={()=> buttonPress("negative")} className="divs">+/-</div>
          <div id="percentage" onClick={()=> buttonPress("percentage")} className="divs">%</div>
          <div id="divide" onClick={()=> buttonPress("/")} className="divs">/</div>
          <div id="seven" onClick={()=> buttonPress("7")} className="divs">7</div>
          <div id="eight" onClick={()=> buttonPress("8")} className="divs">8</div>
          <div id="nine" onClick={()=> buttonPress("9")} className="divs">9</div>
          <div id="multiply" onClick={()=> buttonPress("*")} className="divs">*</div>
          <div id="four" onClick={()=> buttonPress("4")} className="divs">4</div>
          <div id="five" onClick={()=> buttonPress("5")} className="divs">5</div>
          <div id="six" onClick={()=> buttonPress("6")} className="divs">6</div>
          <div id="subtract" onClick={()=> buttonPress("-")} className="divs">-</div>
          <div id="one" onClick={()=> buttonPress("1")} className="divs">1</div>
          <div id="two" onClick={()=> buttonPress("2")} className="divs">2</div>
          <div id="three" onClick={()=> buttonPress("3")} className="divs">3</div>
          <div id="add" onClick={()=> buttonPress("+")} className="divs">+</div>
          <div id="zero" onClick={()=> buttonPress("0")} className="divs">0</div>
          <div id="decimal" onClick={()=> buttonPress(".")} className="divs">.</div>
          <div id="equals" onClick={()=> buttonPress("=")} className="divs">=</div>
      </div>
    </div>
  );
}

export default App;
