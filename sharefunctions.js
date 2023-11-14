function toggle() {
    var ele = document.getElementById("toggleText");
    var text = document.getElementById("displayText");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
    }
}

function openTCP() {
    var ele = document.getElementById("toggleTCP");
    var text = document.getElementById("displayTCP");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
    }
}

function openTCP1() {
    var ele = document.getElementById("toggleTCP1");
    var text = document.getElementById("displayTCP1");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
    }
}

function openTCP2() {
    var ele = document.getElementById("toggleTCP2");
    var text = document.getElementById("displayTCP2");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
    }
}

function openTCP3() {
    var ele = document.getElementById("SuuMui");
    var text = document.getElementById("displayTCP2");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
    }
}

function openTCP4() {
    var ele = document.getElementById("MaoDau");
    var text = document.getElementById("displayTCP2");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
    }
}

function openTCP5() {
    var ele = document.getElementById("ThinTuat");
    var text = document.getElementById("displayTCP2");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
    }
}

function openTCP6() {
    var ele = document.getElementById("TiHoi");
    var text = document.getElementById("displayTCP2");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
    }
}

function openTCP7() {
    var ele = document.getElementById("DanThan");
    var ele1 = document.getElementById("TiHoi");
    var text = document.getElementById("displayTCP2");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
        ele1.style.display = "none";
    }
}

function openTCP8() {
    var ele = document.getElementById("PhiHoa");
    var text = document.getElementById("displayTCP2");
    if (ele.style.display == "block") {
        ele.style.display = "none";
        text.innerHTML = "Nhập thêm sao";
    } else {
        ele.style.display = "block";
        text.innerHTML = "Không nhập thêm sao";
    }
}

function resize() {
    if (trinhan == 1)
        bacot();
    if (trinhan == 3)
        haicot(size, 0, 0);
}

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    var canvas = document.getElementById("canvasImg");
    canvas.addEventListener("mousedown", getPosition, false);
}

function getPosition(event) {
    var xy = new Array();
    var x = new Number();
    var y = new Number();
    var canvas = document.getElementById("canvasImg");
    if (event.x != undefined && event.y != undefined) {
        x = event.x;
        y = event.y + 900;
    } else {
        x = event.clientX + document.body.scrollLeft +
            document.documentElement.scrollLeft;
        y = event.clientY + document.body.scrollTop +
            document.documentElement.scrollTop;
    }
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;
    xy[0] = x;
    xy[1] = y;
    return (xy);
}

function ShowHideObject(obj) {
    document.getElementById('idLich_1').style.display = 'none';
    document.getElementById('idLich_0').style.display = 'none';
    document.getElementById('idLich_' + obj).style.display = 'block';
    setup();
}

function ngaygioxem() {
    var dd = new Date();
    var m_in = dd.getMonth() + 1;
    var y_in = dd.getFullYear();
    var d_in = dd.getDate();
    var h_in = Math.floor(dd.getHours() * 0.5);
    var z_in = (-1) * Math.floor((dd.getTimezoneOffset()) / 60);
    var amlich = convertSolar2Lunar(d_in, m_in, y_in, 7.0);
    var ngay = parseInt(amlich[0]);
    var thang = parseInt(amlich[1]);
    var namAm = parseInt(amlich[2]);
    var nhuan = parseInt(amlich[3]);
    alert("Hôm nay là ngày " + d_in + " tháng " + m_in + " năm " + y_in + " Dương Lịch, tức là ngày " + ngay + " tháng " + thang + " năm " + namAm + " Âm Lịch, tại múi giờ số " + z_in);
    return false;
}

function zoomin() {
    size = size * 0.9576032806;
    bacot();
}

function zoomout() {
    size = size * 1.044273782;
    bacot();
}

function zoominlv() {
    size = size * 0.9576032806;
    lieuvo(size, 0, 0);
}

function zoomoutlv() {
    size = size * 1.044273782;
    lieuvo(size, 0, 0);
}

function zoominhaicot() {
    size = size * 0.9576032806;
    haicot(size, 0, 0);
}

