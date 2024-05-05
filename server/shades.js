function randomH() {
    return Math.floor(Math.random() * 360);
}
function randomS() {
    return Math.floor((Math.random() * 81) + 10);
}
function randomL() {
    return Math.floor( (Math.random() * 81) + 10 );
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    console.log(rgb);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function generateShades() {
    let randomHue = randomH();
    let randomSat = randomS();
    let randomLight = randomL();

    function correctiveHue(x) {
        if ((randomHue + x) > 360) {
            return (randomHue + x) - 360;
        } else {
            return (randomHue + x);
        }
    }

    function correctiveSat(x) {
        if ((randomSat + x) > 100) {
            return (randomSat + x) - 100;
        } else {
            return (randomSat + x);
        }
    }

    function correctiveLight(x) {
        if ((randomLight + x) > 100) {
            return (randomLight - x);
        } else {
            return (randomLight + x);
        }
    }

    return [
        "hsl(" + correctiveHue(-60) + ", " + correctiveSat(-15) + "%, " + correctiveLight(10) + "%)",
        "hsl(" + correctiveHue(-30) + ", " + correctiveSat(15) + "%, " + correctiveLight(10) + "%)",
        "hsl(" + randomHue + ", " + randomSat + "%, " + randomLight + "%)",
        "hsl(" + correctiveHue(30) + ", " + correctiveSat(-15) + "%, " + correctiveLight(10) + "%)",
        "hsl(" + correctiveHue(60) + ", " + correctiveSat(15) + "%, " + correctiveLight(10) + "%)",
        "hsl(" + correctiveHue(90) + ", " + correctiveSat(45) + "%, " + correctiveLight(10) + "%)",
    ]
}

module.exports = {
    generateShades
};