function validateform(){  
    var name=document.myform.name.value;  
    var password=document.myform.password.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }else if(password.length <= 6){  
      alert("Password must be at least 6 characters long.");  
      return false;  
      }  
    } 
    //----------//
    
    
let currentID = 1; 

function addRow() {
    const nameInput = document.getElementById("newName");
    const name = nameInput.value;
    const ageInput = document.getElementById("age");
    const age = ageInput.value;
    const placeInput = document.getElementById("place");
    const place = placeInput.value;
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const yearInput = document.getElementById("year");
    const year = yearInput.value;

    if (name.trim() === "") {
        alert("Please enter");
    }

    if (age.trim() === "") {
        alert("Please enter");
    }

    if (place.trim() === "") {
        alert("Please enter");
    }

    if (email.trim() === "") {
        alert("Please enter");
    }
    
    if (year.trim() === "") {
        alert("Please enter");
        return;
    }

    const table = document.getElementById("detials").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const idCell = newRow.insertCell(0);
    const nameCell = newRow.insertCell(1);
    const ageCell = newRow.insertCell(2);
    const placeCell = newRow.insertCell(3);
    const emailCell = newRow.insertCell(4);
    const yearCell = newRow.insertCell(5);
    const actionCell = newRow.insertCell(6);

    idCell.innerHTML = currentID++;
    nameCell.innerHTML = name;
    ageCell.innerHTML = age;
    placeCell.innerHTML = place;
    emailCell.innerHTML = email;
    yearCell.innerHTML = year;
    actionCell.innerHTML = '<button onclick="editRow(this)" class="editbtn">Edit</button>' +
        '<button onclick="deleteRow(this)" class="deletebtn">Delete</button>';

    nameInput.value = "";
    ageInput.value = "";
    placeInput.value = "";
    emailInput.value = "";
    yearInput.value = "";
}

function editRow(button) {
    const row = button.parentElement.parentElement;
    const nameCell = row.cells[1];
    const ageCell = row.cells[2];
    const placeCell = row.cells[3];
    const emailCell = row.cells[4];
    const yearCell = row.cells[5];

    const newName = prompt("Edit name:", nameCell.innerHTML);
    if (newName !== null) {
        nameCell.innerHTML = newName;
    }

    const newAge = prompt("Edit age:", ageCell.innerHTML);
    if (newAge !== null) {
        ageCell.innerHTML = newAge;
    }

    const newPlace = prompt("Edit place:", placeCell.innerHTML);
    if (newPlace !== null) {
        placeCell.innerHTML = newPlace;
    }

    const newEmail = prompt("Edit email:", emailCell.innerHTML);
    if (newEmail !== null) {
        emailCell.innerHTML = newEmail;
    }

    const newYear = prompt("Edit year:", yearCell.innerHTML);
    if (newYear !== null) {
        yearCell.innerHTML = newYear;
    }
}


function deleteRow(button) {
    const row = button.parentElement.parentElement;
    row.remove();
}