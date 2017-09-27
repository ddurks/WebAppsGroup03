function button1() {
    var box = document.getElementById("canvas");
    box.innerHTML = "Chris";
    box.style = "background-color: white";

}

function button2() {
    var box = document.getElementById("canvas");
    box.innerHTML = Date();
    
}

function button3() {
    alert("My favorite class is Web Apps!");
    
}

function button4() {
    var box = document.getElementById("canvas");
    box.innerHTML = "Width: " + screen.width + "\
    Height: " + screen.height;
}

function button5() {
    var resp = prompt("Do you want to go to my homepage?","yes/no");

    if (resp == "yes" || resp == "Yes") {
        window.location.target = '_blank';
        window.location.assign('http://sites.nd.edu/christopher-beaufils/');
    }
    
}