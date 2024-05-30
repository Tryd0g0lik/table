const http = require('http');
const path = require('path');
const fs = require('fs');
const Koa = require('koa');

const logger = require("koa-logger");
const Router = require('koa-router');
const cors = require('koa2-cors');
const koaBody = require('koa-body');

const fortune = async (ctx, body = null, status = 200) => {
  if ((status === 204)) {
    const ob = ctx.request.body;

    const newData = {}
    const newDataObj = Object.create(newData);
    const k = Object.keys(ob);

    try {
      await new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, './data/products.json'), 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {
            let items = JSON.parse(data);

            const newItems = items;

            let ind = 0;
            const indArr = Array.from(Object.keys(items))
            const newInd = indArr[indArr.length - 1];
            // console.log(`/* ----^----${Number(newInd)}--------- */`);
            ind = Number(newInd)

            newDataObj.id = ind + 1;
            for (let i = 0; i < k.length; i++) {
              newDataObj[k[i]] = ob[k[i]]
            }
            newItems.push(newDataObj)
            fs.writeFile(path.resolve(__dirname, './data/products.json'), JSON.stringify(newItems), (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
            resolve();
          }
        });
      });
    } catch (err) {
      console.error('Error writing or reading file:', err);
      ctx.response.status = 500;
      ctx.response.body = 'Internal Server Error';
      return;
    }
    try {
      // let ind = 0;
      // const indArr = Array.from(Object.keys(productsFs))
      // const newInd = indArr[indArr.length - 1];
      // // console.log(`/* ----^----${Number(newInd)}--------- */`);
      // ind = Number(newInd)

      // newDataObj.id = ind + 1;
      // for (let i = 0; i < k.length; i++) {
      //   newDataObj[k[i]] = ob[k[i]]
      // }
      // productsFs.push(newDataObj)

      // await new Promise((resolve, reject) => {
      //   fs.writeFile(path.resolve(__dirname, './data/products.json'), JSON.stringify(productsFs), (err) => {
      //     if (err) {
      //       reject(err);
      //     } else {
      //       resolve();
      //     }
      //   });
      // });
    } catch (err) {
      console.error('Error writing or reading file:', err);
      ctx.response.status = 500;
      ctx.response.body = 'Internal Server Error';
      return;
    }
  }
  if ((status === 200) && (JSON.stringify(ctx.originalUrl).includes('/api/v1/all'))) {
    try {
      const items = await new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, './data/products.json'), 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {
            const items = JSON.parse(data);
            resolve(items);
          }
        });
      });
      body = JSON.stringify(items);

    } catch (err) {
      console.error('Error writing or reading file:', err);
      ctx.response.status = 500;
      ctx.response.body = 'Internal Server Error';
      return;
    }

  }
  if ((status === 200) && (JSON.stringify(ctx.originalUrl).includes('api/v1/remove/'))) {
    const ind = Number(ctx.originalUrl.split('=')[1]);
    try {
      productsFs = await new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, './data/products.json'), 'utf8', (err, data) => {
          if (err) {
            reject(err);
          } else {

            let items = JSON.parse(data);
            const newItems = items.filter(o => o.id !== ind);
            fs.writeFile(path.resolve(__dirname, './data/products.json'), JSON.stringify(newItems), (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });

            resolve(newItems);
          }
        });
      });
    } catch (err) {
      console.error('Error writing or reading file:', err);
      ctx.response.status = 500;
      ctx.response.body = 'Internal Server Error';
      return;
    }
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
  return fortune(ctx);
});

router.del('/api/v1/remove/', async (ctx, next) => {
  return fortune(ctx, 200);

});

// router.patch('/api/v1/correct/:id', async (ctx, next) => {
// });

router.post('/api/v1/add/line', async (ctx, next) => {
  const { name, job, company, location, lastlogin } = ctx.request.body;
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


  return fortune(ctx, null, 204);
});

app.use(router.routes())
app.use(router.allowedMethods());

server.listen(port, () => {
  console.log(`[Server started on port]: ${port}`);
});

