const express = require('express')
const cron = require('node-cron') //Import Module NODE-CRON
const app = express()

app.listen(3333,()=>{
    console.log('listening on 3333')
    cron.schedule('*/5 * * * * *',()=>{console.log('the cron is running')}) // Expression for running the cron
})