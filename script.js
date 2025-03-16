// Function to add a new row
function addRow() {
    let table = document.getElementById("spreadsheet").getElementsByTagName("tbody")[0];
    let row = table.insertRow();
    let columnCount = table.rows[0].cells.length;
    
    for (let i = 0; i < columnCount; i++) {
        let cell = row.insertCell(i);
        cell.contentEditable = "true";
    }
}

// Function to add a new column
function addColumn() {
    let table = document.getElementById("spreadsheet").getElementsByTagName("tbody")[0];
    
    for (let row of table.rows) {
        let cell = row.insertCell();
        cell.contentEditable = "true";
    }
}

// Function to calculate sum of first column
function calculateSum() {
    let table = document.getElementById("spreadsheet").getElementsByTagName("tbody")[0];
    let sum = 0;
    
    for (let row of table.rows) {
        let value = row.cells[0].innerText.trim();
        if (!isNaN(value) && value !== "") {
            sum += parseFloat(value);
        }
    }
    
    alert("Sum of first column: " + sum);
}
