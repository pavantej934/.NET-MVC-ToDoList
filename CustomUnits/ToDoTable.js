$(document).ready(function () {
    $.ajax({
        url: '/ToDoes/ToDoTable',
        success: function (result) {
            $('#tableDiv').html(result);
        }
    })
})