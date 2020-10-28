$(document).ready(function () {
  // Bootstrap tooltip
  $('[data-toggle="tooltip"]').tooltip();

  // Copy proxy
  /* сохраняем текстовое поле в переменную text */
  var text = document.getElementById("inputText");

  /* сохраняем кнопку в переменную btn */
  var btn = document.getElementById("copyText");

  /* вызываем функцию при нажатии на кнопку */
  btn.onclick = function () {
    text.select();
    document.execCommand("copy");
  };

  // Burger menu
  $(".header__burger__menu").on("click", function () {
    $(this).toggleClass("active");
    $(".sidebar").toggleClass("active");
  });
});
