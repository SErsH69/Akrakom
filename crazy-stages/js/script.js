jQuery(function ($) {
  let totalSlides = $(".pages__url").length;
  let doneSlides = $(".pages__url:not(.pages__url--in-progress)").length;
  doneSlides = 8;
  let slideProgress = (doneSlides / totalSlides) * 100;

  if (slideProgress >= 20) {
    $(".progress-text-js").text("Дорогу осилит идущий.");
  }

  if (slideProgress >= 40) {
    $(".progress-text-js").text(
      "Чтобы дождаться конца, нужно пройти начало и середину."
    );
  }

  if (slideProgress >= 60) {
    $(".progress-text-js").text("Мы уже почти закончили.");
  }

  if (slideProgress >= 80) {
    $(".progress-text-js").text(
      "Для того, чтобы началось что-то новое, что-то должно закончиться."
    );
  }

  if (slideProgress == 100) {
    $(".fixed-progress").addClass("fixed-progress--done");
    $(".progress-bar__fill").addClass("progress-bar__fill--yum");
    $(".progress-text-js").text("Ну всё, товарищи! Фенита ля комедия!");
    $(".status-js").text("Завершён");
  }

  $(".progress-bar__fill").width(slideProgress + "%");
  $(".progress-numbers-js").text(slideProgress + "%");
});
