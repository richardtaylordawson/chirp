function getAnalysis(sentiment, keyword) {
    if(sentiment > 0.040) {
        return `People ❤️ ${keyword}`;
    } else if(sentiment > 0.020 && sentiment <= 0.040) {
        return `People like ${keyword} 🙂`;
    } else if(sentiment > -0.020 && sentiment <= 0.020) {
        return `People are indifferent towards ${keyword} 😐`;
    } else if(sentiment > -0.040 && sentiment <= -0.020) {
        return `People don't really like ${keyword} 😕`;
    } else {
        return `People 🤬'ing hate ${keyword}`;
    }
}

function getAnalysisBackground(sentiment) {
    if(sentiment > 0.040) {
        return 'success';
    } else if(sentiment > 0.020 && sentiment <= 0.040) {
        return 'success';
    } else if(sentiment > -0.020 && sentiment <= 0.020) {
        return 'default';
    } else if(sentiment > -0.040 && sentiment <= -0.020) {
        return 'danger';
    } else {
        return 'danger';
    }
}

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

            let emoji = getAnalysis(response.AverageSentimentScore, document.getElementById('searchUserOneInput').value);

            let background = getAnalysisBackground(response.AverageSentimentScore);

            document.getElementById('result-body').innerHTML = `
                <div class="card bg-${background} text-white mb-5">
                    <div class="card-body">
                        <h4 class="card-title text-center">
                            Results
                        </h4>
                        <h1 class="text-center">${emoji}</h1>
                    </div>
                </div>
            `;
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
