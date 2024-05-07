export class Repo {
  constructor() {}

  createRepoTable(name, stargazers, watchers, forks) {
    const table = document.createElement('div');
    table.setAttribute('class', 'repo');
    table.innerHTML = `<div class="repo-title">${name}</div>
    <div class="repo-element>
    <div class="one">Stars: ${stargazers}</div>
    <div class="two">Watchers: ${watchers}</div>
    <div class="three">Forks: ${forks}</div>
    </div>`;

    return table;
  }
}
