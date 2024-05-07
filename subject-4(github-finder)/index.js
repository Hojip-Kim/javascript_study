import { FetchData } from './hello/fetchData.js';
import { Repo } from './hello/repo.js';
import { User } from './hello/user.js';

const userName = document.getElementById('content');

const element = document.querySelector('.content-image');

let contentText = document.querySelector('.content-text');

let contentRepo = document.querySelector('.content-repo');

userName.addEventListener('input', async () => {
  const text = userName.value;

  const fetchingData = new FetchData(text);

  const userData = await fetchingData.RequestUser();
  const repoData = await fetchingData.RequestRepo();

  const {
    avatar_url,
    company,
    created_at,
    email,
    followers,
    following,
    html_url,
    location,
    name,
    owned_private_repos,
    public_gists,
    public_repos,
  } = userData;
  //   console.log(avatar_url);
  element.style.backgroundImage = `url("${avatar_url}")`;

  const user = new User();
  const box = user.createProfile(
    public_repos,
    public_gists,
    followers,
    following
  );

  //   console.log(box);
  const table = user.createProfileTable(
    company,
    html_url,
    location,
    created_at
  );
  contentText.textContent = '';

  contentText.appendChild(box);
  contentText.appendChild(table);
  //   contentText.appendChild(table);

  let indicesAndDates = repoData.map((item, index) => ({
    index: index,
    date: new Date(item.updated_at),
  }));
  let sorted = indicesAndDates.sort((a, b) => b.date - a.date);

  console.log(repoData[sorted[0].index]);
  console.log(repoData[sorted[1].index]);
  console.log(repoData[sorted[2].index]);

  const repo = new Repo();

  for (let i = 0; i < 3; i++) {
    const { stargazers_count, watchers_count, forks_count, name } =
      repoData[sorted[i].index];
    const node = repo.createRepoTable(
      name,
      stargazers_count,
      watchers_count,
      forks_count
    );

    contentRepo.appendChild(node);
  }
});
