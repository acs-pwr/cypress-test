describe("API Test 2", () => {
  it("should get user data from the API", () => {
    // Send a GET request to the API endpoint
    cy.request("GET", "https://jsonplaceholder.typicode.com/users/1").should(
      (response) => {
        // Assert the response status code is 200 (OK)
        expect(response.status).to.eq(200);

        // Assert the response body contains the expected data
        expect(response.body).to.have.property("id", 1);
        expect(response.body).to.have.property("name", "Leanne Graham");
        expect(response.body).to.have.property("username", "Bret");
      }
    );
  });
  it("Should log in successfully with valid credentials", () => {
    cy.request("POST", Cypress.env("apiUrl") + "/api/login", {
      email: Cypress.env("username"),
      password: Cypress.env("password"),
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("token");
    });
  });
});
