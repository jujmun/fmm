document.getElementById('sbmt').addEventListener('click', function(event){
    event.preventDefault();
    var a1 = parseFloat(document.getElementById('RC').value);
    var a2 = parseFloat(document.getElementById('RH').value);
    var a3 = parseFloat(document.getElementById('RO').value);

    if (isNaN(a1) || isNaN(a2) || isNaN(a3)) {
        alert("Enter 0 for non-existing elements!");
        return;
    }

    var x1 = 1;
    var x2 = x1*(-0.5*a3 + a1 + 0.25*a2);
    var x3 = a1*x1;
    var x4 = 0.5*a2*x1;

    while (x2 !== Math.floor(x2) || x4 !== Math.floor(x4)){
        x1++;
        x2 = x1*(-0.5*a3 + a1 + 0.25*a2);
        x3 = a1*x1;
        x4 = 0.5*a2*x1;

        if (x1 > 1000) {
            break; 
        }
    }

    document.getElementById('resultX1').textContent = "Compound: " + x1;
    document.getElementById('resultX2').textContent = "O2: " + x2;
    document.getElementById('resultX3').textContent = "H20: " + x3;
    document.getElementById('resultX4').textContent = "CO2: " + x4;



});