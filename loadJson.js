const {readFileSync}=require('fs')
var loadjson=()=>JSON.parse(readFileSync('data.json'))
var data=readFileSync('data.json')
// console.log(JSON.parse(data)['teammembers'][0])
module.exports={loadjson};