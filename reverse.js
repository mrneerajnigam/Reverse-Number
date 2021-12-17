
var frm = document.getElementById('form') ;

frm.onsubmit = function(){
    var user = document.getElementById("number").value;
    var preview = document.getElementById("result");

    var i, rev = 0;
    while(user !=0){
        rev = (rev*10) + (user %10);
        user = parseInt(user/10);
    }
    preview.innerHTML= rev;
    return false;

}
