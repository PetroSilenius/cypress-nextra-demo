describe('mdx', () => {
    it('should render data-testid in mdx', () => {
        cy.visit('/features/mdx');
        cy.get('h1').contains('MDX');
        cy.get('[data-testid="mdx-h2"]').should('be.visible');
    })

    it('should render callout emoji prop', () => {
        cy.visit('/get-started')
        cy.get('#sidebar-and-anchor-links').next().contains('💡');
    })
})
