import { JSDOM } from 'jsdom';
import { Request } from 'express';
import { controller, httpGet } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { BaseController } from './BaseController';
import { Bindings } from '../models/Bindings';
import { IBeerService } from '../services/IBeerService';
import { GetBeerRequest } from '../models/GetBeerRequest';

@controller('/bitterphew')
export class BitterPhewApiController extends BaseController {
  @inject(Bindings.BeerService) private _beerService: IBeerService;

  @httpGet('/beers/current')
  private async Lookup(req: Request) {
    const lookupRequest: GetBeerRequest = req.query;

    console.log('Hit me!');

    return await this._beerService.GetBeers(lookupRequest);
  }
}
