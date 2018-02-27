import { Container } from 'inversify';
import { interfaces, TYPE } from 'inversify-express-utils';
import { Bindings } from './models/Bindings';
import { JSDOM } from 'jsdom';
import { BitterPhewParser } from './parsers/BitterPhewParser';
import { IBeerService } from './services/IBeerService';
import { BeerService } from './services/BeerService';
import { BitterPhewApiController } from './controllers/BitterPhewApiController';

const container = new Container();

// Controllers
container
  .bind<interfaces.Controller>(TYPE.Controller)
  .to(BitterPhewApiController)
  .whenTargetNamed('BitterPhewController');

// Services
container.bind<BitterPhewParser>(Bindings.BitterPhewParser).to(BitterPhewParser);

container.bind<IBeerService>(Bindings.BeerService).to(BeerService);

export default container;
export const InjectModule = container;
