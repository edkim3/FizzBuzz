// get values from the user. We need to get the fizz and the buzz value.

function getValues() {
    // get the user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    // parse for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    // check that the numbesr are integers
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // call fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        // call displayData
        displayData(fbArray);

    } else {
        alert("You must enter integers.");
    }
}

function fizzBuzz(fizzValue, buzzValue) {
    // init the returnArray
    let returnArray = [];
    // loop from 1 - 100
    for(let i = 1; i <= 100; i++) {

        if(i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        } else if(i % fizzValue == 0) {
            returnArray.push('Fizz');
        } else if(i % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }
    return returnArray;
    // we need to check the current in three steps
    // check to see if divisible by both 3 and 5
    // if so push 'FizzBuzz' into an array and not the number

    // check to see if divisible by fizz value 3
    // if so push 'Fizz' into an array and not the number

    // check to see if divisible by buzz value 5
    // if so push 'Buzz' into an array and not the number

    // if none then push the number into the array
}

function displayData(fbArray) {
    // loop over the array and create a tablerow for each item

    // get the table body element for each page
    let tableBody = document.getElementById("results");

    // get the template row
    let templateRow = document.getElementById("fbTemplate");

    // clear table first
    tableBody.innerHTML = "";
    
    for(let i = 0; i < fbArray.length; i += 5) {

        let tableRow = document.importNode(templateRow.content, true);

        // grab use the to put into array
        let rowCols = tableRow.querySelectorAll("td");
        rowCols[0].textContent = fbArray[i];
        rowCols[1].textContent = fbArray[i+1];
        rowCols[2].textContent = fbArray[i+2];
        rowCols[3].textContent = fbArray[i+3];
        rowCols[4].textContent = fbArray[i+4];

        tableBody.appendChild(tableRow);
    }

    // add all the rows to the table
}
