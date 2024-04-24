let input = document.getElementById('inputbox');
let btn = document.querySelectorAll('button');

let string = "";
let arr = Array.from(btn);
window.addEventListener('keydown', (e)=>{
    if(e.code == 'Enter' || e.code == 'NumpadEnter'){
        if(string != "") 
        string = eval(string);
        input.value = string;
    }
    else if(e.code == 'Delete'){
        string = "";
        input.value = string;
    }
    else if(e.code == 'Backspace'){
        string = string.substring(0, string.length-1);
        input.value = string;
    }
    else if(e.code.includes('Numpad')){
        string += e.key;
        input.value = string;
    }
})
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == '='){
            if(string != "") 
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
        console.log(string);
    })
})
