let input=document.querySelector(".input");
function append(value){
    input.value+=value;
}
function clearDisplay() { input.value = ""; }
function lastDel(){
    input.value=input.value.slice(0,-1);
}
function equal( ){
    try{
        input.value=eval(input.value);
    }
    catch{
        input.value="error";
    }

}