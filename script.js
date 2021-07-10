function compute()
{
    var prinicipal = document.getElementById("principal").value;
    if (principal < 1)
    {
        alert("Enter a positive number");
    }
    else{
    var rate= document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var Interest = prinicipal *rate*years /100;
    var year= new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "
    +prinicipal+ ",</br> at an interset of" + rate+"%.<br/>You will receive an amount of"+
    Interest+",<br/>" +" in the year "+year;
    }
}
function updateRate()
{
    var rateval= document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}