const adduser = document.getElementById('adduser');
const btntext = adduser.innerText;

const username = document.getElementById('username');
const username1 = document.getElementById('username1');

const records = document.getElementById('records');

let userarray =[];
let obj = {}



let edit_id = null;
let edit_id1 = null;

let objstr = localStorage.getItem('');
let objstr1 = localStorage.getItem('');
// console.log(objstr);
if(objstr!=null){
    userarray = JSON.parse(objstr);
}
if(objstr1!=null){
    
    userarray1 = JSON.parse(objstr1);
}
displayinfo();
displayinfo1();

adduser.onclick=()=>{
    const name = username.value;

    const name1 = username1.value;


    if(edit_id!=null || edit_id1!=null){
        //edit
        userarray.splice(edit_id,1,({'name' : name}))
        edit_id = null;

        userarray1.splice(edit_id1,1,({'name' : name1}))
        edit_id1 = null;
    }
    else{
        //insert
        userarray.push({'name' : name});

        userarray1.push({'name' : name1});
    }
    saveinfo(userarray);
    username.value = '';
    adduser.innerText = btntext;

    saveinfo1(userarray1);
    username1.value = '';
    adduser.innerText = btntext;
}
// adduser.onclick=()=>{
//     const name1 = username1.value;
//     if(edit_id1!=null){
//         //edit
//         userarray1.splice(edit_id1,1,({'name' : name1}))
//         edit_id1 = null;
//     }
//     else{
//         //insert
//         userarray1.push({'name' : name1});
//         console.log("2")
//     }
//     saveinfo1(userarray1);
//     username1.value = '';
//     adduser.innerText = btntext;
// }

function saveinfo(userarray){
    let str = JSON.stringify(userarray);
    localStorage.setItem('user',str);
    displayinfo();
}
function saveinfo1(userarray1){
    let str1 = JSON.stringify(userarray1);
    localStorage.setItem('user',str1);
    displayinfo1();
}

function displayinfo(){
    let statement = '';
    let i = 0;
    userarray.forEach((user,i) =>{
    const adduserBtn = document.getElementById('adduser');
    console.log(user.name)
        statement += ` <tr>
        <td>${user.name}</td>
        <td>${user.name1}</td>
        <td><i class="fa fa-edit btn btn-info text-white mx-0 py-1 px-1" style="font-size:15px;" onclick='editinfo(${i})'></i><i class="fa fa-trash-o btn py-1 px-1" style="font-size:25px;color:red" onclick='delet(${i})'></i></td>
    </tr>`;
    });
    records.innerHTML = statement;
}
function displayinfo1(){
    let statement1 = '';
    userarray1.forEach((user1,i) =>{
const adduserBtn = document.getElementById('adduser');
        statement1 += ` <tr>
        <th scope="row">${i+1}</th>
        <td>${user1.name}</td>
        <td>${user1.name1}</td>
         <td><i class="fa fa-edit btn btn-info text-white mx-0 py-1 px-1" style="font-size:15px;" onclick='editinfo(${i})'></i><i class="fa fa-trash-o btn py-1 px-1" style="font-size:25px;color:red" onclick='delet(${i})'></i></td>
        </tr>`; 
    });
    records.innerHTML = statement1;
}

function editinfo(id){
   edit_id = id;
   username.value = userarray[id].name;
   adduser.innerText = 'Save Changes';
}
function editinfo1(id1){
    edit_id = id1;
    username1.value = userarray1[id1].name;
    adduser.innerText = 'Save Changes';
 }

function delet(id){
    userarray.splice(id,1);
    saveinfo(userarray);
    // displayinfo();
    // alert(id+1);
}
function delet1(id1){
    userarray1.splice(id1,1);
    saveinfo1(userarray1);
    // displayinfo();
    // alert(id+1);
}