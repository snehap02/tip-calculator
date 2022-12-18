const addText = document.getElementById('para');
function newForm(){
    var text = document.forms["form1"]["personText"].value;
    if(text === ''){
        console.log("clicked")
        addText.textContent = "something";
        addText.style.color = 'red';
    }
}
