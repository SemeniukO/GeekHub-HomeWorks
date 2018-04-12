(function ($) {
    $.fn.mySimplePlugin = function () {

        this.each(function () {
            $(this).css('opacity', '0');
            $(this).parent().addClass("checkBoxEmpty")
        });

        this.click(function () {
            if ($(this).parent().hasClass("checkBoxEmpty")) {
                $(this).parent().click(function () {
                    $(this).removeClass("checkBoxEmpty").addClass('checkBoxFull');
                    $(this).children([0]).attr( "checked",true);

                })

            }
            if ($(this).parent().hasClass("checkBoxFull")) {
                $(this).parent().click(function () {
                    $(this).removeClass("checkBoxFull").addClass('checkBoxEmpty');
                    $(this).children([0]).attr( "checked",false);
                })
            }
        });
        return this;
    };
})(jQuery);

(function ($) {
    $.fn.myRadio = function () {

        this.each(function () {
            $(this).css('opacity', '0');
            $(this).parent().addClass("radioEmpty");

        });

        this.click(function () {
            if ($(this).parent().hasClass("radioEmpty")) {
                $(this).parent().click(function () {
                    $(".radioFull").each(function () {
                        $(this).removeClass("radioFull").addClass('radioEmpty');
                    });
                    $(this).removeClass("radioEmpty").addClass('radioFull');
                    $(this).children([0]).attr( "checked",true);
                })
            }
        });
        return this;
    };
})(jQuery);

$('[type="checkbox"]').mySimplePlugin();
$('[type="radio"]').myRadio();