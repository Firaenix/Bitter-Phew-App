import { IBeerService } from './IBeerService';
import { Beer } from '../models/Beer';
import { GetBeerRequest } from '../models/GetBeerRequest';
import { injectable } from 'inversify';

@injectable()
export class BeerService implements IBeerService {
  public GetBeers(request: GetBeerRequest): Promise<Beer[]> {
    throw new Error('Method not implemented.');
  }
}
