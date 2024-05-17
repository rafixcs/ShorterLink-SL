import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ShorterLinkDto } from './dto/shorter-llink.dto';
import { ShoterLinkService } from './shorter-link.service';
import { OriginalUrlDto } from './dto/original-url.dto';



@Controller('shorter-link')
export class ShoterLinkController {

    shorter_links : ShorterLinkDto[]

    constructor(private shorterLinkService: ShoterLinkService) {}

    @Post()
    async shortendLink(@Body() body: OriginalUrlDto): Promise<string> {        
        const shortId = await this.shorterLinkService.shortnenUrl(body.url);
        return shortId;
    }

    async getLongUrl(shortId: string): Promise<string> {        
        let result: string;
        
        await this.shorterLinkService.getLongUlr(shortId)
        .then((value) => {
            result = value;
        });

        return result;
    }
}
