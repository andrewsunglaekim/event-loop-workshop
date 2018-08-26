const button = document.getElementById('demo');
button.addEventListener('click', () => {
  console.log('1');
  const p = new Promise((resolve, reject) => {
    if (Math.random() > 0) {
      console.log('2');
      resolve()
    } else {
      console.log('3');
      reject()
    }
  })
  p.then(() => {
    console.log('4');
  }).catch(() => {
    console.log('5');
  })

  console.log('set task is queued');
  setTimeout(() => {
    console.log('6');
  }, 0)


  console.log('7');
})
