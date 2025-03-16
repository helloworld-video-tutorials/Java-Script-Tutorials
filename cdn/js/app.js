function changeText() {
    document.getElementById("demo").innerText = "Hello, JavaScript!";
}

document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});

function validateForm() {
    let name = document.getElementById("name").value;
    if (name === "") {
        alert("Name cannot be empty");
        return false;
    }
    return true;
}

function moveBox() {
    document.getElementById("box").style.transform = "translateX(100px)";
}