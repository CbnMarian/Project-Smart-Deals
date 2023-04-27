

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = ()=>{
  menu.classList.add("active");
  menuBtn.classList.add("hide");
  body.classList.add("disabledScroll");
}
cancelBtn.onclick = ()=>{
  menu.classList.remove("active");
  menuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
}


function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "marianciobanu4@outlook.com",
    Password : "password",
    To : 'them@website.com',
    From : document.getElementById("email").value,
    Subject : "Contact nou din formular",
    Body : "Name" + document.getElementById("name").value
           +"<br> Email:" + document.getElementById("email").value
           +"<br> Numar de telefon:" + document.getElementById("phone").value
           +"<br> Messaj:" + document.getElementById("message").value
  }).then(
  message => alert("Mesaj trimis cu Succes")
  );

}

try {
  sendEmail();
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}
