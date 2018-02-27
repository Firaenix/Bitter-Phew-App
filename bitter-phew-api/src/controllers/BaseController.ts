import { interfaces } from 'inversify-express-utils';
import { injectable } from 'inversify';

@injectable()
export class BaseController implements interfaces.Controller { }