"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
// let htmlOutput: HTMLElement | null = document.getElementById('progOutput');
// let playerTable: HTMLElement | null = document.getElementById('playerTable');
// let teamTable: HTMLElement | null = document.getElementById('teamTable');
// let leagueTable: HTMLElement | null = document.getElementById('leagueTable');
// let playerDropDown: HTMLElement | null = document.getElementById('playerMenu');
// let teamDropDown: HTMLElement | null = document.getElementById('teamMenu');
// let leagueDropDown: HTMLElement | null = document.getElementById('leagueMenu');
// let reset: HTMLButtonElement | null = document.querySelector('#reset');
var teamURL = 'https://api-football-v1.p.rapidapi.com/v2/teams/team/33';
axios_1["default"]
    .get(teamURL, {
    headers: {
        'x-rapidapi-key': '931d9b8699msh29048597dd34220p154740jsn5430bcc54bb6',
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
    }
})
    .then(function (r) {
    var teamData = r.data.api.teams[0].name;
    console.log(teamData);
})["catch"](function (error) { return console.error(error); });
var leagueURL = 'https://api-football-v1.p.rapidapi.com/v2/leagues/league/2';
// axios
//   .get(leagueURL, {
//     headers: {
//       'x-rapidapi-key': '931d9b8699msh29048597dd34220p154740jsn5430bcc54bb6',
//       'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//     }
//   }
//   )
//   .then((r: AxiosResponse) => {
//     const leagueData = r.data.api;
//     console.log(leagueData);
//     for (let i = 0; i < leagueData.length; i++) {
//       let menuItem = new HTMLOptionElement();
//       let leagueName = document.createTextNode(leagueData.leagues[i].name);
//       menuItem.appendChild(leagueName);
//       leagueDropDown?.appendChild(menuItem);
//     }
//   })
//   .catch((error: AxiosResponse) => console.error(error));
// let playerURL = 'https://api-football-v1.p.rapidapi.com/v2/players/player/253';
// axios
//   .get(playerURL, {
//     headers: {
//       'x-rapidapi-key': '931d9b8699msh29048597dd34220p154740jsn5430bcc54bb6',
//       'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
//     }
//   }
//   )
//   .then((r: AxiosResponse) => {
//     const playerNames = r.data.api;
//     for (let i = 0; i < playerNames.length; i++) {
//       let menuItem = new HTMLOptionElement();
//       let playerName = document.createTextNode(playerNames.players[i].player_name);
//       menuItem.appendChild(playerName);
//       playerDropDown?.appendChild(menuItem);
//     }
//   })
//   .catch((error: AxiosResponse) => console.error(error));
// const deleteChildren = (parent) => {
//   while (parent.firstChild) {
//     parent.removeChild(parent.firstChild);
//   }
// }
// reset?.addEventListener('click', () => {
//   deleteChildren(playerTable?.querySelectorAll('tbody'));
//   deleteChildren(teamTable?.querySelectorAll('tbody'));
// });
