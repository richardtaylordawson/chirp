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

function getAnalysis(sentiment, magnitude) {
    if(sentiment > 0.40) {
        return "😃";
    } else if(sentiment > 0.20 && sentiment <= 0.40) {
        return "🙂";
    } else if(sentiment > -0.20 && sentiment <= 0.20) {
        return "😐";
    } else if(sentiment > -0.40 && sentiment <= -0.20) {
        return "😕";
    } else {
        return "😢";
    }
}
