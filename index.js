function bmiSzamolas()
{
    let magassag = parseFloat(document.getElementById("magassag").value / 100);
    let suly = parseFloat(document.getElementById("suly").value);  

    let bmi = suly / (Math.pow(magassag, 2));
    console.log(bmi);
    document.getElementById("bertek").textContent = bmi.toFixed(2) + " kg";

    if(bmi.toFixed(2)<18.5){

        document.getElementById('sovany').style.background = "orange";
        document.getElementById('sovany').style.color = "white";

    }else if(bmi.toFixed(2)<24.9){

        document.getElementById('normal').style.background = "orange";
        document.getElementById('normal').style.color = "white";

    }else if(bmi.toFixed(2)<29.9){

        document.getElementById('tulsuly').style.background = "orange";
        document.getElementById('tulsuly').style.color = "white";

    }else if(bmi.toFixed(2)<34.9){

        document.getElementById('I').style.background = "orange";
        document.getElementById('I').style.color = "white";

    }else if(bmi.toFixed(2)< 39.9){

        document.getElementById('II').style.background = "orange";
        document.getElementById('II').style.color = "white";

    }else{

        document.getElementById('III').style.background = "orange";
        document.getElementById('III').style.color = "white";

    }
}


function init()
{
    document.getElementById("szamitas").addEventListener('click', bmiSzamolas);

}

document.addEventListener('DOMContentLoaded',init);