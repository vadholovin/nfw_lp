(function($){
  $(document).ready(function() {

    $('#application').on('mousedown', function(e) {
      e.preventDefault();
      $('#subject').val("Оставить заявку");
    });

    $('#question').on('mousedown', function(e) {
      e.preventDefault();
      $('#subject').val("Вопрос по курсу");
    });

    $("#main-form").submit(function(e){
      e.preventDefault();
      var name  = $('#name').val(),
          email  = $('#email').val(),
          message  = $('#message').val(),
          subject = $('#subject').val();


      var proceed = true;

      if(name == "" && email == "" && message == "") {
        $(".modal-box").removeClass("is-hidden");
        $(".modal-content__title").html("Ошибка!");
        $(".modal-content__text").html("Поля не заполнены.");
        proceed = false;
      } else if (name == "") {
        $(".modal-box").removeClass("is-hidden");
        $(".modal-content__title").html("Ошибка!");
        $(".modal-content__text").html("Забыли указать имя.");
        proceed = false;
      } else if (email == "") {
        $(".modal-box").removeClass("is-hidden");
        $(".modal-content__title").html("Ошибка!");
        $(".modal-content__text").html("Забыли указать email");
        proceed = false;
      } else if (message == "") {
        $(".modal-box").removeClass("is-hidden");
        $(".modal-content__title").html("Ошибка!");
        $(".modal-content__text").html("Текст сообщения обязателен");
        proceed = false;
      }

      if(proceed){
        $.ajax({
          url : "feedback.php",
          type: "POST",
          data: $("#main-form").serialize(),
        }).done(function(res) {
          answer(res);
        });
      }
    });

    function answer(res) {
      if(res == "error"){
        $(".modal-box").removeClass("is-hidden");
        $(".modal-content__title").html("Ошибка отправки!");
        $(".modal-content__text").html("Попробуйте снова.");
      }
      if(res == "done"){
        $(".modal-box").removeClass("is-hidden");
        $(".modal-content__title").html("Отправлено!");
        $(".modal-content__text").html("");
      }
    }
  });
})(jQuery);