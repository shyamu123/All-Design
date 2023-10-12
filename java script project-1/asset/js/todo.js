var nameList = [];
var numberList = [];
var emailList = [];

function create() {
    var inputName = document.getElementById("inputName").value;
    nameList.push(inputName);
    readTask();

    var inputNumber = document.getElementById("inputNumber").value;
    numberList.push(inputNumber);
    readTask();

    var inputEmail = document.getElementById("inputEmail").value;
    emailList.push(inputEmail);
    readTask();
}

function readTask() {
    var data = "";
    for (var i = 0; i < nameList.length; i++) {
        data += '<tr class="col-10 ms-5">';
        data += '<td class="col-3 p-2 " >' + nameList[i] + '</td>';
        data += '<td class="col-3 p-2 " >' + numberList[i] + '</td>';
        data += '<td class="col-3 p-2 " >' + emailList[i] + '</td>';
        
        data += '<td class="mt-4"><button class="border border-0 ms-5" onclick=UpdateTask(' + i + ')><i class="fa-sharp fa-solid fa-pen-to-square fs-5 "></i></button></td>';
        data += '<td class="" ><button id="dlt" class="ms-2 border border-0" onclick=DeleteTask(' + i + ')><i class="fa-solid fa-trash-can fs-5 text-danger "></i></button></td>';
        data += '</tr>';
    }
    document.getElementById("mytodo-tasks").innerHTML = data;
}
readTask();


function UpdateTask(item){

    document.getElementById("UpdateForm").style.display = 'block';

    document.getElementById("updateNametask").value = nameList[item];
    document.getElementById("updateNumbertask").value = numberList[item];
    document.getElementById("updateEmailtask").value = emailList[item];


    document.getElementById("UpdateForm").onsubmit = function()  {
    var updateName = document.getElementById("updateNametask").value;
    var updateNumber = document.getElementById("updateNumbertask").value;
    var updateEmail = document.getElementById("updateEmailtask").value;
        nameList.splice(item, 1, updateName.trim());
        numberList.splice(item, 1, updateNumber.trim());
        emailList.splice(item, 1, updateEmail.trim());
        readTask();
        CloseInput();
    }

}
/DELETE/
function DeleteTask(item) {
    nameList.splice(item, 1);
    numberList.splice(item, 1);
    emailList.splice(item, 1);
    readTask();

}

function CloseInput() {
    document.getElementById("UpdateForm").style.display = 'none';
}

function CLEARlist() {
    nameList.length = 0;
    numberList.length = 0;
    emailList.length = 0;
    readTask();
}