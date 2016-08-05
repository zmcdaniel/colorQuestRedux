$(document).ready(function() {
    var timer,
        minutesLabel = $("#minutes"),
        secondsLabel = $("#seconds"),
        totalSeconds = 0;

    window.startTime = function () {
        timer = setInterval(setTime, 1000);
    };

    window.stopTime = function () {
        clearInterval(timer);
    };

    window.clearTime = function () {
        timer = '00:00';
    };

    function setTime() {
        ++totalSeconds;
        secondsLabel.text(pad(totalSeconds%60));
        minutesLabel.text(pad(parseInt(totalSeconds/60)));
    }

    function pad(val) {
        var valString = val + "";
        if(valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
});