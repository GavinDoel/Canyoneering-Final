var arr = [];
window.arr = arr;



    window.Visitor = class Visitor {
    constructor(name, address, phone, email, id, check_box,comment) {
    this.name = name;
    this.address= address;
    this.phone = phone;
    this.email = email;
    this.id = id;
    this.check_box = check_box;
    this.comment = comment;
    
    }
    
    // add array of constructor to arr
    Add_to(){
        var formObject =  {
                "name": this.name,
                "address": this.address,
                "phone": this.phone,
                "email": this.email,
                "ID": this.id,
                "checkbox": this.check_box,
                "comment": this.comment
                };
        arr.push(formObject);
        
    }

    // get funtions
    Full_name(){
        return this.name;
    }
    Address(){
        return this.address;
    }
    Phone(){
        return this.phone;
    }
    Email(){
        return this.email;
    }
    Id(){
        return this.id;
    }

}
var num_in = 0
window.Read_data = function Read_data() {
    var table = document.getElementById("tbody");
    var name = $("#first-name").val();
    var l_name = $('#last-name').val();
    var address = $('#address').val();
    var city = $('#city').val();
    var state = $('#state').val();
    var zip = $('#zip').val();
    var email = $('#email_form').val();
    var phone = $('#phone').val();
    var id = num_in;
    var google_check = $('#google').is(":checked");
    var friend_check = $('#friend').is(":checked");
    var news_check = $('#newspaper').is(":checked");
    var check_boxs = {google_check,friend_check,news_check};
    var comment = $('#comment').val();
    // Insert into Class constructor
    let new_v = new Visitor(name +' ' +l_name, address+'<br>'+city +', '+state+ ', '+ zip, phone, email, id, check_boxs,comment);
    // Call class method to insert into global array;
    new_v.Add_to();
    num_in += 1;
}


