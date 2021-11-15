describe('search component', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('input[type=search]:visible').as('searchInput');
        cy.get('@searchInput').should('be.visible');
    })

    it('renders search field', () => {
        cy.get('@searchInput').type('nextra');
        cy.get('@searchInput').should('have.value', 'nextra');
    });

    it('navigates to search result', () => {
        cy.get('@searchInput').type('MDX{enter}');
        cy.url().should('include', '/features/mdx');
        cy.get('h1').contains('MDX');
    })
    it('focuses search field on key shortcut', () => {
        cy.get('body').type('{cmd} /');
        cy.get('@searchInput').focused();
    })
})
