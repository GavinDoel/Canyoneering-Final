                    /* Contact Form */
function contactClick() {
    var clickedContact = document.getElementById("contact");
    clickedContact.style.display = "block";
}


                    /* Visitor Form */

function visitorForm() {
    let log = document.getElementById("visitorForm");
    log.style.display = "block";
}
function Hide_form() {
    let log = document.getElementById("visitorForm");
    log.style.display = "none";
    event.preventDefault();
    let visit = document.getElementById("table");
    visit.style.display = "block"
}
function Hide_form_cancel() {
    alert("Are you sure you want to cancel?")
    Hide_form();
}

                    //Visitor Table
function View_table() {
    let visit = document.getElementById("table");
    visit.style.display = "block";
}
function Hide_table() {
    let visit = document.getElementById("table");
    visit.style.display = "none";
    
}

var log_num_update = 0;


   

function Delete_visitor(x,y){
    alert("Are you sure you want to delete user?");
    log_num_update += 1;
    var p=x.parentNode.parentNode;
    p.parentNode.removeChild(p);
};