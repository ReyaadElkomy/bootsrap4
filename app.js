function myapp(){
var myclass = document.querySelector(".navbar-nav");
myclass.classList.toggle("show");

};

// form validation
document.querySelector("#yname").addEventListener("keyup", function(){
    var yname = this.value;
    var valid = document.querySelector(".name-vaild")
    var invalid = document.querySelector(".name-invalid")
    if(yname === ""){
        
        invalid.innerHTML= "please enter your Name"
        valid.innerHTML= ""
        
    }else{
        valid.innerHTML= ""
        invalid.innerHTML= ""
    }
});




document.querySelector("#email").addEventListener("keyup",function(){
    var yname = document.querySelector("#yname").value;
    var submit = document.querySelector("#submit")
    var vaild = document.querySelector(".valid")
    var invalid = document.querySelector(".invalid")
    var emailInput = document.querySelector("#email")
    var email = this.value;
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = re.test(String(email).toLowerCase());
    if(email===""){
        invalid.innerHTML = "please enter your email"
        vaild.innerHTML= ""
        emailInput.style.border= "2px  solid  #f9004d !important"
        submit.setAttribute("disabled", "disabled")
        

    }else if (result==false){
        vaild.innerHTML= ""
        invalid.innerHTML = "Invalid email"
        emailInput.style.border= "2px  solid #f9004d !important"
        submit.setAttribute("disabled", "disabled")
    }else{
        vaild.innerHTML = "Valid email"
        invalid.innerHTML = ""
        emailInput.style.border= ""
        submit.removeAttribute("disabled", "disabled")
    }
    
});


document.querySelector("#ysubj").addEventListener("keyup", function(){
    var yname = this.value;
    var valid = document.querySelector(".sub-valid")
    var invalid = document.querySelector(".sub-invalid")
    if(yname === ""){
        
        invalid.innerHTML= "please enter your Subject"
        valid.innerHTML= ""
        
    }else{
        valid.innerHTML= ""
        invalid.innerHTML= ""
    }
});


document.querySelector("#ymass").addEventListener("keyup", function(){
    var ymass = this.value;
    var valid = document.querySelector(".mass-valid")
    var invalid = document.querySelector(".mass-invalid")
    if(ymass === ""){
        invalid.innerHTML= "please enter your Message"
        valid.innerHTML= ""
    }else{
        valid.innerHTML=""
        invalid.innerHTML=""
    }
});