$(document).ready(function () {

    var item0 = $('.item0')[0].innerHTML;
    var item1 = $('.item1')[0].innerHTML;
    var item2 = $('.item2')[0].innerHTML;
    var item3 = $('.item3')[0].innerHTML;
    var item4 = $('.item4')[0].innerHTML;
    var item5 = $('.item5')[0].innerHTML;
    var item6 = $('.item6')[0].innerHTML;
    var item7 = $('.item7')[0].innerHTML;
    var item8 = $('.item8')[0].innerHTML;
    var item9 = $('.item9')[0].innerHTML;


    /*   var maindisplay=$(".result")[0].innerHTML;
       var display1=$(".display-1")[0].innerHTML;
       var display2=$(".display-2")[0].innerHTML;
       var btequal=$(".btequal").innerHTML;
       var itemmul=$(".itemmul").innerHTML;
       var exit=$(".exit").innerHTML;
       var itemdivi=$(".itemdivi").innerHTML;
       var itemsub=$(".itemsub").innerHTML;
       var itemadd=$(".itemadd").innerHTML;
       var itemdot=$(".itemdot").innerHTML;
       var itemdel=$(".itemdel").innerHTML;
       var cancel=$(".cancel").innerHTML;
*/

    $(".item").click(function (event) {
        var buttPurpose = event.target.innerHTML;
        var display1 = $(".display-1")[0].innerHTML;
        var display2 = $(".display-2")[0].innerHTML;


        if (buttPurpose == "+") {
            //<<<<---------------Addition--------------->>>>
            /*..............................................*/

            $(".display-1")[0].innerHTML += $(".display-2")[0].innerHTML += buttPurpose;
            var spilttedDis1 = $(".display-1")[0].innerHTML.split("+");
            $(".display-2")[0].innerHTML = null;


        } else if (buttPurpose == "-") {
            //<<<<---------------Subtraction--------------->>>>
            /*..............................................*/
            $(".display-1")[0].innerHTML += $(".display-2")[0].innerHTML += buttPurpose;
            $(".display-2")[0].innerHTML = null;
            // console.log(display2.split("-"));
        } else if (buttPurpose == "C") {
            cancel();
        } else if (buttPurpose == "/") {
            //<<<<---------------Division--------------->>>>
            /*..............................................*/
            $(".display-2")[0].innerHTML += buttPurpose;
            console.log(display2.split("/"));
        } else if (buttPurpose == "X") {
            //<<<<---------------Multiplication--------------->>>>
            /*..............................................*/
            $(".display-2")[0].innerHTML += buttPurpose;
            console.log(display2.split("X"));
        } else if (buttPurpose == "=") {
            $(".display-1")[0].innerHTML += $(".display-2")[0].innerHTML += buttPurpose;
            // var arr = $(".display-1")[0].innerText.split("+");
            $(".display-2")[0].innerHTML = null;
            var fin = $(".display-1").text();
            var finArr = fin.match(/[\d\.]+/g);
            var incre = 0;
            for (var b = 0; b < finArr.length - 1; b++) {
                incre++;
                var temp = parseInt(finArr[b]) + parseInt(finArr[incre]);
                finArr[incre]=temp;
                // var val3 = $('.display-1').val();

            } $(".display-2")[0].innerHTML = temp;

        } else {

            if (buttPurpose != "+" || buttPurpose != "-" || buttPurpose != "X" || buttPurpose != "/" || buttPurpose != "C") {
                $(".display-2")[0].innerHTML += buttPurpose;

            } else if (buttPurpose == "C") {
                cancel();
            }
        }

    })


})