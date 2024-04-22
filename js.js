let firstNo=null;
let secondNo=null;
let operator = '';
let displayValue='';
let equalPressed = false; 

function add(first, second) {
   return first + second
}

function subtract(first, second) {
   return first - second
}

function divide(first, second) {
   return first / second
}

function multiply(first, second) {
   return first * second
}

function operate(operator, firstNo, secondNo) {
   firstNo=Number(firstNo);
   secondNo=Number(secondNo);
   switch (operator) {
      case '+':
         return add(firstNo, secondNo)

      case '-':
         return subtract(firstNo, secondNo)

      case '*':
         return multiply(firstNo, secondNo)

      case '/':
         if(secondNo===0){
            return "Math Error"
         }else
         return divide(firstNo, secondNo)

      default:
         break;
   }
}

const displayBox = document.querySelector("#displayBox");

function updateDisplay() {   
   displayBox.value=displayValue;
}

function clearDisplay(){
   displayBox.value='';
}


function digitDisplay(btn) {
   if (equalPressed) {
       displayValue = '';
       equalPressed = false;
   }
   if (displayValue === '0' && btn.textContent === '0') {
       displayBox.value = '0';
   } else {
       displayValue += btn.textContent;
       displayBox.value = displayValue;
   }
}

const buttons = document.querySelectorAll(".digits, .operator, .equalTo, .clear");

buttons.forEach(btn => {
   btn.addEventListener('click', () => {
       if (btn.classList.contains('digits')) {
           digitDisplay(btn);
       } else if (btn.classList.contains('operator')) {
           firstNo=displayValue;
           displayValue = '';
           operator = btn.textContent;
           equalPressed = false;
       } else if (btn.classList.contains('clear')) {
           
           displayValue = '';
           clearDisplay();
           firstNo = null;
           secondNo = null;
           operator = '';
           equalPressed = false;
       } else if (btn.classList.contains('equalTo')) {
         if (displayValue === '') {
             displayBox.value = '0';
             console.log("1st");
         } else if (operator !== '' && firstNo !== null) {
             secondNo = displayValue;
             console.log("2nd First: " + firstNo);
             console.log("2nd Second: " + secondNo);
             displayValue = operate(operator, firstNo, secondNo);
             updateDisplay();
             firstNo = displayValue;
             secondNo = null;
             operator = '';
             equalPressed = true;
             console.log("2nd");
         } else {
             updateDisplay();
             equalPressed = true;
             console.log("3rd");
         }
     }     
   });
});
