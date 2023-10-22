describe("API Test Reqres", () => {
  // Login
  it("Log in successfully with valid credentials", () => {
    cy.request("POST", Cypress.env("apiUrl") + "/api/login", {
      email: Cypress.env("username"),
      password: Cypress.env("password"),
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("token");
    });
  });
  // Create User
  it("Create user successfully with valid input", () => {
    cy.request("POST", Cypress.env("apiUrl") + "/api/users", {
      name: Cypress.env("name"),
      job: Cypress.env("job"),
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property("name");
      expect(response.body).to.have.property("job");
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("createdAt");
    });
  });
  // Get User
  it("Get user data from the API", () => {
    cy.request("GET", Cypress.env("apiUrl") + "/api/users").should(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("page");
        expect(response.body).to.have.property("per_page");
        expect(response.body).to.have.property("total_pages");
        expect(response.body).to.have.property("data");
      }
    );
  });
});
