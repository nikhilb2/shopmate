

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
    cy.contains('Sign in').click()

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
    cy.contains('Sign in').click()
  })
})

describe('Sign Up with invalid and then valid credentials', () =>{
  beforeEach(() => {
    cy.visit('/')
  })

  it(('shows home page'), () => {
    cy.contains('Register').click()
    cy.get('#outlined-name-input').type('Alexander')
    cy.get('#outlined-email-input').type('invalidEmail@invalid')
    cy.get('#outlined-password-input').type('test')
    cy.contains('Register Now').click()
    let r = Math.random().toString(36).substring(7);
    cy.get('#outlined-email-input').type(r+'.com')
    cy.contains('Register Now').click()
  })
})
