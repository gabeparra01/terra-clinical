Terra.describeViewports('DataGrid', ['medium', 'huge'], () => {
  describe('with pinned columns and overflow columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/standard-data-grid');
    });

    it('should display default DataGrid', () => {
      Terra.validates.element('default', { selector: '#standard-data-grid' });
    });

    it('should display DataGrid with horizontal overflow', () => {
      browser.click('[data-cell-label="section_0-0-Column-12"]');

      Terra.validates.element('horizontal overflow', { selector: '#standard-data-grid' });
    });

    it('should display DataGrid with vertical overflow', () => {
      browser.click('[data-cell-label="section_0-29-Column-12"]');

      Terra.validates.element('vertical overflow', { selector: '#standard-data-grid' });
    });
  });

  describe('with fill disabled', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-fill-data-grid');
    });

    it('should display DataGrid with fill disabled', () => {
      Terra.validates.element('default', { selector: '#no-fill-data-grid' });
    });

    it('should display DataGrid with horizontal overflow', () => {
      browser.click('[data-cell-label="section_0-0-Column-12"]');

      Terra.validates.element('horizontal overflow', { selector: '#no-fill-data-grid' });
    });

    it('should display DataGrid with vertical overflow', () => {
      browser.click('[data-cell-label="section_0-29-Column-12"]');

      Terra.validates.element('vertical overflow', { selector: '#no-fill-data-grid' });
    });
  });

  describe('with no pinned columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-pinned-column-data-grid');
    });

    it('should display DataGrid with no pinned columns', () => {
      Terra.validates.element('default', { selector: '#no-pinned-column-data-grid' });
    });

    it('should display DataGrid with with horizontal overflow', () => {
      browser.click('[data-cell-label="section_0-0-Column-12"]');

      Terra.validates.element('horizontal overflow', { selector: '#no-pinned-column-data-grid' });
    });

    it('should display DataGrid with with vertical overflow', () => {
      browser.click('[data-cell-label="section_0-29-Column-12"]');

      Terra.validates.element('vertical overflow', { selector: '#no-pinned-column-data-grid' });
    });
  });

  describe('with no overflow columns', () => {
    beforeEach(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/no-overflow-column-data-grid');
    });

    it('should display DataGrid with no overflow columns', () => {
      Terra.validates.element('default', { selector: '#no-overflow-column-data-grid' });
    });

    it('should display DataGrid with vertical overflow', () => {
      browser.click('[data-cell-label="section_0-29-Column-0"]');

      Terra.validates.element('vertical overflow', { selector: '#no-overflow-column-data-grid' });
    });
  });

  describe('with tabbing', () => {
    before(() => {
      browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
    });

    it('tabs across selectable headers', () => {
      browser.keys(new Array(4).fill('Tab'));

      Terra.validates.element('forward-headers', { selector: '#selectable-data-grid' });
    });

    it('tabs backwards across selectable headers', () => {
      browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));

      Terra.validates.element('backward-headers', { selector: '#selectable-data-grid' });
    });

    it('tabs across selectable sections and cells', () => {
      browser.keys(new Array(128).fill('Tab'));

      Terra.validates.element('forward-sections', { selector: '#selectable-data-grid' });
    });

    it('tabs backwards selectable sections and cells', () => {
      browser.keys(['Shift'].concat(new Array(3).fill('Tab')).concat(['Shift']));

      Terra.validates.element('backward-sections', { selector: '#selectable-data-grid' });
    });

    after(() => browser.refresh());
  });

  it('should display DataGrid with cell selections', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
    browser.click('[data-cell-label="section_0-0-Column-0"]');

    Terra.validates.element('cell selections', { selector: '#selectable-data-grid' });
  });

  it('should display DataGrid with row selections', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
    browser.click('#selections-example-Pinned-Row-Row-0-Section-section_0 > *:first-child');
    browser.moveToObject('#root', 0, 0);

    Terra.validates.element('row selections', { selector: '#selectable-data-grid' });
  });

  it('should display DataGrid with column header selections', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/selectable-data-grid');
    browser.click('#selectable-data-grid [class*="HeaderCell"]:nth-child(2)');

    Terra.validates.element('column header selections', { selector: '#selectable-data-grid' });
  });

  it('should display DataGrid with subsection selections', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/subsection-data-grid');
    browser.click('#subsection-data-grid [class*="SectionHeader"]');

    Terra.validates.element('subsection selections', { selector: '#subsection-data-grid' });
  });

  it('should display DataGrid with paging', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/paged-content-data-grid');
    browser.waitForVisible('#paging-example-Pinned-Row-section_1-Row0-Section-section_1');

    Terra.validates.element('paging', { selector: '#paged-data-grid' });
  });

  it('should display DataGrid with custom row/header heights', () => {
    browser.url('/raw/tests/terra-clinical-data-grid/clinical-data-grid/custom-height-data-grid');

    Terra.validates.element('custom row/header heights', { selector: '#custom-height-data-grid' });
  });
});
