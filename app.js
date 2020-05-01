const express = require('express')
const app = express()
const port = 1337


app.use(express.static('public'))



app.get('/', function(req,res){
	res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, () => console.log('App runinning at localhost:1337'))