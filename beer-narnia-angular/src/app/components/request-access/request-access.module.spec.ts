import { RequestAccessModule } from './request-access.module';

describe('RequestAccessModule', () => {
  let requestAccessModule: RequestAccessModule;

  beforeEach(() => {
    requestAccessModule = new RequestAccessModule();
  });

  it('should create an instance', () => {
    expect(requestAccessModule).toBeTruthy();
  });
});
