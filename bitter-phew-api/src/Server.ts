import 'reflect-metadata';
import * as express from 'express';
import { json } from 'body-parser';
import { InversifyExpressServer } from 'inversify-express-utils';
import { InjectModule } from './Injector';

export class Server {
    public app: express.Application;
    private _server: InversifyExpressServer;

    constructor() {
        this._server = new InversifyExpressServer(InjectModule);

        this.app = this._server.setConfig((app) => {
            app.use(json());
        }).build();

        this.app.listen(3000, () => {
            console.log('listening on port 3000');
        });
    }
}