describe('index', () => {
    it('should display the index page', () => {
        cy.visit('/');
        cy.get('h1').contains('Nextra')
        cy.get('aside li').first().contains('Introduction')
        cy.get('footer a').first().contains('Get Started')
    });

    it('should toggle dark/light mode', () => {
        cy.get('html').should('have.class', 'null')
        cy.get('.cursor-pointer > svg').click()
        cy.get('html').should('have.class', 'dark')
        cy.get('.cursor-pointer > svg').click()
        cy.get('html').should('have.class', 'light')
    })
})
