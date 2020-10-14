describe("Visitor can see interface", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url:
        "https://cors-anywhere.herokuapp.com/https://cors-anywhere.herokuapp.com/https://content.viaplay.se/pc-se/serier/samtliga",
      response: "fixture:viaplay_response.json",
    });
    cy.visit("/");
  });

  it("visitor can see viaplay title", () => {
    cy.get('[data-cy="header"]').should("contain", "viaplay");
  });

  it("shows first picture", () => {
    cy.get('[data-cy="picture-1"]').should("be.visible");
  });

  it("shows second picture", () => {
    cy.get('[data-cy="picture-2"]').should("be.visible");
  });
});
