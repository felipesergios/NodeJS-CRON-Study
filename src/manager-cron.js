const SendEmailDaily = require('./cron/SendEmailDaily')

class ManagerCron{
    constructor(){
        this.jobs = [SendEmailDaily]
    }
    run(){
        this.jobs.forEach(jobs=>jobs.start)
    }
}

module.exports = new ManagerCron()