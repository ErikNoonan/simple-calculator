//grab form values from index
//assign values to array of objects
//pass array to server
$(function() {
    $('#clear').on('click', clearInfo);
    $('#equals').on('click', submitInfo);
    $('.numGrid').on('click', 'button', getValue); // grabs the number as well as the math op clicked
    $('.operators').on('click', 'button', getOpp);
});

// object with info to be sent to server
var calcForm = {
    x: '',
    type: '',
    y: '',
};


// submit form click function and send to server
function submitInfo() {

    console.log(calcForm);
    $.ajax({
        type: 'POST',
        url: '/math/' + calcForm.type,
        data: calcForm,
        success: getCalculated
    });
};

// returns result from server
function getCalculated(answer) {
    // answer.result;
    console.log(answer.result);
    calcForm.x = answer.result + '';
    calcForm.y = '';
    calcForm.type = '';
    displayText();
}

// clears info in the form
function clearInfo() {
    calcForm.type = '';
    calcForm.x = '';
    calcForm.y = '';
    displayText();
};

// grabs the numeral of clicked button and puts it on DOM
function getValue() {
    var buttonValue = $(this).data('value');
    if (calcForm.type === '') {
        calcForm.x += buttonValue;
    } else if (calcForm.type != '') {
        calcForm.y += buttonValue;
    }
    displayText();
}

// grabs which math operator was clicked
function getOpp() {
    var oppSymbol = $(this).data('name');
    console.log(oppSymbol);
    if (calcForm.x != '') {
        calcForm.type = oppSymbol;
    }
    displayText();
}


// show user input values
function displayText() {
    $('input').val(calcForm.x + calcForm.type + calcForm.y);

}
