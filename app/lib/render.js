const views = require("koa-view");
const path = require("path");

module.exports = views(path.join(__dirname, '../asserts'), {
    map : {
        html: 'htmling'
    }
})