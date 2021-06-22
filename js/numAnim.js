$(document).ready(function () {
  let show = true;
  const countbox = ".about";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
    const w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
    const e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
    const w_height = $(window).height(); // Высота окна браузера
    const d_height = $(document).height(); // Высота всего документа
    const e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if (
      w_top + 500 >= e_top ||
      w_height + w_top == d_height ||
      e_height + e_top < w_height
    ) {
      $(".about__num").css("opacity", "1");
      $(".about__num").spincrement({
        thousandSeparator: " ",
        duration: 2000,
      });
      show = false;
    }
  });
});
