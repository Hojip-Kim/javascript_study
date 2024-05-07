export class User {
  constructor() {}

  createProfile(repo, gist, followers, following) {
    const box = document.createElement('div');
    box.setAttribute('class', 'user-content');
    box.innerHTML = `<div class="one">Public Repos: ${repo}</div>
    <div class="two">Public Gists: ${gist}</div>
    <div class="three">Followers: ${followers}</div>
    <div class="four">Following: ${following}</div>`;
    return box;
  }

  createProfileTable(company, blog, location, since) {
    const table = document.createElement('table');
    table.setAttribute('class', 'profile-table');
    table.innerHTML = `<tr><td>Company: ${company}</td></tr>
    <tr><td>WebSite/Blog: ${blog}</td></tr>
    <tr><td>Location: ${location}</td></tr>
    <tr><td>Member Since: ${since}</td></tr>`;

    return table;
  }
}
