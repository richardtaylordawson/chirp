document.getElementById('analyze-button').addEventListener('click', () => {
    const button = document.getElementById('analyze-button');

    button.disabled = true;
    button.textContent = 'Analyzing...';

    $.ajax({
        url: '/twitterai/chirp.php',
        type: 'post',
        data: {
            query: document.getElementById('searchUserOneInput').value
        },
        dataType: 'json',
        success: (response) => {
            console.log(response);
        },
        error: () => {
            console.log('error!');
        },
        complete: () => {
            button.textContent = 'Analyze';
            button.disabled = false;
        }
    });
});
