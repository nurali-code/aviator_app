$('#send_form').on('submit', function (e) {
    e.preventDefault();
    var formData = $(this).serialize();
    var googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbwAjIYCrK5WqgYLeBwMxhR0ba-dnLv61nxcFfByIb22jvTdwbKGmanLahSfqUEOemgD/exec';

    console.log(formData);

    $.ajax({
        type: 'POST',
        url: googleAppsScriptUrl,
        data: formData,
        success: function (response) {
            $(formParet).find('.btn').removeAttr('disabled');
            nextTab(formParet);
            console.log(response);
        },
        error: function (error) { console.error('Произошла ошибка:', error); }
    });
})

