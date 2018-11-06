let file, url;
let link = '';
url = new URL(window.location.href);
directories = url.pathname.split('\\').pop().split('/');
file = directories.pop().replace('.html', '');

if(file === 'index') {
    document.getElementById('user-battle-nav').classList.add('active');
} else if(file === 'keywordbattle') {
    document.getElementById('keyword-battle-nav').classList.add('active');
} else if(file === 'user') {
    document.getElementById('user-nav').classList.add('active');
} else if(file === 'keyword') {
    document.getElementById('keyword-nav').classList.add('active');
}

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
        return `People 🤬 ${keyword}`;
    }
}
