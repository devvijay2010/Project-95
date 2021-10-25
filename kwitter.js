
function changescreen()
{
    var usernamevar = document.getElementById("loginusername").value;
    var passwordvar = document.getElementById("loginpassword").value; 


    if(usernamevar == "")
    {
        document.getElementById("h41").innerHTML = "Please type in your username before signing up!";
    }
    else
    if(passwordvar == "")
    {
        document.getElementById("h41").innerHTML = "Please type in your password before signing up!";
    }
    if (usernamevar == name123)
        document.getElementById("h41").innerHTML = "This Username Is Already Taken, Please Try Naother One";
    else
    {
        localStorage.setItem("username", usernamevar);
        localStorage.setItem("password", passwordvar);
        window.location = "kwitter_home.html";
}
var name123 = localStorage.getItem("username");
}
function loginacc()
{
  window.location = "alrhaveacclogin.html";
}