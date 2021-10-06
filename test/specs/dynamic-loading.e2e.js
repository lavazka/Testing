describe('Dynamic Loading Page', () => {
    it('wait for the hidden element to show', () => {
        const btnStart = $("#start button");
        const textFinish = $("#finish h4");

        browser.url('https://the-internet.herokuapp.com/dynamic_loading/1');

        btnStart.click();

        browser.pause(10000);

        expect(textFinish.getText()).toEqual('Hello World!');
    });

});