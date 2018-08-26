const button = document.getElementById('demo');
button.addEventListener('click', () => {
  console.log('1');
  const p = new Promise((resolve, reject) => {
    if (Math.random() > 0) {
      console.log('promise task is queued');
      setTimeout(() => {
        resolve();
      }, 0)
      console.log('2');
    } else {
      console.log('3');
      reject()
    }
  })
  p.then((response) => {
    console.log('4');
  }).catch((response) => {
    console.log('5');
  })

  console.log('set task is queued');
  setTimeout(() => {
    console.log('6');
  }, 0)


  console.log('7');
})
