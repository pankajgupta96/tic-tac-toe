

function clickOnX(){
    let boxnumber = document.getElementById("text").value;

    boxnumber = parseInt(boxnumber)-1;

    let box = document.getElementsByClassName("item")[boxnumber];

    let value = box.innerText;
    if( value === "X" || value === "O"){
        return;
    }


    if( box){

    box.innerText = "X";
    box.style.backgroundColor = "#559cad";
    }
    else{
        console.error("box is not found");
    }

    

}

function clickOnY(){
    let boxnumber = document.getElementById('text').value;
     
    boxnumber = parseInt(boxnumber) -1;
    let box = document.getElementsByClassName('item')[boxnumber];

    let value = box.innerText;
    if( value === "X" || value === "O"){
        return;
    }


    if(box){
        box.innerText = "O";
        box.style.backgroundColor = '#c1b2ab';
    }
    else{
        console.error("box is not found");
    }

}




