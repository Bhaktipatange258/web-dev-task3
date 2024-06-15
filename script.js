const adduserBtn = document.getElementById('adduser');
const btnText = adduserBtn.innerText;
const usernameTextfield = document.getElementById('username');
let userArray=[];
const recordsDisplay =document.getElementById('records');
let edit_id=null;

let objstr = localStorage.getItem('users');
if(objstr!=null){
    userArray = JSON.parse(objstr);
}

console.log(userArray);
DisplayInfo();

adduserBtn.onclick=()=>{
    const name = usernameTextfield.value;
    if(edit_id!=null){
        //edit
        userArray.splice(edit_id,1,{'name':name})
        edit_id=null;
    }else{
        //insert
        userArray.push({'name':name});
    }
    
    //console.log(userArray);
    SaveInfo(userArray);
    usernameTextfield.value='';
    adduserBtn.innerText= btnText;
}

function SaveInfo(userArray){
    let str = JSON.stringify(userArray);
    localStorage.setItem('users',str);
    DisplayInfo();
}

function DisplayInfo(){
    let statment ='';
    userArray.forEach((user,i) =>{
        statment += `<tr>
        <th scope="row"> ${i+1} </th>
        <td> ${user.name} </td>
        <td> 
            <i class="btn text-white fa fa-edit btn-info mx-3" onclick='EditInfo(${i})'></i>
            <i class="btn btn-danger fa fa-trash mx-3" onclick='DeleteInfo(${i})'></i>
        </td>
      </tr>`;
    });
    recordsDisplay.innerHTML = statment;
}

function EditInfo(id){
    //alert(id);
    edit_id = id;
    usernameTextfield.value = userArray[id].name;
    adduserBtn.innerText = 'Save Changes';
}

function DeleteInfo(id){
    //alert(id);
    userArray.splice(id,1);
    SaveInfo(userArray);
}
