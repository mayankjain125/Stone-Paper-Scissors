
var num = 4;
var won = 1;
var lost = 1;
var computer = ["ROCK" , "PAPER" , "SCISSIORS"];
document.getElementById('rockimg').onclick = function(){
    num = 0;
    random = Math.floor(Math.random() * 3);
    if(random == 0 ){
        alert("TIE");
    }
    else if(random == 2){
        document.getElementById('won').innerText = + won;
        alert("YOU WON");
        won++;
    }
    else{
        document.getElementById('lost').innerText = lost;
        alert("YOU LOST AS Computer chooses " + `${computer[random]}`);
        lost++;
        
    }
}
document.getElementById('paperimg').onclick = function(){
    num = 1;
    random = Math.floor(Math.random() * 3)
    if(random == 0 ){
        document.getElementById('won').innerText = won;
        alert("YOU WON");
        won++
    }
    else if(random == 1){
        alert("tie");
    }
    else{
        document.getElementById('lost').innerText = lost;
        alert("YOU LOST AS Computer chooses " + `${computer[random]}`);
        lost++
    }
}
document.getElementById('scissorsimg').onclick = function(){
    num = 2;
    random = Math.floor(Math.random() * 3);
    if(random == 1 ){
        document.getElementById('won').innerText = won;
        alert("YOU WON");
        won++;
    }
    else if(random == 2){
        alert("tie");
    }
    else{
        document.getElementById('lost').innerText = lost;
        alert("YOU LOST AS Computer chooses " + `${computer[random]}`);
        lost++;
    }
}