import { Assing2DirectivePage } from './app.po';

describe('assing2-directive App', () => {
  let page: Assing2DirectivePage;

  beforeEach(() => {
    page = new Assing2DirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
