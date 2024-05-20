Cypress.Commands.add('login', () => {
  cy.session(
    [Cypress.config('username'), Cypress.config('password')],
    () => {
      const loginPayload = {
        query: `mutation Logar($email: String!, $password: String!, $isRememberMe: Boolean, $forcarLogin: Boolean, $tokenTFA: String) {
            logar(email: $email, password: $password, isRememberMe: $isRememberMe, forcarLogin: $forcarLogin, tokenTFA: $tokenTFA) {
              token
              existeOutraSessao
              refreshToken
            }
          }`,
        variables: {
          email: Cypress.config('username'),
          password: Cypress.config('password'),
          isRememberMe: true,
          forcarLogin: true,
          tokenTFA: '',
        },
      };
      try {
        return cy.request({
          method: 'POST',
          url: 'graphql',
          headers: {
            'content-type': 'application/json',
          },
          body: loginPayload,
        }).then((response) => {
          const { token, refreshToken } = response.body.data.logar;
          window.localStorage.setItem('user-token', token);
          window.localStorage.setItem('refresh-token', refreshToken);
          expect(localStorage.getItem('user-token')).not.to.be.null;
          expect(localStorage.getItem('refresh-token')).not.to.be.null;
        });
      } catch (error) {
        console.error('Erro ao fazer login:', error);
      }
    },
    {
      cacheAcrossSpecs: true,
    },
  );
  cy.waitForNetworkIdlePrepare({
    method: '+(POST|GET)',
    pattern: '*',
    alias: 'calls',
    log: false,
  });

});

Cypress.Commands.add('waitRequest', (timing) => {
  try {
    cy.waitForNetworkIdle('@calls', '/graphql', timing, { log: false });
  } catch (error) { return { error }; }
});

Cypress.Commands.add('visitAndwait', (url, timing) => {
  cy.visit(url);
  try {
    cy.waitForNetworkIdle('@calls', '/graphql', timing, { log: false });
  } catch (error) { return { error }; }
});