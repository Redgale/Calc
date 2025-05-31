
function startTI84() {
    $("#calculatorDiv").draggable().draggable('disable')
    createCalculator("TI84");
    $("#calculatorDiv").css('position', 'static');
}

function startTI30() {
    $("#calculatorDiv").draggable().draggable('disable')
    createCalculator("TI30");
    $("#calculatorDiv").css('position', 'static');
}

function downSize(k = 294.735/690) {
    let h = $("#calculatorDiv").css('height');
    h = Number(h.slice(0,-2));
    console.log(h)
    h = h * 0.95
    let w = k * h;
    $("#calculatorDiv").css('height', `${h}px`);
    $("#calculatorDiv").css('width', `${w}px`);
}

function upSize(k = 294.735/690) {
    let h = $("#calculatorDiv").css('height');
    h = Number(h.slice(0,-2));
    console.log(h)
    h = h / 0.95
    let w = k * h;
    $("#calculatorDiv").css('height', `${h}px`);
    $("#calculatorDiv").css('width', `${w}px`);
}