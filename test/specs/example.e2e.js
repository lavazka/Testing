const { it } = require('mocha');
const LoginPage = require('../../login.page');
const SecurePage = require('../../secure.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });

    it('should logout and verified logout alert messages', () => {
    const flashAlert = $('#flash');
        
        SecurePage.btnLogout.click();

        expect(flashAlert).toHaveTextContaining("You logged out of the secure area!");
    });
});


