import { MapaPage } from './app.po';

describe('mapa App', () => {
  let page: MapaPage;

  beforeEach(() => {
    page = new MapaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
