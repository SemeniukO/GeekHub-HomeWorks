(function ($) {
    $.fn.mySimplePlugin = function (options) {
        var setting={opacity:"0",classAdd:"checkBoxEmpty"};
        this.each(function () {
            if (options){ $.extend(setting,options);}
            $(this).css('opacity', setting.opacity);
            $(this).parent().addClass(setting.classAdd)
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
$('[type="radio"]').mySimplePlugin({opacity:"0",classAdd:"radioEmpty"});