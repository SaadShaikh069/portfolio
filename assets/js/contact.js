$('#InputName ,#InputEmail1 ,#InputMessage').on('keyup',function(){
    let InputName = $('#InputName').val();
    let InputEmail1 = $('#InputEmail1').val();
    let InputMessage = $('#InputMessage').val();

    $('#showName').html('"'+InputName+'"');
    $('#showEmail').html('"'+InputEmail1+'"');
    $('#showMessage').html('"'+InputMessage+'"');
})
// ================ mobile responsive aside ================ 
$('.asideTrigger').on('click', function () {
    var $aside = $('aside');
    if ($aside.hasClass('active')) {
        $aside.removeClass('active').animate({ left: '-300px' }, 300, function () {
            $aside.css('display', 'none');
        });
    } else {
        $aside.addClass('active').css('display', 'block').animate({ left: '0' }, 300);
    }
})