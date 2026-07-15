describe('OrangeHRM Login with Intercept', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  })

  it('TC001 - Login berhasil dengan username dan password valid', () => {

    cy.intercept('GET', '**/core/i18n/messages').as('messages')

    cy.get('input[name="username"]').type('Admin')

    cy.get('input[name="password"]').type('admin123')

    cy.get('button[type="submit"]').click()

    cy.wait('@messages')

    cy.url().should('include', 'dashboard')

  })

  it('TC002 - Dashboard Time at Work berhasil dimuat', () => {

  cy.intercept('GET', '**/api/v2/dashboard/employees/time-at-work*').as('timeAtWork')

  cy.get('input[name="username"]').type('Admin')
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.wait('@timeAtWork')

  cy.url().should('include', 'dashboard')

  })

  it('TC003 - Dashboard Action Summary berhasil dimuat', () => {

  cy.intercept('GET', '**/api/v2/dashboard/employees/action-summary').as('actionSummary')

  cy.get('input[name="username"]').type('Admin')
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.wait('@actionSummary')

  cy.url().should('include', 'dashboard')

  })

  it('TC004 - Dashboard Shortcuts berhasil dimuat', () => {

  cy.intercept('GET', '**/api/v2/dashboard/shortcuts').as('shortcuts')

  cy.get('input[name="username"]').type('Admin')
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.wait('@shortcuts')

  cy.url().should('include', 'dashboard')

  })

  it('TC005 - Dashboard Feed berhasil dimuat', () => {

  cy.intercept('GET', '**/api/v2/buzz/feed*').as('feed')

  cy.get('input[name="username"]').type('Admin')
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.wait('@feed')

  cy.url().should('include', 'dashboard')

  })

  it('TC006 - Dashboard Leaves berhasil dimuat', () => {

  cy.intercept('GET', '**/api/v2/dashboard/employees/leaves*').as('leaves')

  cy.get('input[name="username"]').type('Admin')
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.wait('@leaves')

  cy.url().should('include', 'dashboard')

  })

  it('TC007 - Dashboard Subunit berhasil dimuat', () => {

  cy.intercept('GET', '**/api/v2/dashboard/employees/subunit').as('subunit')

  cy.get('input[name="username"]').type('Admin')
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.wait('@subunit')

  cy.url().should('include', 'dashboard')

  })

  it('TC008 - Dashboard Locations berhasil dimuat', () => {

  cy.intercept('GET', '**/api/v2/dashboard/employees/locations').as('locations')

  cy.get('input[name="username"]').type('Admin')
  cy.get('input[name="password"]').type('admin123')
  cy.get('button[type="submit"]').click()

  cy.wait('@locations')

  cy.url().should('include', 'dashboard')

  })
  
})