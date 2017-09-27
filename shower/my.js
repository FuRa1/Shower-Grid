$( document ).ready(function() {
    let $container = $('.grid-container--6-auto-fill');
    let $input = $('#containerSize');
    let $containerWidth = $container.css('width');
    $input.on('change', function () {
        let value = parseFloat($( this ).val())*100;
        if(value > 400 && value < 900){
            $container.css('width', value+'px') ;
        }
    })
});

