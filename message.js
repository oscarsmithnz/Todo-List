function msg(){
    document.getElementById("demo").style.display = "none";
    
    var stringOut = "";
    for (var i = 0; i < 10; i++){
        stringOut += i;
    }
    alert("what is this: " + stringOut);

    console.log("eroihgeroihjeroihjre");
}

function changeText(elementId){
    document.getElementById(elementId).innerHTML = "changed omegalol";
    console.log("text changed?");
    document.write(5+6);
}

//not sure of proper js practices, but elementid argument makes this more dynamic
//than just calling getelementbyid(textfield) in method
function addTask(elementId){
    console.log("addtask called with " + elementId);
    /**
     * @type HTMLInputElement
     */
    let text = document.getElementById(elementId).value;
    // let li = document.createElement("li");
    // li.appendChild(document.createTextNode("Four"));
    /**
     * @type HTMLUListElement
     */
    let list = document.getElementById("taskList");
    list.appendChild(document.createTextNode(text));
    // list.appendChild(li);
}

function addListener(elementId){
    var input = elementId;
}