function zoomouthaicot() {
    size = size * 1.044273782;
    haicot(size, 0, 0);
}

function lndv(tuoi, chicungdaivan, bddaivan, step) {
    var x = chicungdaivan;
    var khoi = tuoi - bddaivan;
    if (khoi == 0) return x;
    if (khoi == 1) return check(x + 6);
    if (khoi == 2) return check(x + 6 - step);
    if (khoi == 3) return check(x + 6);
    if (khoi == 4) return check(x + 6 + step);
    if (khoi == 5) return check(x + 6 + 2 * step);
    if (khoi == 6) return check(x + 6 + 3 * step);
    if (khoi == 7) return check(x + 6 + 4 * step);
    if (khoi == 8) return check(x + 6 + 5 * step);
    if (khoi == 9) return check(x + 6 + 6 * step);
}

function yinyang(context, x, y, radius, fill, stroke, color) {
    if (typeof stroke == "undefined") {
        stroke = true;
    }
    if (typeof radius === "undefined") {
        radius = 5;
    }
    context.strokeStyle = color;
    context.shadowColor = '#999';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.lineWidth = 2;
    context.beginPath();
    context.arc(x, y, radius, 0 * Math.PI, 2 * Math.PI);
    context.closePath();
    context.fillStyle = 'white';
    context.stroke();
    context.fill();
    context.moveTo(x, y - radius / 2);
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y - radius / 2, radius / 2, 1.5 * Math.PI, 0.5 * Math.PI);
    context.arc(x, y + radius / 2, radius / 2, 1.5 * Math.PI, 0.5 * Math.PI, true);
    context.arc(x, y, radius, 0.5 * Math.PI, 1.5 * Math.PI, true);
    context.closePath();
    context.stroke();
    context.fill();
    context.moveTo(x, y - radius / 2);
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(x, y - radius / 2, radius / 2, 1.5 * Math.PI, 0.5 * Math.PI);
    context.arc(x, y + radius / 2, radius / 2, 1.5 * Math.PI, 0.5 * Math.PI, true);
    context.arc(x, y, radius, 0.5 * Math.PI, 1.5 * Math.PI);
    context.closePath();
    context.stroke();
    context.fill();
    context.moveTo(x, y - radius / 2);
    context.globalAlpha = 0.6;
    context.beginPath();
    context.fillStyle = 'white';
    context.arc(x, y + radius / 2, radius / 8, 0 * Math.PI, 2 * Math.PI);
    context.closePath();
    context.fill();
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    context.moveTo(x, y - radius / 2);
    context.globalAlpha = 0.2;
    g(10);
    context.fillStyle = color;
    context.strokeStyle = 'white';
    context.beginPath();
    context.arc(x, y - radius / 2, radius / 8, 0 * Math.PI, 2 * Math.PI);
    context.closePath();
    context.fill();
    context.globalAlpha = 1;
}

function curverec(a, b, c, d, r) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');
    context.closePath();
    context.beginPath();
    context.moveTo(a + r, b);
    context.globalAlpha = 1;
    context.arc(a + r, b + r, r, 1 * Math.PI, 1.5 * Math.PI);
    context.moveTo(a + r, b);
    context.lineTo(a + c - r, b);
    context.arc(a + c - r, b + r, r, 1.5 * Math.PI, 2 * Math.PI);
    context.moveTo(a + c, b + r);
    context.lineTo(a + c, b + d - r);
    context.arc(a + c - r, b + d - r, r, 0 * Math.PI, 0.5 * Math.PI);
    context.moveTo(a + c - r, b + d);
    context.lineTo(a + r, b + d);
    context.arc(a + r, b + d - r, r, 0.5 * Math.PI, 1 * Math.PI);
    context.moveTo(a, b + d - r);
    context.lineTo(a, b + r);
    context.closePath();
    context.stroke();
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == "undefined") {
        stroke = true;
    }
    if (typeof radius === "undefined") {
        radius = 5;
    }
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    if (stroke == 1) {
        ctx.stroke();
    }
    if (fill == 1) {
        ctx.fill();
    }
}