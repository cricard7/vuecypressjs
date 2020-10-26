// https://docs.cypress.io/api/introduction/api.html

// hot reloading by running headless
//https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress
//https://stackoverflow.com/questions/49646174/cypress-automatically-run-all-tests-in-browser-with-hot-reload


describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})

// Following Test Driven Development in Vue with Cypress by Josh Justice
//https://www.youtube.com/watch?v=MU7K_V6rFjM

describe('Create a message', ()=>{

  it('Displays the message in the list on the about page', () =>{
    cy.visit('/about');

    cy.get('[data-test="messageText"]')
    .type('New Message');

    cy.get('[data-test="saveButton"]')
    .click();

    cy.get('[data-test="messageText"]')
    .should('have.value', '');

    cy.contains('New Message');

  })


})