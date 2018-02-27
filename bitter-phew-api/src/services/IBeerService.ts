import { Beer } from '../models/Beer';
import { GetBeerRequest } from '../models/GetBeerRequest';

export abstract class IBeerService {
  public abstract GetBeers(request: GetBeerRequest): Promise<Array<Beer>>;
}
