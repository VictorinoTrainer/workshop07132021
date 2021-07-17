/// <reference types="cypress"/>

describe('Test 1 Prueba', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })


    it('Verificar Busqueda Correcta de Blouse', () => {
        cy.get('#search_query_top')
            .type('Blouse')
        cy.get('#searchbox > .btn')
            .click()
        cy.get('.right-block > h5 > .product-name')
            .should('contain.text', 'Blouse')
    })

    it('Verificar Busqueda Correcta de Printed Chiffon Dress', () => {
        cy.get('#search_query_top')
            .type('Printed Dress')
        cy.get('#searchbox > .btn')
            .click()
        cy.get('.last-in-line > .product-container > .right-block > h5 > .product-name')
            .should('contain.text', 'Printed Chiffon Dress')
    })
})