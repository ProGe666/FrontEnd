function customSetInterval (cb, interval) {
  return setTimeout( () => {
    if (typeof cb == 'function') {
      cb()
      // Recurse
      customSetInterval(cb, interval)
    } else {
      console.error(new Error('Expecting a function as a callback'))
    }
  }, interval)
}

function resetCustomSetInterval (id) {
  clearTimeout(id)
}

function hello (){
  console.log('hello')
}
 
let id = customSetInterval(hello, 1000)

let id2 = customSetInterval('hello', 1000)