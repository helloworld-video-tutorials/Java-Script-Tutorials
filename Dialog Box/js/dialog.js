function openAlert(){
    alert("Hello, World!");
}

function openPrompt(){
    let name = prompt("Enter your name: ", "John Doe");
    console.log(`Hi ${name}`);
    // console.log("Hi " + name);
}

function openConfirm(){
    let canIDelete = confirm("Are you sure! you want to delete this item?");
    if(canIDelete){ 
        alert("Item Deleted!");
    } else {
        alert("Item not deleted!");
    }
}