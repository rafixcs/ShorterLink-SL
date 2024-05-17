import { Test, TestingModule } from '@nestjs/testing';
import { ShoterLinkService } from './shorter-link.service';

describe('ShoterLinkService', () => {
  let service: ShoterLinkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoterLinkService],
    }).compile();

    service = module.get<ShoterLinkService>(ShoterLinkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
