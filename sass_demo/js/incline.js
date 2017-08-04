function inclineHandler(e) {
    console.log(e);
    if (e.alpha) {
        $("#horizontal").text(e.alpha);
    }
    if (e.beta) {
        $("#vertical").text(e.beta);
    }
    if (e.gamma) {
        $("#gamma").text(e.gamma);
    }
}

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", inclineHandler, false);
} else {
    console.log("I have no idea what happeded?");
}