$(document).ready(function () {

    var uniButtPur;
    var uniDisplay1;
    var uniDisplay2;
    var temp;
    var lastVal;

    /*..............................................*/
    //<<<<---------------Content Displaying method--------------->>>>
    /*..............................................*/
    function display() {
        if (uniButtPur != "+" && uniButtPur != "-" && uniButtPur != "X" && uniButtPur != "/") {
            if (uniDisplay2 == temp) {
                uniDisplay2 = $('.display-2')[0].innerHTML = uniButtPur;
            } else {
                uniDisplay2 = $('.display-2')[0].innerHTML += uniButtPur;
            }
        } else {
            if (uniButtPur == "+" || uniButtPur == "-" || uniButtPur == "X" || uniButtPur == "/") {
                uniDisplay1 = $('.display-1')[0].innerHTML += uniButtPur;
                $('.display-1')[0].innerHTML += $('.display-2')[0].innerHTML;
            }
        }
    }

//Methods for the Calculations
    /*..............................................*/
    //<<<<---------------Addition--------------->>>>
    /*..............................................*/
    function addition() {
        var fin = $(".display-1").text();
        var finArr = fin.match(/[\d\.]+/g);
        if (uniButtPur == "+") {
            if (finArr.length == 1) {
                lastVal = finArr.length - 1;
                temp = parseFloat(finArr[lastVal]);
                console.log(finArr[lastVal])
                /* console.log("incre:" + finArr[incre]);
                 console.log("temp:" + temp);
                 console.log("Add another number to add");*/
            } else {
                lastVal = finArr.length - 1
                temp = parseInt(finArr[lastVal++]) + parseFloat(temp);
                $(".display-2")[0].innerHTML = temp;
            }
        }
    }

    /*..............................................*/
    //<<<<---------------Multiplication--------------->>>>
    /*..............................................*/
    function multiplication() {
        var fin = $(".display-1").text();
        var finArr = fin.match(/[\d\.]+/g);
        if (uniButtPur == "X") {
            if (finArr.length == 1) {
                lastVal = finArr.length - 1;
                temp = finArr[lastVal];
                console.log(finArr[lastVal]);
            } else {
                lastVal = finArr.length - 1
                temp = parseFloat(temp) * parseFloat(finArr[lastVal++]);
                $(".display-2")[0].innerHTML = temp;
                console.log(temp)
            }
        }

    }

    /*..............................................*/
    //<<<<---------------Division--------------->>>>
    /*..............................................*/
    function division() {
        var fin = $(".display-1").text();
        var finArr = fin.match(/[\d\.]+/g);
        if (uniButtPur == "/") {
            if (finArr.length == 1) {
                lastVal = finArr.length - 1;
                temp = finArr[lastVal];
                console.log(finArr[lastVal]);
            } else {
                lastVal = finArr.length - 1
                temp = parseFloat(temp) / parseFloat(finArr[lastVal++]);
                $(".display-2")[0].innerHTML = temp;
                console.log(temp)
            }
        }

    }

    /*..............................................*/
    //<<<<---------------Subtraction--------------->>>>
    /*..............................................*/
    function subtraction() {
        var fin = $(".display-1").text();
        var finArr = fin.match(/[\d\.]+/g);
        if (uniButtPur == "-") {
            if (finArr.length == 1) {
                lastVal = finArr.length - 1;
                temp = finArr[lastVal];
                console.log(finArr[lastVal]);
            } else {
                lastVal = finArr.length - 1
                temp = parseFloat(temp) - parseFloat(finArr[lastVal++]);
                $(".display-2")[0].innerHTML = temp;
                console.log(temp)
            }
        }

    }

    /*..............................................*/
    //<<<<---------------Delete--------------->>>>
    /*..............................................*/
    function dele() {
        $(".display-2")[0].innerHTML = null;
    }

    /*..............................................*/
    //<<<<---------------Cancel--------------->>>>
    /*..............................................*/
    function cancel() {
        $('.display-2')[0].innerHTML = $('.display-1')[0].innerHTML = null;
    }

    /*..............................................*/
    //<<<<---------------ButtonCallings--------------->>>>
    /*..............................................*/

    $('.item').click(function (event) {
        var buttPur = event.target.innerHTML;
        uniButtPur = buttPur;
        var display1 = $('.display-1')[0].innerHTML;
        var display2 = $('.display-2')[0].innerHTML;
        uniDisplay1 = display1;
        uniDisplay2 = display2;

        if (uniButtPur != "DEL" && uniButtPur != "C") {
            display();
            if (uniButtPur == "+") {
                addition();
            } else if (uniButtPur == "-") {
                subtraction();
            } else if (uniButtPur == "X") {
                multiplication();
            } else if (uniButtPur == "/") {
                division();
            } else if (uniButtPur == "=") {
                alert("The Button is under work-process:)))")
                // $('.btequal').attr(value,null)
            }
        } else {
            if (uniButtPur == "C") {
                cancel();
            } else if (uniButtPur == "DEL") {
                dele();
            }
        }
    });
});




