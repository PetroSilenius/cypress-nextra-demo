describe('features', () => {
    it('should navigate to all features pages', () => {
        cy.fixture('features').then((features) => {console.log(features)
            features.map((feature) => getFeature(feature))
        });
    })

    function getFeature(feature) {
        cy.visit(`/features/${feature.id}`);
        cy.get('h1').contains(feature.title);
    }
})
