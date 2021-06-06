const cron = require('node-cron')
 function SendEmailDaily(){
    console.log('Enviar o email diario')
}
module.exports=cron.schedule('* * * * * *',SendEmailDaily,{
    scheduled:false,
})