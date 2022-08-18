// this function clear all values
function clearscreen(){
    document.getElementById("result").value="";
}
// this function display values
function display(value){
    document.getElementById("result").value+=value;
}
// this function evaluate the expression and return result
function calculate(){
    let p=document.getElementById("result").value;
    let q=eval(p);
    document.getElementById("result").value=q;
}