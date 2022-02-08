let counts;
function changeDef(event) {


    let inputs = document.getElementById("floatingTextarea2").value;
    counts = document.getElementById("counted");
    counts.innerHTML = parseInt(inputs.length);



}
function upercase(event) {
    let inputs = document.getElementById("floatingTextarea2").value;
    if (inputs.length > 0) {

        let text = document.getElementById("result");

        text.innerText = inputs.toUpperCase();




    }
    else {
        let error = document.getElementById("errorplate").style.display = "block";


    }


}

function Boldcontent(event) {
    let inputs = document.getElementById("floatingTextarea2").value;
    if (inputs.length > 0) {

        let text = document.getElementById("result");
        let bolder = inputs.bold();
        text.innerHTML = bolder;




    }
    else {
        let error = document.getElementById("errorplate").style.display = "block";


    }
}
function lowercase(event) {
    let inputs = document.getElementById("floatingTextarea2").value;
    if (inputs.length > 0) {

        let text = document.getElementById("result");
        let bolder = inputs.toLowerCase();
        text.innerHTML = bolder;




    }
    else {
        let error = document.getElementById("errorplate").style.display = "block";


    }
}


function capitalizecontent() {
    c = 1;
    if (c == 1) {
        let inputs = document.getElementById("floatingTextarea2").value;
        if (inputs.length > 0) {

            let text = document.getElementById("result");

            text.style.textTransform = "capitalize";
            c = 0;




        }
        else {
            let error = document.getElementById("errorplate").style.display = "block";


        }

    }
    else {
        let text = document.getElementById("result");

        text.style.textTransform = "normal";
        c = 1;

    }

}
function Clear() {
    let inputs = document.getElementById("floatingTextarea2").value;
    document.getElementById("result").style.textTransform = "normal";
    document.getElementById("result").value = " ";


    let text = document.getElementById("result");
    counts = document.getElementById("counted");
    counts.innerHTML = 0;

    text.innerHTML = " ";

}
function spcharcount() {
    let inputs = document.getElementById("floatingTextarea2").value;
    let find = prompt("Enter a Character!!");

    let m = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].toUpperCase() === find.toUpperCase()) {
            m += 1;
        }
        else {
            continue;
        }

    }
    if (m == 0) {
        let text = document.getElementById("result");
        text.innerHTML = "Sorry! " +find + " This Character is not in the Text";

    }
    else {
        let text = document.getElementById("result");

        text.innerHTML = "I found " + m + " character in this text!!";

    }

}
/************************************editor tool****************************************** */
function f1() {
    //function to make the text bold using DOM method
    document.getElementById("textarea1").style.fontWeight = "bold";
}

function f2() {
    //function to make the text italic using DOM method
    document.getElementById("textarea1").style.fontStyle = "italic";
}

function f3() {
    //function to make the text alignment left using DOM method
    document.getElementById("textarea1").style.textAlign = "left";
}

function f4() {
    //function to make the text alignment center using DOM method
    document.getElementById("textarea1").style.textAlign = "center";
}

function f5() {
    //function to make the text alignment right using DOM method
    document.getElementById("textarea1").style.textAlign = "right";
}

function f6() {
    //function to make the text in Uppercase using DOM method
    document.getElementById("textarea1").style.textTransform = "uppercase";
}

function f7() {
    //function to make the text in Lowercase using DOM method
    document.getElementById("textarea1").style.textTransform = "lowercase";
}

function f8() {
    //function to make the text capitalize using DOM method
    document.getElementById("textarea1").style.textTransform = "capitalize";
}

function f9() {
    //function to make the text back to normal by removing all the methods applied
    //using DOM method
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}

function fontsize(event) {
    let size = document.getElementById("fontsize").value;
    document.getElementById("textarea1").style.fontSize = "100%";
}

function charcount(event) {


    let inputs = document.getElementById("textarea1").value;
    counts = document.getElementById("countchar");
    counts.innerHTML = parseInt(inputs.length);



}

function saveTextAsFile(textToWrite, fileNameToSaveAs) {
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    let error = document.getElementById("errorplate").style.display = "block";
    if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    
    }
    else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
   
    }
     
    downloadLink.click();
}

function loading(){
    let load=document.getElementById('loading');
    load.style.display='none';
    load.style.transition='all 1ms';
    
    
}