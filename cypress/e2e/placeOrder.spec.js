/*
describe('Add to Cart with out selecting attributes', () =>{
  beforeEach(() => {
    cy.visit('/')
  })

  it(('Flow'), () => {
    cy.visit('/category?depId=1')
    cy.wait(1000)
    cy.contains('Thomas').click({force:true})
    cy.wait(1000)
    cy.get('#addToCart').click()

  })

describe('Add to Cart with selecting attributes', () =>{
  beforeEach(() => {
    cy.visit('/')
  })

  it(('Flow'), () => {
    cy.visit('/category?depId=1')
    cy.wait(1000)
    cy.contains('Thomas').click({force:true})
    cy.get('#Red').click()
    cy.get('#White').click()
    cy.get('#Yellow').click()
    cy.get('#XL').click()
    cy.get('#XXL').click()
    cy.get('#L').click()
    cy.get('#M').click()
    cy.get('#addToCart').click()
    cy.wait(1000)

  })
})
})
*/

describe('Add to Cart with selecting attributes with multiple quantities', () =>{
  beforeEach(() => {
    cy.visit('/')
  })

  it(('Flow'), () => {
    cy.visit('/product?prodId=33')
    cy.get('#Red').click()
    cy.get('#White').click()
    cy.get('#Yellow').click()
    cy.get('#XL').click()
    cy.get('#XXL').click()
    cy.get('#L').click()
    cy.get('#M').click()
    cy.get('#plus-minus').contains('+').click({force:true})
    cy.get('#plus-minus').contains('+').click({force:true})
    cy.get('#plus-minus').contains('+').click({force:true})
    cy.get('#plus-minus').contains('+').click({force:true})
    cy.get('#plus-minus').contains('-').click({force:true})
    cy.get('#plus-minus').contains('-').click({force:true})
    cy.get('#addToCart').click()
    cy.wait(1000)
    cy.get('#shoppingCartPopper').click()
        cy.wait(1000)
    cy.get('#checkout').contains('Checkout').click()
    cy.get('#checkOutWithoutUser').contains('Sign In').click()
    cy.get('#outlined-email-input').type('nikhilbhatia2004@gmail.com')
    cy.get('#outlined-password-input').type('25021989')
    cy.get('#signInButton').contains('Sign In').click()
    cy.get('#checkout').contains('Checkout').click()

  })
})

/*
describe('Add to Cart with selecting attributes with multiple quantities', () =>{
  beforeEach(() => {
    cy.visit('/')
  })

  it(('Flow'), () => {

    cy.get('#shoppingCartPopper').click()

  })
})
*/
