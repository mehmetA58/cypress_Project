describe('Password reset', () => {
    const serverId = 'abcd1234'
    const serverDomain = 'abcd1234.mailosaur.net'
    const emailAddress = 'password-reset@' + serverDomain

    it('Makes a Password Reset request', () => {
        cy.visit('https://github.com/password_reset')
        cy.title().should('equal', 'Forgot your password?')
        cy.get('#email_field').type(emailAddress)
    })

    it('Gets Password Reset email from Mailosaur', () => {
        cy.mailosaurGetMessage(serverId, {
            sentTo: emailAddress
        }).then(email => {
            expect(email.subject).to.equal('Reset your password');
            passwordResetLink = email.text.links[0].href;
        })
    })

    it('Follows the link from the email', () => {
        const validPassword = 'delighted cheese jolly cloud'

        cy.visit(passwordResetLink)
        cy.title().should('contain', 'Change your password')
        cy.get('#password').type(validPassword)
        cy.get('#password_confirmation').type(validPassword)
        cy.get('form').submit()
    })
})