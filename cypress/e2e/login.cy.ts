describe('OrangeHRM Login', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('TC001 - Login berhasil dengan username dan password valid', () => {

    cy.get('input[name="username"]').type('Admin')

    cy.get('input[name="password"]').type('admin123')

    cy.get('button[type="submit"]').click()

    cy.url().should('include', 'dashboard')

  })

  it('TC002 - Username field ditampilkan', () => {

    cy.get('input[name="username"]')
      .should('be.visible')

  })

  it('TC003 - Password field ditampilkan', () => {

  cy.get('input[name="password"]')
    .should('be.visible')

  })

  it('TC004 - Login button ditampilkan', () => {

  cy.get('button[type="submit"]')
    .should('be.visible')

  })

  it('TC005 - Forgot Password link ditampilkan', () => {

  cy.contains('Forgot your password?')
    .should('be.visible')

  })

  it('TC006 - OrangeHRM logo ditampilkan', () => {

    cy.get('.orangehrm-login-branding img')
      .should('be.visible')

  })

  it('TC007 - Username field dapat diisi', () => {

    cy.get('input[name="username"]')
      .type('Admin')
      .should('have.value', 'Admin')

  })

  it('TC008 - Password field dapat diisi', () => {

    cy.get('input[name="password"]')
      .type('admin123')
      .should('have.value', 'admin123')

  })

  it('TC009 - Login form ditampilkan', () => {

    cy.get('form')
      .should('be.visible')

  })

  it('TC010 - Footer copyright ditampilkan', () => {

    cy.get('.orangehrm-copyright-wrapper')
      .should('contain', 'OrangeHRM')

  })

  it('TC011 - URL halaman login benar', () => {

    cy.url()
      .should('include', '/auth/login')

  })

  it('TC012 - Halaman login memiliki title Login', () => {

    cy.get('h5')
      .should('contain', 'Login')

  })

})