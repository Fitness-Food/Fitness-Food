const Service = require('../services')

const getInitContent = (res) => {
    console.log('-> controller: init');
    Service.FFServices.getInitContent(res)
}

const getMealsContent = (res) => {
    console.log('-> controller: meals content');
    Service.FFServices.getMealsContent(res)
}

const getPlansContent = (res) => {
    console.log('-> controller: meal plans content');
    Service.FFServices.getPlansContent(res)
}

module.exports = {
    getInitContent,
    getMealsContent,
    getPlansContent
}