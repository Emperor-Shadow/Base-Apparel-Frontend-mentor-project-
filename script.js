const regex = /^\w+([.–]?\w+)*@\w+([.–]?\w+)*(\.\w{2,})+$/;



var btn = document.querySelector("#btn"),
input = document.querySelector("input"),
errorIcon = document.querySelector("#error-icon"), 
errorMsg = document.querySelector("#error-msg"),
errors = ["email cannot be empty" , "please type in a valid email" , ""],
waitList = document.querySelector(".alert");
mainBody = document.querySelector("main"),
closeBtn = document.querySelector("#close")


emailCheck = () =>{
  
  if(input.value == ""){
    errorMsg.innerText = errors[0]
    errorIcon.style.display = "block"
    
  }else if (regex.test(input.value) == false){
    
    errorIcon.style.display = "block"
    errorMsg.innerText = errors[1] 
    
  } else {
    errorIcon.style.display = "none"
    errorMsg.innerText = errors[2]
    input.value = ""
  }
}



btn.addEventListener("click" , ()=>{
  emailCheck()
})
