describe('Website', function() {
    it('should be alive', function() {
        browser.url('/')
        const img = $('img[src="https://static.litecart.net/storage/images/logotype_light.svg"]')
        if(!img.isExisting()){
            throw new Error ('Website should be opened, and logo displayed');
        }
    })
})

