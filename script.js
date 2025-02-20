
let btnx = document.querySelector('.button1');
let btno = document.querySelector('.button2');

 
 
function clickOnX(){
    let boxnumber = document.getElementById("text").value;

    boxnumber = parseInt(boxnumber);

    

    const selector = `.container :nth-child(${boxnumber+1 }) .draw`;
        let box = document.querySelector(selector);


        const selector2 = `.container :nth-child(${boxnumber +1})`;
        let box2 = document.querySelector(selector2);

        

    let value = box.innerText;
    if( value === "X" || value === "O"){
        return;
    }


    if( box){

    box.innerText = "X";
    btnx.disabled = true;
    btno.disabled = false;
    box2.style.backgroundColor = "#559cad";
    }
    else{
        console.error("box is not found");
    }

    
    }

function clickOnO(){
    let boxnumber = document.getElementById('text').value;
     debugger;
    boxnumber = parseInt(boxnumber);
    const selector = `.container :nth-child(${boxnumber + 1}) .draw`;
        let box = document.querySelector(selector);


        const selector2 = `.container :nth-child(${boxnumber + 1}) `;
        let box2 = document.querySelector(selector2);


    let value = box.innerText;
    if( value === "X" || value === "O"){
        return;
    }


    if(box){
        box.innerText = "O";
        btnx.disabled = false;
        btno.disabled = true;
        box2.style.backgroundColor = '#c1b2ab';
    }
    else{
        console.error("box is not found");
    }

}




