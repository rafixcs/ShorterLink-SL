import { Injectable, NotFoundException } from '@nestjs/common';
import { ShoterLinkService } from 'src/shorter-link/shorter-link.service';

@Injectable()
export class RedirectService {
    constructor(private readonly urlShortenerService: ShoterLinkService) {}

    async redirectToLongUrl(shortId: string): Promise<string> {
        let longUrl: string;
        await this.urlShortenerService
            .getLongUlr(shortId)
            .then((value) => {
                longUrl = value;
            })
            .catch((error) => {
                console.error(error);
            });

        return longUrl;
    }
}
