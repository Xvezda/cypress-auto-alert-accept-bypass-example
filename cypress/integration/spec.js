it('ssr',
  /* and also breaks cypress's auto accept alert behavior... */
  () => {
    cy.request('/index.html')
      .its('body')
      .then(html => {
        cy.document()
          .invoke({log: false}, 'write', html);
      });

    cy.document()
      .its('body')
      .should('contain', 'hello');
  }
);

it('alert', () => {
  cy.visit('/index.html');
  const stub = cy.stub();
  cy.on('window:alert', stub);
  cy.wrap(stub).should('be.calledWith', 'boo');
});