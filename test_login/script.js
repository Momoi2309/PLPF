function myfunction()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="user")
    {

       window.location.href="homepage.html"

    }
    else
    {
        alert("login failed");
    }
}