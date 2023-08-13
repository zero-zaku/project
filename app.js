var addButtons = document.querySelectorAll(".img-btn");

for (var i = 0; i < addButtons.length; i++) {
  addButtons[i].addEventListener("click", plusCart);
}
function plusCart(){
    var count=document.getElementById("itms").textContent;
    console.log(count);
    count++;
    document.getElementById("itms").textContent=count;
}
var cart=document.getElementById("cart");
function openCart(){
    cart.style.visibility="visible";
}
function closeCart(){
  cart.style.visibility="hidden";
}