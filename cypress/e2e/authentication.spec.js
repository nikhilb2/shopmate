/*

describe('Authentication Module', () =>{
  beforeEach(() => {
    cy.visit('/')
  })

  it(('shows home page'), () => {
    cy.contains('Sign In').click()
    cy.contains('Register').click({ force: true })
    cy.contains('Register').click({ force: true })
  })
})


describe('Login flow with invalid credentials', () =>{
  beforeEach(() => {
    cy.visit('/')
  })

  it(('shows home page'), () => {
    cy.contains('Sign In').click()
    cy.get('#outlined-email-input').type('fake')
    cy.get('#outlined-password-input').type('fake')
    cy.get('#signInButton').contains('Sign In').click()

  })
})

describe('Login flow with valid credentials', () =>{
  beforeEach(() => {
    cy.visit('/')
  })

  it(('shows home page'), () => {
    cy.contains('Sign In').click()
    cy.get('#outlined-email-input').type('nikhilbhatia2004@gmail.com')
    cy.get('#outlined-password-input').type('25021989')
    cy.get('#signInButton').contains('Sign In').click()
  })
})
*/
describe('Sign Up with invalid and then valid credentials', () =>{
  beforeEach(() => {
    cy.visit('/')
  })

  it(('Flow'), () => {
    cy.contains('Register').click()
    cy.get('#outlined-name-input').type('Alexander')
    cy.get('#outlined-email-input').type('invalidEmailinvalid')
    cy.get('#outlined-password-input').type('test')
    cy.get('#registerButton').contains('Register').click()
    let r = Math.random().toString(36).substring(7);
    cy.get('#outlined-email-input').type('@'+r+'.com')
    cy.get('#registerButton').contains('Register').click()
  })
})
