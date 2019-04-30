const msg = 'I const'
let msg1 = 'I let'
import utils from './utils.js'
import "@babel/polyfill"
utils.msg(msg)

function api () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.random()
      if (num > 0.5) {
        resolve(num)
      } else {
        reject(num)
      }
    }, 3000)
  })
}
async function getApi () {
  let res = 0
  try {
    res = await api()
  } catch (err) {
    console.log('err:', err)
  }
  console.log('res:', res)
}
getApi()