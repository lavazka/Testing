const { isExportDeclaration } = require("typescript");

describe('Main Page', () => {
    it('Verify list items', () => {
        browser.url('https://the-internet.herokuapp.com/');

        const listExamples = $$("ul li");  //find elements

        expect(listExamples).toBeElementsArrayOfSize({gte: 1});
    });
});