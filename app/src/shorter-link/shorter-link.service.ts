import { Injectable } from '@nestjs/common';
import { ShorterLinkDto } from './dto/shorter-llink.dto';
import { HashService } from 'src/commom/hashing/hashserivce';
import { ShorterLink } from './schemas/shorter-link.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ShoterLinkService {
    private urlData : ShorterLinkDto[] = [];

    constructor(@InjectModel('ShorterLink') private shorterLinkModel: Model<ShorterLink>) {}

    async shortnenUrl(longUlr: string): Promise<string> {
        const shorId = HashService.getShortid();
        
        const shortnedLink = new ShorterLinkDto(longUlr, shorId);        
        await this.saveLink(shortnedLink);

        return `http://localhost:3000/${shorId}`;
    }

    async getLongUlr(shortId: string): Promise<string> {
        let result = '';
        
        await this.shorterLinkModel
            .findOne({shortid: shortId})
            .exec()
            .then((value) => {
                result = value?.url || '';
            })
            .catch((error) => {
                console.error(error);
            });
        
        return result;
    }

    async saveLink(shorterLinkDto: ShorterLinkDto) : Promise<ShorterLink> {
        const createdShorterLink = new this.shorterLinkModel(shorterLinkDto);
        return createdShorterLink.save();
    }
}
