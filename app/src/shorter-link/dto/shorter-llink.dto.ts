
interface IShorterLinkDto {
    url: string;
    shortid: string;
    creationDate: Date;
}

export class ShorterLinkDto implements IShorterLinkDto {
    public url: string;
    public shortid: string;
    public creationDate: Date;

    constructor(url: string, short: string);
    constructor(url: string, short: string, creationDate?: Date) {
        this.url = url;
        this.shortid = short;
        this.creationDate = creationDate || new Date();
    }

}
