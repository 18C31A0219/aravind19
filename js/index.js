var email="aravind@gmail.com"
var pass="123"
var form=document.forms
function loginpage()
{
    var userDefEmail=document.getElementById("email").value
    var userDefPassw=document.getElementById("password").value
    var divbor=document.getElementsByClassName("borderDiv")
    if(email!=userDefEmail&&pass!=userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,red)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="user name and password is wrong"
    }
    else if(email==userDefEmail&&pass!=userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(255, 192, 203),red)" 
        divbor[0].style.borderColor="royelblue"
        divbor[1].style.borderColor="red"
        document.getElementById("result").innerHTML="password is wrong"
    }
    else if(email!=userDefEmail&&pass==userDefPassw)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)"
        divbor[0].style.borderColor="red"
        divbor[1].style.borderColor="royleblue"
        document.getElementById("result").innerHTML="user name is wrong"
    }
    else{
        form[0].action="./css/project1.html"
        form[0].elements[2].type="submit"
    }
}
function visible()
{
    form[0].elements[1].type="text"
    document.getElementById("passvisible").src="../technology/eye/invisibleeye.png"
    document.getElementById("passvisible").style.transform="rotateY(360deg)"
    document.getElementById("passvisible").style.transition="transform 0.5s"

}
function invisible()
{
    form[0].elements[1].type="password"
    document.getElementById("passvisible").src="../technology/eye/visibleeye.png"
    document.getElementById("passvisible").style.transform="rotateY(0deg)"
    document.getElementById("passvisible").style.transition="transform 0.5s"
}