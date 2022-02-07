function feetToMeters(feet) {
    meter = 0.305*feet;
    document.write(meter + "<br>");
}

function metersToFeet(meter) {
    feet = 3.279*meter;
    document.write(feet  + "<br")
}

let feetConvertToMeter = prompt(`Bạn muốn đổi từ bao nhiêu feet sang meter`);
feetToMeters(feetConvertToMeter);
let meterConvertToFeet = prompt(`Bạn muốn đổi từ bao nhiêu meter sang feet`);
metersToFeet(meterConvertToFeet);