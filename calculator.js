let result = document.getElementById('inputText');

let calcu = (num) => {
    result.value = result.value + num;

}
let Result = () =>{
    try{
        result.value= eval(result.value)

    }catch(error){
       result.value= 'Invalid Syntax';
    }
}
let clr = ()=>{
    result.value="";
}
let del =()=>{
    result.value= result.value.slice(0,-1);
}