const button = document.getElementById('demo');
button.addEventListener('click', () => {
  axios.get('./data.json').then((res) => {
    console.log(res);
  })
})
