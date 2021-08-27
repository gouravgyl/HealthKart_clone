function storeDetails() {

    let form = document.getElementById("signup_form");

    let username = form.username.value;
    
    let mobileno = form.mobileno.value;
    
    let password = form.password.value;


    if (username.length == 0 || mobileno.length ==0 || password.length==0) {
        let div = document.createElement("div");
        div.innerHTML = "please fill all the details";
        let alert = document.getElementById("alert");
        alert.innerHTML = null;
        alert.append(div);

        return 
    }
    
    window.location.href = "login.html";
    
    
    let location = {
        username,
        mobileno,
        password,
    };

    let arr;
    arr = localStorage.getItem("details");

    if (arr == null) {
        arr = [];
    }
    else {
        arr = JSON.parse(localStorage.getItem("details"));
    }

    arr.push(location);

    localStorage.setItem("details", JSON.stringify(arr));


    form.username.value = null;
    form.mobileno.value = null;
    form.password.value = null;

}