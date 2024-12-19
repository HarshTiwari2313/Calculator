const clearBtn = document.getElementById('clear-button');
const deleteBtn = document.getElementById('delete-button');
const divideBtn = document.getElementById('divide-button');
const multiplyBtn = document.getElementById('multiply-button');
const subtractBtn = document.getElementById('subtract-button');
const addBtn = document.getElementById('add-button');
const equalBtn = document.getElementById('equal-button');
const decimalBtn = document.getElementById('decimal-button');

const resultElement = document.getElementById('result');

const numberBtn = document.querySelectorAll('.number');

//initialize the variables

let result ='';
let operation='';
let previousOperand=0;

// function append Number
const appendNumber = (number)=>{
       if(number==='.' && result.includes('.')){
           return ;
       }
        result=result+number;
        updateDisplay();
}

// function  update display
const updateDisplay=()=>{
     if(operation){
        resultElement.innerText =`${previousOperand} ${operation} ${result}`
     }
     else{
        resultElement.innerText=result;
     }

   
    
}

// Function to select operator

    const selectOperator =(operatorValue)=>{
        if(result===''){
            return;
        }
        if(operation!==''&& previousOperand!==''){
            calculateResult();
        }
        operation = operatorValue;
        previousOperand = result;
        result='';
        updateDisplay();
    }
// function to calculate Result
    const calculateResult=()=>{
               let evaluatedResult;
               const prev = parseFloat(previousOperand) ;
               const current = parseFloat(result) ;
               
               if(isNaN(prev) || isNaN(current)){
                return;
               }
               switch(operation){
                    case '+':
                          evaluatedResult = prev+current;
                          break;
                    case '-':
                          evaluatedResult = prev-current;
                          break;
                    case '*':
                          evaluatedResult = prev*current;
                          break;
                    case '/':
                          evaluatedResult = prev/current;
                          break;
                    default:
                          result;      
               }

               result= evaluatedResult.toString();
               operation='';
               previousOperand='';

                    
                
    }
// add Event Listner to number button
numberBtn.forEach(button=>{
    button.addEventListener('click',()=>{
        appendNumber(button.innerHTML);
    });
});



// add event listner to decimal button

decimalBtn.addEventListener('click',()=>{
    appendNumber('.')
})

//function to delete last digit
const deleteLastDigit=()=>{
    if(result===''  ){
        return;
    }
    result = result.slice(0,-1);
    updateDisplay();
}
// event listner for operator

addBtn.addEventListener('click',()=> selectOperator('+'));
subtractBtn.addEventListener('click',()=> selectOperator('-'));
multiplyBtn.addEventListener('click',()=> selectOperator('*'));
divideBtn.addEventListener('click',()=> selectOperator('/'));


equalBtn.addEventListener('click',()=>{
    if(result===''){
        return;
    }
    calculateResult();
    updateDisplay();
});

clearBtn.addEventListener('click',()=>{
     result='';
     previousOperand='';
     operation='';
     updateDisplay();
})

deleteBtn.addEventListener('click',deleteLastDigit);











