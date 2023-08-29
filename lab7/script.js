var selectedRow=null

function onFormSubmit(){
    if(validate()){
        var formData=readFormData();
        if(selectedRow==null)
            insertNewRecord(formData);
        else
            update(formData);
        resetForm();
    }
}

function readFormData(){
    var formData={};
    formData["fullName"]= document.getElementById("fullName").value;
    formData["id"]= document.getElementById("id").value;
    formData["salary"]= document.getElementById("salary").value;
    formData["city"]= document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data){
    var table=document.getElementById("lista-angajati").getElementsByTagName('tbody')[0];
    var newrow= table.insertRow(table.length);
    cell1=newrow.insertCell(0);
    cell1.innerHTML=data.fullName;
    cell2=newrow.insertCell(1);
    cell2.innerHTML=data.id;
    cell3=newrow.insertCell(2);
    cell3.innerHTML=data.salary;
    cell4=newrow.insertCell(3);
    cell4.innerHTML=data.city;
    cell4=newrow.insertCell(4);
    cell4.innerHTML= `<a onClick="onEdit(this)">Edit</a>
                    <a onClick="onDelete(this)"> Delete</a>`;
}

function resetForm(){
    document.getElementById("fullName").value="";
    document.getElementById("id").value="";
    document.getElementById("salary").value="";
    document.getElementById("city").value="";
    var selectedRow= null;
}

function onEdit(td){
    selectedRow= td.parentElement.parentElement;
    document.getElementById("fullName").value= selectedRow.cells[0].innerHTML;
    document.getElementById("id").value= selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value= selectedRow.cells[2].innerHTML;
    document.getElementById("city").value= selectedRow.cells[3].innerHTML;
}

function update(formData){
    selectedRow.cells[0].innerHTML=formData.fullName;
    selectedRow.cells[1].innerHTML=formData.id;
    selectedRow.cells[2].innerHTML=formData.salary;
    selectedRow.cells[3].innerHTML=formData.city;
}

function onDelete(td){
    if(confirm("Are you sure you want to delete this record?")){
        row=td.parentElement.parentElement;
        document.getElementById("lista-angajati").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate(){
    isValid=true;
    if(document.getElementById("fullName").value== ""){
        isValid=false;
        document.getElementById("fullnameValidationError").classList.remove("hide");
    } else {
        isValid=true;
        if(!document.getElementById("fullnameValidationError").classList.contains("hide"))
            document.getElementById("fullnameValidationError").classList.add("hide");
    }
    return isValid;
}

