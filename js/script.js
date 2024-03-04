$('#send_form').on('submit', function (e) {
    e.preventDefault();
    $('#submit').attr('disabled', 'true');
    var formData = $(this).serialize();
    var googleAppsScriptUrl = 'https://script.google.com/macros/s/AKfycbw4jYnbkx8OYYK6Ww37zEZxSRZBQOtqlxri8rd6U7itl2rXri9yIFAhJ784PazbjzEg/exec';

    $.ajax({
        type: 'POST',
        url: googleAppsScriptUrl,
        data: formData,
        success: function (response) {
            alert('Application sent!')
            $('#send_form')[0].reset();
            $('#submit').removeAttr('disabled');
        },
        error: function (error) { console.error('Произошла ошибка:', error); }
    });
})

