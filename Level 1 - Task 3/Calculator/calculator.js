let string = ''; //to store values
let display = document.querySelector('.cal-display');
let buttons = document.querySelectorAll('.btn');
let ArrBtn = Array.from(buttons); //coverting all buttons into array.
ArrBtn.forEach((btn)=> {
    btn.addEventListener('click', (event)=> {
        if(event.target.innerText == '=') {
            evaluate();

        } else if(event.target.innerText == "AC"){
            display.innerText = '';
            string = '';

        } else if(event.target.innerText == "DEL"){
            deleteLastValue();

        } else {
            console.log(event.target);
            console.log(event.target.innerText);
            string += event.target.innerText;
            display.innerText = string;
        }
        
    });
});
const evaluate =()=> {
    try {
        string = eval(string);
        display.innerText = string;
    } catch (error) {
        display.innerText = 'Error';
        string = '';
        console.log(error);
    }
}
const deleteLastValue =()=> {
    string = String(string); //to convert numbers into string
    string = string.slice(0, -1); //removing the last value
    display.innerText = string;

}

