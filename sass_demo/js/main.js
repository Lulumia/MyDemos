function pcMove() {
    var mouseX, mouseY;
    $(".box").mousedown(function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    $(".box").mouseup(function(e) {
        var x = Math.abs(e.clientX - mouseX);
        var y = mouseY - e.clientY;
        var a = e.clientX - mouseX;
        var b = e.clientY - mouseY;
        var angle = 360*Math.atan(a/b)/(2*Math.PI)
        console.log("this is the angle....", angle);
        if (x<100 && y>100) {
            $(".head").animate({
                top: "-200px"
            }, 300);
            $(".head").animate({
                top: "0"
            }, 300);
        }
    });
}

function phoneMove() {
    var startX, startY;
    $(".box").bind('touchstart', function(e) {
        startX = e.originalEvent.changedTouches[0].clientX;
        startY = e.originalEvent.changedTouches[0].clientY;
    });
    $(".box").bind('touchmove', function(e) {
        e.preventDefault();
    });
    $(".box").bind('touchend', function(e) {
        var endX = e.originalEvent.changedTouches[0].clientX;
        var endY = e.originalEvent.changedTouches[0].clientY;
        var x = Math.abs(startX - endX);
        var y = startY - endY;
        if (x<100 && y>100) {
            $(".head").animate({
                marginTop: "-200px"
            }, 300);
            $(".head").animate({
                marginTop: "0"
            }, 300);
        }
    });
}

function isPC() {
    if (navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)) {
        phoneMove();
    } else {
        pcMove();
    }
}

isPC();