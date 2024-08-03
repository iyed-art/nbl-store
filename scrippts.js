document.addEventListener('DOMContentLoaded', () => {
    const games = [
        {
            title: 'Open Source Game 1',
            description: 'Description of Open Source Game 1',
            downloadLink: '#'
        },
        {
            title: 'Open Source Game 2',
            description: 'Description of Open Source Game 2',
            downloadLink: '#'
        },
        // Add more games here
        {
            title: 'Open Source Game 3',
            description: 'Description of Open Source Game 3',
            downloadLink: '#'
        },
        {
            title: 'Open Source Game 4',
            description: 'Description of Open Source Game 4',
            downloadLink: '#'
        }
    ];

    const gameList = document.getElementById('game-list');

    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.innerHTML = `
            <h3>${game.title}</h3>
            <p>${game.description}</p>
            <a href="${game.downloadLink}" download>Download</a>
        `;
        gameList.appendChild(gameItem);
    });
});
