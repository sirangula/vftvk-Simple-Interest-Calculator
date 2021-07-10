function compute()
{
    var prinicipal = document.getElementById("principal").value;
    var rate= document.getElementById("rate"),value;
    var years = document.getElementById("years"),value;
    var Interest = prinicipal *rate*years /100;
    var year= new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "
    +prinicipal+ " at an interset of" + rate+"%.You will receive an amount of"+
    Interest+"," +" in the year "+year;
}
function updateRate()
{
    var rateval= document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}