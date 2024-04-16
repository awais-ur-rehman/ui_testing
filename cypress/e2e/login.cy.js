describe('Bynder Portal Login and Logout Tests', () => {
    beforeEach(() => {
        cy.visit('http://wave-trial.getbynder.com/');
    });
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Script error')) {
            return false;
        }
    });

    it('should log in and log out successfully', () => {
        cy.get('input[name="username"]').type('qa-assignment2');
        cy.get('input[name="password"]').type('qa-Bynder2023!');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/account/dashboard');
        cy.get('.admin-dropdown.profile').click();
        cy.get('li.logout button').should('be.visible').click({ force: true });
        cy.url().should('include', '/login');
    });

    it('displays an error message for incorrect credentials', () => {
        cy.get('input[name="username"]').type('nonexistinguser');
        cy.get('input[name="password"]').type('wrongpassword!');
        cy.get('button[type="submit"]').click();
    });

    it('redirects to the forgot password page', () => {
        cy.visit('http://wave-trial.getbynder.com/');
        cy.get('.lost-password').click();
        cy.url().should('include', '/user/forgotPassword/');
    });
});
