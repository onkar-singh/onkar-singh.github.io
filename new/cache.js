let url='https://sheets.googleapis.com/v4/spreadsheets/1EyGFuUFh4Yq0rl2bfFssdRMnyRiRlNlsTl-zCoYAd3k/values/0x!3:3?key=AIzaSyAlGUI2hKuNq7LgZQlnc0oAbaHuNj0e340'
fetch(url, { cache: "force-cache" })
  .then((res) => res.json())
.then((res) => console.log(res))