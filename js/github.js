let git = "https://api.github.com/users";

window.fetch(git)
  .then((data) => {
    data
      .json()
      .then((gitusers) => {
        let output = [];
        for (let user of gitusers) {
          output += `
        <div>
            <img src="${user.avatar_url}" />
            <h1>user : ${user.login}</h1>
        </div>`;
        }
        document.getElementById("template").innerHTML = output;
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err))
