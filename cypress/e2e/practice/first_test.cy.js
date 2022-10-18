describe("My first Test",()=>{

    it('hubcomfy Login Testi',()=>{
       cy.visit("https://hubcomfy.com/")
       cy.url().should("include","hubcomfy")
       cy.title().should('eq', 'Hubcomfy Online Shopping')
       cy.get('.login > span').click()
       cy.get('#username').type("canefe.techproed@gmail.com")
       cy.get('#password').type("R-e-i-s58")
       cy.get('#signin > .woocommerce-form > .woocommerce-button').click()
       cy.get('.login > span').should('have.text', 'Sign Out')
       cy.get("input[placeholder='Search'][name='s'][aria-label='Search']").type('Bluetooth Headphone{enter}')
cy.get('.product_title.entry-title').should('have.text',"Bluetooth Headphone")
 cy.get("button[value='13182']").click()
 cy.get("a[class='cart-toggle'] span[class='cart-count']").should("have.text","1")

})
})