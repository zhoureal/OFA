var router = require('koa-router')();

router.get("/", index);

async function index(ctx){
    await ctx.render("index");
}

module.exports = router;