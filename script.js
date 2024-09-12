const passwordBox=document.querySelector("#password")
const length=12;


const upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase='abcefghijklmnoprstuvwxyz'
const number='1234567890'
const symboles='~!@#$^&*()><?/₹%+=-_*'
const allChar=upperCase+lowerCase+number+symboles;

function creatPass(){
    let password='';
    password+= upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=number[Math.floor(Math.random()*number.length)]
    while(length>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)]
       
    }
    
    passwordBox.value=password
}

function copyPass(){
    passwordBox.select();
    document.execCommand('copy')
}


              




