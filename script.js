function compute()
{
    //alert("hello");
    var principal = document.getElementById("principal").value;
    if(principal<=0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementById("rate").value;
    var years =  document.getElementById("years").value;

    var interestAmount = principal*years*rate/100;
    var acYear = new Date().getFullYear()+parseInt(years);
    
    document.getElementById("span1").innerText="If you deposit ";
    document.getElementById("span2").innerText=principal;
    document.getElementById("span3").innerText="at an interest rate of ";
    document.getElementById("span4").innerText=rate+"% .";
    document.getElementById("span5").innerText="You will receive an amount of ";
    document.getElementById("span6").innerText=interestAmount+",";
    document.getElementById("span7").innerText="in the year ";
    document.getElementById("span8").innerText=acYear;
    //window.alert('ok');    
    
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText="  "+rateval+"%";
}

        