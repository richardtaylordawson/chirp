const searchUserOne = document.getElementById('searchUserButton1');
const searchUserTwo = document.getElementById('searchUserButton2');
const fight = document.getElementById('fightButton');
let users = [];
let results = [];

function searchUsers(user, query) {
    const button = document.getElementById(`searchUserButton${user}`);

    button.disabled = true;
    button.textContent = 'Searching...';

    $.ajax({
        url: 'searchusers.php',
        type: 'post',
        data: {
            query: query
        },
        dataType: 'json',
        success: (response) => {
            console.log(response);

            response.map((profile) => {
                const card = document.createElement('div');
                card.classList.add('col-sm-6');
                card.classList.add('col-md-4');
                card.id = `@${profile.ScreenName}`;
                card.innerHTML = `
                    <div class="card mb-3 profile">
                        <div class="card-body">
                            <img src="${profile.ImageURL}" class="rounded-circle mb-3">
                            <h5 class="card-title">${profile.Name}</h5>
                            <h6 class="text-muted">@${profile.ScreenName}</h6>
                        </div>                    
                    </div>
                `;

                const container = document.getElementById(`searchUserContainer${user}`);
                container.appendChild(card);

                card.addEventListener('click', () => {
                    const profiles = [...document.getElementsByClassName('profile')];
                    users.push(card.id);
                    document.getElementById(`selectedUser${user}`).innerHTML = card.innerHTML;

                    profiles.map((profile) => {
                        profile.remove();
                    });

                    const selected = [...document.getElementsByClassName('profile')];

                    selected.map((profile) => {
                        profile.classList.remove('profile');
                    })
                });
            })
        },
        error: () => {
            console.log('error!');
        },
        complete: () => {
            button.textContent = 'Search';
            button.disabled = false;
        }
    });
}

searchUserOne.addEventListener('click', () => {
    const query = document.getElementById('searchUserInput1').value;
    searchUsers(1, query);
});

searchUserTwo.addEventListener('click', () => {
    const query = document.getElementById('searchUserInput2').value;
    searchUsers(2, query);
});

fight.addEventListener('click', () => {
    const button = document.getElementById('fightButton');
    button.disabled = true;
    button.textContent = 'Brawling...';

    $.ajax({
        url: 'chirp.php',
        type: 'post',
        dataType: 'json',
        data: {
            query: users[0]
        },
        success: (response) => {
            results[0] = response;

            $.ajax({
                url: 'chirp.php',
                type: 'post',
                dataType: 'json',
                data: {
                    query: users[1]
                },
                success: (response) => {
                    results[1] = response;

                    if (results[0].AverageSentimentScore)
                },
                error: () => {
                    console.log('error1');
                }
            })
        },
        error: () => {
            console.log('error!');
        }
    });
});