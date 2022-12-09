const endPoint = {
    method: "GET",
    headers: {
        "Content-Type": "application/vnd.github.v3+json",
        Accept: "application/vnd.github.v3+json",
    },
    body: JSON.stringify({
        "name": "octocat",
        "owner": "Murigi"
    })
}

fetch("https://api.github.com/users/octocat/repos")
   .then(res => res.json())
   .then(data => {
        if (data.message) {
            console.log(data.message)

   }
})
  .catch(err => console.log(err))