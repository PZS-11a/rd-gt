console.log('hello')

let gyumolcsok = ['alma', 'körte', 'kutya', 'macska']

let container = document.getElementById('container')

for (let i = 0; i < gyumolcsok.length; i++) {
  let div = document.createElement('div')
  div.textContent = gyumolcsok[i]
  container.appendChild(div)
}
