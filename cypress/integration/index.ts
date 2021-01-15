describe('index', () => {
  it('displays a sketch canvas', () => {
    cy.visit('/');
    cy.get('[data-testid="sketch"]').should('be.visible');
  });
});

export {};
