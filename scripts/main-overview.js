let userRank = "Iron";
let userDivision = 3;
let playtime = "3h 33m";
let matchesWon = 4;
let matchesLost = 2;
let matchesPlayed = matchesWon+matchesLost;
let kills = 60;
let deaths = 84;
let assists = 33;
let kdRatio = kills/deaths;
let kadRatio = (kills+assists)/deaths;
let damagePerRound = 102.7;
let headshots = 26;
let headHits = 35;
let totalHits = 286;
let scoreRound = 155.5;
let killsRound = 0.5;
let firstBloods = 7;
let aces = 0;
let clutches = 15;
let flawless = 4;
let mostKills = 19;

document.write(`
    <div class="title">
        <h2><i class="fa-solid fa-cubes"></i> E4: A3 Competitive Overview</h2>
        <p><i class="fa-solid fa-clock"></i> ${playtime} Play Time</p>
        <p>${matchesPlayed} Matches</p>
    </div>
    <div class="stats-highlight">
        <div class="rating">
            <div class="rating-img">
                <img src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiersv2/5.png" alt="rank_image"></img>
            </div>
            <div class="rating-txt">
                <h3>Rating</h3>
                <p>${userRank} ${userDivision}</p>
            </div>
        </div>
        <div class="kad-ratio">
            <h3>KAD Ratio</h3>
            <p>${kadRatio}</p>
        </div>
        <div class="wins-losses">
            <p>${matchesWon} W</p>
            <p>${matchesLost} L</p>
        </div>
    </div>
    <div class="boxed-stats">
        <div class="box">
            <h3>Damage/Round</h3>
            <p>${damagePerRound}</p>
        </div>
        <div class="box">
            <h3>K/D Ratio</h3>
            <p>${kdRatio}</p>
        </div>
        <div class="box">
            <h3>Headshot%</h3>
            <p>${headHits/totalHits}%</p>
        </div>
        <div class="box">
            <h3>Win %</h3>
            <p>${matchesWon/matchesPlayed}%</p>
        </div>
    </div>
    <div class="other-stats">
        <div>
            <h3>Wins</h3>
            <p>${matchesWon}</p>
        </div>
        <div>
            <h3>Kills</h3>
            <p>${kills}</p>
        </div>
        <div>
            <h3>Headshots</h3>
            <p>${headshots}</p>
        </div>
        <div>
            <h3>Deaths</h3>
            <p>${deaths}</p>
        </div>
        <div>
            <h3>Assists</h3>
            <p>${assists}</p>
        </div>
        <div>
            <h3>Score/Round</h3>
            <p>${scoreRound}</p>
        </div>
        <div>
            <h3>Kills/Round</h3>
            <p>${killsRound}</p>
        </div>
        <div>
            <h3>First Bloods</h3>
            <p>${firstBloods}</p>
        </div>
        <div>
            <h3>Aces</h3>
            <p>${aces}</p>
        </div>
        <div>
            <h3>Clutches</h3>
            <p>${clutches}</p>
        </div>
        <div>
            <h3>Flawless</h3>
            <p>${flawless}</p>
        </div>
        <div>
            <h3>Most Kills (Match)</h3>
            <p>${mostKills}</p>
        </div>
    </div>`);