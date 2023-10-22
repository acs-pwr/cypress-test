describe("UI Test Polri", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("uiUrl"));
    cy.wait(30);
  });
  afterEach(() => {
    cy.wait(30);
  });
  it("Motto Polri", () => {
    cy.get('[style="font-size: 3rem;"]').should("have.text", "MELINDUNGI");
    cy.get('[style="font-size: 3rem; margin-top: -35px;"]').should(
      "have.text",
      "MENGAYOMI DAN"
    );
    cy.get('[style="font-size: 3rem; margin-top: -35px"]').should(
      "have.text",
      "MELAYANI MASYARAKAT"
    );
  });
  it("Penerimaan Polri", () => {
    cy.contains("PENERIMAAN POLRI")
      .should("have.attr", "href")
      .and("include", "http://penerimaan.polri.go.id/");
  });
  it("SKCK Online", () => {
    cy.contains("SKCK ONLINE")
      .should("have.attr", "href")
      .and("include", "https://skck.polri.go.id/");
  });
  it("Lokasi Sim Keliling", () => {
    cy.contains("LOKASI SIM KELILING")
      .should("have.attr", "href")
      .and(
        "include",
        "https://korlantas.polri.go.id/category/sim-stnk-keliling/"
      );
  });
  it("Keluhan Layanan Polri", () => {
    cy.contains("KELUHAN LAYANAN POLRI")
      .should("have.attr", "href")
      .and("include", "https://dumaspresisi.polri.go.id/");
  });
});
