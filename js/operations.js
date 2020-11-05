
var counter = 1;
var operation;
var num1 = 0;
var num2 = 0;
var result;

$('button').hover(function () {
    $(this).css("opacity", 0.5);
},
    function () {
        $(this).css("opacity", 1);
    });


$(".valueS").click(function () {

    let value = $(this).attr('value');

    $('h3').append(value);

    if (counter % 2 != 0) {

        num1 += value;

    } else if (counter % 2 == 0) {

        num2 += value;
        computeResult();

    }
});

$(".operate").click(function () {

    operation = $(this).attr('value');

    if (operation != 'equal') {

        $('h3').append($(this).attr('id'));

        if (counter % 2 != 0) {

            counter += 1;

        } else {

            num1 = String(result);
            num2 = '';

        }
    } else if (operation === 'equal') {

        counter = 1;
        num1 = 0;
        num2 = 0;
        $("h3").empty();

    }


});

function computeResult() {

    result = 0;

    if (counter % 2 == 0) {

        if (operation === 'sum') {

            result = new Number(num1) + new Number(num2);

        } else if (operation === 'diff') {

            result = new Number(num1) - new Number(num2);

        } else if (operation === 'div') {

            result = new Number(num1) / new Number(num2);

        }

        else if (operation === 'mul') {

            result = new Number(num1) * new Number(num2);

        }
    }


    $('h1').text(result);

}



$('#clear').click(function () {

    counter = 1;
    num1 = 0;
    num2 = 0;
    $("h3").empty();
    $("h1").empty();

});