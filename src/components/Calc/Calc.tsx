import React from "react";
import { useState } from "react";
import './CalcStyle.css'


const Calc = () => {
    const [calc, setCalc] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const ops = ['/', '*', '+', '-', '.'];  
    const updateCalc = (value: string) => {

        if(
            ops.includes(value) && calc === '' ||
            ops.includes(value) && ops.includes(calc.slice(-1))
        ){
            return;
        }
        setCalc(calc + value);

        if(!ops.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }



    const createDigits = () => {
        const digits = [];

        for(let i = 1; i < 10; i++){
            digits.push(
                <button
                        onClick={() => updateCalc(i.toString())}
                        key={i}>
                        {i}
                    </button>
            )
        }

        return digits;
    }

    const calculate = () => {
        if(calc == ''){
            return;
        }
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if(calc == ''){
            return;
        }

        const value = calc.slice(0, -1);

        setCalc(value);
    }

    const resetAll = () => {
        if(calc == ''){
            return;
        }
        
        setCalc('');
        setResult('');
        
    }

    return (
        <>
            <div className="calculator">
                <div className="display">
                    {result ? <span>({result})</span> : ''} 
                    {calc || "0"}
                </div>

                <div className="operators">
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>

                    <button onClick={deleteLast}>DEL</button>
                    <button  onClick={resetAll}>RESET</button>

                    <div className="digits">
                        { createDigits() }
                        <button onClick={() => updateCalc('0')}>0</button>
                        <button onClick={() => updateCalc('.')}>.</button>
                        <button onClick={calculate}>=</button>
                    </div>
                </div>
            </div>
        </>
    )

   
}


export default Calc;