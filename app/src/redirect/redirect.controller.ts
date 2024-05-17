import { Get, Controller, Param, Redirect, Res, HttpException, HttpStatus } from '@nestjs/common';
import { RedirectService } from './redirect.service';
import { Response } from 'express';

@Controller()
export class RedirectController {

    constructor(private redirectService: RedirectService) {}

    @Get(':shortId')
    //@Redirect()
    async redirectToLongUrl(@Param('shortId') shortId: string, @Res() res: Response) {
        const longUrl = await this.redirectService.redirectToLongUrl(shortId);
        if(longUrl === '')
        {
            throw new HttpException('shortid not found', HttpStatus.NOT_FOUND);
        }
        
        console.log(`Redirecting to http://${longUrl}`);
        res.redirect(longUrl);
    }
}
