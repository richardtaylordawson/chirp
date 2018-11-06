document.getElementById('fight-button').addEventListener('click', () => {
    const button = document.getElementById('fight-button');

    button.disabled = true;
    button.textContent = 'Brawling...';

    $.ajax({
        url: '/twitterai/chirp.php',
        type: 'post',
        data: {
            query: document.getElementById('searchUserOneInput').value
        },
        dataType: 'json',
        success: (responseOne) => {
            $.ajax({
                url: '/twitterai/chirp.php',
                type: 'post',
                data: {
                    query: document.getElementById('searchUserTwoInput').value
                },
                dataType: 'json',
                success: (responseTwo) => {
                    let winner = '';

                    if(responseOne.AverageSentimentScore > responseTwo.AverageSentimentScore) {
                        winner = `${document.getElementById('searchUserOneInput').value} is the winner!`;
                    } else {
                        winner = `${document.getElementById('searchUserTwoInput').value} is the winner!`;
                    }

                    document.getElementById('result-body').innerHTML = winner;
                },
                error: () => {
                    console.log('error!');
                },
                complete: () => {
                    button.textContent = 'Fight';
                    button.disabled = false;
                }
            });
        },
        error: () => {
            console.log('error!');
        }
    });
});
