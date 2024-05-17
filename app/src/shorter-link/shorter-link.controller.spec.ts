import { Test, TestingModule } from '@nestjs/testing';
import { ShoterLinkController } from './shorter-link.controller';

describe('ShoterLinkController', () => {
  let controller: ShoterLinkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoterLinkController],
    }).compile();

    controller = module.get<ShoterLinkController>(ShoterLinkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
