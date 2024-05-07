export class FetchData {
  constructor(data) {
    this.data = data;
  }

  async RequestUser() {
    console.log(this.data);
    try {
      const response = await fetch(
        `https://api.github.com/users/${this.data}`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${process.env.GITHUB_KEY}`,
          },
        }
      );

      if (response.status === 200) {
        return await response.json();
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }

  async RequestRepo() {
    try {
      const response = await fetch(
        `https://api.github.com/users/${this.data}/repos`,
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
            Authorization: `token ${process.env.GITHUB_KEY}`,
          },
        }
      );

      if (response.status === 200) {
        return await response.json();
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
    }
  }
}
