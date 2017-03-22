import http from 'http';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import v1 from './v1';
import config from './configs/environment';

const app = express();
app.server = http.createServer(app);

app.use(compression());
app.use(cors(config.cors));

app.use(bodyParser.json({
  limit: config.body.limit,
}));

app.use('/v1', v1(app));
app.server.listen(process.env.PORT || config.env.port);

// eslint-disable-next-line
console.log(`Started on port ${app.server.address().port}`);

export default app;
