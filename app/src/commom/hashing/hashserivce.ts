import * as crypto from 'crypto'
import { nanoid } from 'nanoid';

export class HashService {
    static md5(value: string): string {
        const hash = crypto.createHash('md5');
        hash.update(value);
        return hash.digest('hex');
    }

    static getShortid(): string {
        return nanoid();
    }
}
