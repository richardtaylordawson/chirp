let searchUserOne = document.getElementById('searchUserOneButton');
let searchUserTwo = document.getElementById('searchUserTwoButton');

function searchUsers(button, query) {
    button.disabled = true
    button.textContent = 'Searching...';

    $.ajax({
        url: '../../searchusers.php',
        type: 'post',
        data: {
            query: query
        },
        dataType: 'json',
        success: (response) => {
            console.log(response);
        },
        error: () => {
            console.log('error!');
        },
        complete: () => {
            button.textContent = 'Search';
            button.disabled = false;
        }
    })
}

searchUserOne.addEventListener('click', () => {
    searchUsers(searchUserOne, document.getElementById('searchUserOneInput').value);
});

searchUserTwo.addEventListener('click', () => {
    searchUsers(searchUserTwo, document.getElementById('searchUserTwoInput').value);
});