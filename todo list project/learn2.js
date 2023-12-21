//X=0 is just a way to give each item a unique key, it increments by 1 as we push items into the array
x=0;
//The initial data put in the array

const data = [
    {taskname:"Assignment1", duedate:"2003-04-24", key:x++},
    {taskname:"Assignment2", duedate:"2023-09-31", key:x++},
    {taskname:"Assignment3", duedate:"2023-08-28", key:x++},
]

//Function to diaplay a single item on the screen, each element has its own buttons
function displayItem(tasksName, tasksDate){
    const divContainer = document.createElement('div');
    divContainer.classList.add('container');

    //create taskname label
    const taskname = document.createElement('label');
    taskname.classList.add('listing');

    //create duedate label
    const duedate = document.createElement('label');
    duedate.classList.add('listing');

    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add("delete-button");

    //create update button
    const updateButton = document.createElement('button');
    updateButton.classList.add("update-button");


    document.getElementById('dis').appendChild(divContainer);
    divContainer.appendChild(taskname)
    divContainer.appendChild(duedate)
    divContainer.appendChild(deleteButton)
    divContainer.appendChild(updateButton)
    taskname.appendChild(document.createTextNode(tasksName))
    duedate.appendChild(document.createTextNode(tasksDate))
    deleteButton.appendChild(document.createTextNode("Remove"))
    updateButton.appendChild(document.createTextNode("Update"))
    //deleteButton.addEventListener('click', ()=>removeItem(tasksName))
    deleteButton.addEventListener('click', ()=>mainDelete(tasksName))
    updateButton.addEventListener('click', ()=> popupform(tasksName))
}
//This function is meant to display all the items in the array and it makes use of the function which individually outputs an element
function DisplayItems(){
    for(t of data){
        displayItem(t.taskname,t.duedate)
    }
}
//Adds items to the array
function addTask(){
    let tname = document.getElementById('myname').value;
    let tdate = document.getElementById('date').value;
    if(tname && tdate){
        data.push({taskname:tname, duedate:tdate, key:x++})
        displayItem(tname,tdate);
        document.getElementById('myname').value="";
        document.getElementById('date').value="";
    }else{
        alert("Please fill in the missing fields")
    }
    
}
//The main delete fucntion which calls other functions which help in deleteing an elemnt from the array
function mainDelete(name){
popupwarning(name)
}
function removeItem(name){
    var index = data.findIndex((person)=>{
        return person.taskname===name
    });
    document.getElementById('dis').innerHTML=""
    console.log(index);
    data.splice(index,1);
    DisplayItems();
}
//shows the warning when you click the delete button
function popupwarning(name){
    var popupdiv = document.createElement('div');
    popupdiv.classList.add('pop-up');
    var confirmDelete = document.createElement('button');
    var cancelDelete = document.createElement('button')
    document.body.appendChild(popupdiv)
    popupdiv.appendChild(confirmDelete);
    popupdiv.appendChild(cancelDelete)
    confirmDelete.appendChild(document.createTextNode("Confirm delete"))
    cancelDelete.appendChild(document.createTextNode("Cancel Delete"))
    confirmDelete.addEventListener('click', ()=>{removeItem(name); popupdiv.remove()})
    cancelDelete.addEventListener('click', ()=>popupdiv.remove()) 
}
//funvtion for update
function popupform(name){
var formdiv = document.createElement('div');
var div1 = document.createElement('div');
var inputtaskname = document.createElement('input')
inputtaskname.type='text'
inputtaskname.id = "updatedname"

var div2 = document.createElement('div');
var date = document.createElement('input')
date.setAttribute("type", "date")
var breakelement = document.createElement('br')

var divforbuttons= document.createElement('div')
var cancelUpdate = document.createElement('button')
var acceptUpdate = document.createElement('button')

formdiv.classList.add('pop-upform');
document.body.appendChild(formdiv);
formdiv.appendChild(div1)
formdiv.appendChild(breakelement)
formdiv.appendChild(div2)
formdiv.appendChild(divforbuttons);
div1.appendChild(document.createTextNode("Task Name:"))
div1.appendChild(inputtaskname)
div2.appendChild(document.createTextNode("Date:"))
div2.appendChild(date)
divforbuttons.classList.add("div-for-buttons")
divforbuttons.appendChild(cancelUpdate)
divforbuttons.appendChild(acceptUpdate) 
cancelUpdate.appendChild(document.createTextNode("Cancel"))
acceptUpdate.appendChild(document.createTextNode("Update"))
cancelUpdate.addEventListener('click', ()=>formdiv.remove())


acceptUpdate.addEventListener('click', ()=>{updateMain(name); formdiv.remove()})

}
// Main function for updating the elements and calls other auxilliary functions to help it update 
function updateMain(name){
    var index = data.findIndex((person)=>{
        return person.taskname===name
    });
    console.log(document.getElementById('updatedname').value);
    data[index].taskname=document.getElementById('updatedname').value
    document.getElementById('dis').innerHTML="";
    DisplayItems();

}








