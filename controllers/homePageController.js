const Service = require('../services')

const getInitContent = (res) => {
    console.log('-> controller: init');
    Service.FFServices.getInitContent(res)
}

module.exports = {getInitContent}