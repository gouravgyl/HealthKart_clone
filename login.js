function checkcredentials() {

  let form = document.getElementById("login_form");
  let mobileno = form.mobileno.value;
  let password = form.password.value;


  let arr;
  arr = JSON.parse(localStorage.getItem("details"));
var temp = false
  for (var i = 0; i < arr.length; i++) {
      if (arr[i].mobileno == mobileno && arr[i].password == password) {
          temp = true;
          break
        //   window.location.href = "cart.html"
    }
    // else {
    //     console.log("galat hai")
    //   let div = document.createElement("div");
    //   div.innerHTML = "user does not exist"
    //   let alert = document.getElementById("alert");
    //   alert.innerHTML = null;
    //   alert.append(div);
    // }
    } if (temp == true) {
        window.location.href = "cart.html"
    } else {
      let div = document.createElement("div");
      div.innerHTML = "user does not exist"
      let alert = document.getElementById("alert");
      alert.innerHTML = null;
      alert.append(div);
    }


}