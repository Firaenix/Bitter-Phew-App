import { Server } from './Server';
import * as serverless from 'serverless-http';

const server = new Server();

module.exports.handler = serverless(server.app);