//fire only if the document is ready
$(document).ready(function () {
    //fire only when an event is detected at done checkbox
    $('.ActiveCheck').change(function () {
        //obtaining values into var's for the ajax call
        var self = $(this);
        var id = self.attr('id');
        var value = self.prop('checked');

        //making the ajax call
        $.ajax({
            url: '/ToDoes/AjaxEdit',
            data: {
                id: id,
                value: value
            },
            type: 'POST',
            success: function (result) {
                $('#tableDiv').html(result);
            }
        });
    });
})