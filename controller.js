

var log_num = 0;
window.log_num;
window.log_in_table = function log_in_table() {
    // Find a <table> element with id="myTable":
    var table = document.getElementById("tbody");
    
    
    
    // add data to model.js

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(log_num - log_num_update);
    // Insert new cells (<td> elements) at the 6 positions of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

// Add some text to the new cells:
    cell1.innerHTML = arr[log_num].name;
    cell2.innerHTML = arr[log_num].address;
    cell3.innerHTML = arr[log_num].phone;
    cell4.innerHTML = arr[log_num].email;
    cell5.innerHTML = "<button onClick='Delete_visitor(this)'<i class='fa-solid fa-delete-left'></i> </button>";

    log_num += 1;
};


