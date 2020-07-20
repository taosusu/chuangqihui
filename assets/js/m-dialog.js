$('div.m-dialog__wrapper-footer .m-button.negative').bind('click', function(ev) {
    $(this).parents('div.m-dialog').toggle();
});