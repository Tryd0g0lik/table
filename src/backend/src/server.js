const http = require('http');
const path = require('path');
const fs = require('fs');
const Koa = require('koa');

const logger = require("koa-logger");
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');
const productsFs = fs.readFileSync(path.resolve(__dirname, './data/products.json'));

const items = JSON.parse(productsFs);
let ind = 21;
// const categories = require('./data/categories.json');
// const categories = require('./data/categories.json')
// const topSaleIds = [66, 65, 73];
// const moreCount = 6;

// const itemBasicMapper = item => ({
//   id: item.id,
//   name: item.name,
//   job: item.job,
//   company: item.company,
//   location: item.location,
//   lastlogin: item.lastlogin
// });


const fortune = (ctx, body = null, status = 200) => {
  // const delay = randomNumber(1, 10) * 1000;
  if (status === 204) {
    const ob = ctx.request.body;

    const newData = {
      id: ind,
    }
    const newDataObj = Object.create(newData);
    const k = Object.keys(ob);
    for (let i = 0; i < k.length; i++) {
      newDataObj[k[i]] = ob[k[i]]
    }

    items[items.length] = newDataObj
    console.warn(`[REQ_6]: ${JSON.stringify(ob)}`);
    ind += 1
  }
  if (status === 200) {
    body = JSON.stringify(items);
  }
  const delay = 0;
  return new Promise((resolve, reject) => {


    setTimeout(() => {
      ctx.response.status = status;
      ctx.response.body = body;
      resolve();
    }, delay);
  })
}

const app = new Koa();
app.use(logger());
app.use(cors());

const server = http.createServer(app.callback());
const port = process.env.PORT || 7070;
;

app.use(koaBody({
  json: true
}));

const router = new Router();


router.get('/api/v1/all', async (ctx, next) => {
  return fortune(ctx, items);
});

// router.delete('/api/items', async (ctx, next) => {

// });

// router.patch('/api/v1/correct/:id', async (ctx, next) => {
// });

router.post('/api/v1/add/line', async (ctx, next) => {

  console.warn(`[REQ_]: ${JSON.stringify(ctx.request.body)}`);
  const { name, job, company, location, lastlogin } = ctx.request.body;
  console.warn(`[REQ_2]: ${JSON.stringify(ctx.request.body)}`);
  if (!(typeof name).includes('string')) {
    return fortune(ctx, 'Bad Request: Name', 400);
  }
  if (!(typeof job).includes('string')) {
    return fortune(ctx, 'Bad Request: Job', 400);
  }
  if (!(typeof company).includes('string')) {
    return fortune(ctx, 'Bad Request: Company', 400);
  }

  if (!(typeof location).includes('string')) {
    return fortune(ctx, 'Bad Request: Location', 400);
  }
  if (!(typeof lastlogin).includes('string')) {
    return fortune(ctx, 'Bad Request: Lastlogin', 400);
  }

  // if (!Array.isArray(items)) {
  //   return fortune(ctx, 'Bad Request: Items', 400);
  // }

  // if (!items.every(({ id, price, count }) => {
  //   if (typeof id !== 'number' || id <= 0) {
  //     return false;
  //   }

  //   if (typeof price !== 'number' || price <= 0) {
  //     return false;
  //   }

  //   if (typeof count !== 'number' || count <= 0) {
  //     return false;
  //   }
  //   return true;
  // })) {
  //   return fortune(ctx, 'Bad Request', 400);
  // }

  return fortune(ctx, null, 204);
});

app.use(router.routes())
app.use(router.allowedMethods());



server.listen(port, () => {
  console.log(`[Server started on port]: ${port}`);
});

