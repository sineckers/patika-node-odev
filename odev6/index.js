const Koa = require("koa");
const app = new Koa();

app.use(async function (ctx) {
  console.log(ctx.path)
  if ("/" == ctx.path) {
    ctx.body = "<h1>WELCOME TO INDEX</h1>";
  } if ("/contact" == ctx.path) {
    ctx.body = "<h1>WELCOME TO CONTACT</h1>";
  } else if ("/about" == ctx.path) {
    ctx.body = "<h1>WELCOME TO ABOUT</h1>";
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}.`);
});
