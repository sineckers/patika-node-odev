if (!process.argv[2]) return console.log("Kullanım: node index.js <yaricap>")
let yaricap = process.argv[2]
let alan = (Math.PI * (yaricap*yaricap)).toFixed(2)
console.log(`Yarıçapı ${yaricap} olan dairenin alanı: ${alan}`)
