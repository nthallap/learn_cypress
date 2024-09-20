// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('set_access_token', (cli_id, cli_sec) => {
    cy.request({
    method : 'POST',
    url: 'token_url',
    headers: {
            "Content-Type": "application/x-www-form-urlencoded",
    },
    body: {
    grant_type: 'client_credentials',
    client_id: cli_id,
    client_secret: cli_sec,
    },
    }).then((response) =>{
         cy.log(response.body.access_token)
         cy.window().then((win) => {
            win.sessionStorage.setItem("token", response.body.access_token);
         });
         cy.log("session storage set successful");
    })
        })

Cypress.Commands.add("clearSessionStorage", () => {
  cy.window().then((win) => {
    win.sessionStorage.clear();
    cy.log("session storage cleared");
  });
});


Cypress.Commands.add("cookiesClear", () => {
  cy.getCookies().then((cookies) => {
    cookies.forEach((cookie) => {
      cy.clearCookie(cookie.name);
      cy.log("Cookies cleared");
    });
  });
});


Cypress.Commands.add("closeBrowser", () => {
  cy.window().then((win) => {
    win.close();
  });
});