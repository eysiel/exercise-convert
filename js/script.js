function kilometer(){
    let x = document.getElementById("milliMeter").value;
    const y = 1000000;
    const qoutient = parseFloat(x) / parseFloat(y);

    document.getElementById("equal").innerHTML = qoutient;
}
function centimeter(){
    let x = document.getElementById("milliMeter").value;
    const y = 10;
    const qoutient = parseFloat(x) / parseFloat(y);

    document.getElementById("equal").innerHTML = qoutient;}
function meter(){
    let x = document.getElementById("milliMeter").value;
    const y = 1000;
    const qoutient = parseFloat(x) / parseFloat(y);

    document.getElementById("equal").innerHTML = qoutient;
}