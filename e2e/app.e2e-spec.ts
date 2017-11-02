import { QalphabetPage } from './app.po';

describe('qalphabet App', () => {
  let page: QalphabetPage;

  beforeEach(() => {
    page = new QalphabetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
