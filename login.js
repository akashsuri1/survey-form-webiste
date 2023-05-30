function valid()
{
    var email,pass;

    email=document.getElementById("email");
    pass=document.getElementById("pass");


    if(email.value =="")
    {
        document.getElementById("email_err").innerHTML="please Enter email!"
        return false;
    }
    if(pass.value =="")
    {
        document.getElementById("pass_err").innerHTML="please Enter password!"
        return false;
    }
    if(pass.value.length<6)
    {
        alert("Please Enter passsword atleast 6 characters");
        return false;
    }
    else
    {
        alert("Login successfully");
    }
   
}