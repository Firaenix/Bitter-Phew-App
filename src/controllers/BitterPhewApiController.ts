import { JSDOM } from 'jsdom';
import { Request } from 'express';
import { Controller, Get } from 'inversify-express-utils';
import { injectable, inject } from 'inversify';
import { BaseController } from './BaseController';
import { DomainParser } from '../parsers/DomainParser';
import { GenericPageParser } from '../parsers/GenericPageParser';
import { Bindings } from '../models/Bindings';
import { LookupRequest } from '../models/LookupRequest';
import { IService } from '../services/IService';

@Controller('/bitterphew')
export class BitterPhewApiController extends BaseController {
    @inject(Bindings.RealEstateAUService)
    private _reService: IService;

    @Get('/')
    private async Lookup(req: Request) {
        const lookupRequest: LookupRequest = req.query;

        return await this._reService.PerformLookups(lookupRequest);
    }

    @Get('/pages')
    private async Pages(req: Request) {
        const lookupRequest: LookupRequest = req.query;

        return await this._reService.GetPages(lookupRequest);
    }

    @Get('/postcode')
    private async PostcodeSearch(req: Request) {
        const query = req.query.query;
        return await this._reService.SearchAddress(query);
    }
}