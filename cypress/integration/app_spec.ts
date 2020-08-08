
  describe('App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
    it('Contiene el texto de prueba', () => {
      cy.get('h1').contains('Front React App, by Mayorga');
    })
    it('Prueba de fallo', () => {
      cy.get('h1').contains('Otro texto cualquiera')
    })
  })