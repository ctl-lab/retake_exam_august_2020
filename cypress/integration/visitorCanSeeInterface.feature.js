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
    cy.get('[data-cy="header"]').should("be.visible");
  });

  it("shows second picture", () => {
    cy.get('[data-cy="movie-Paradise Hotel"]').should("be.visible");
  });

  it("shows forth picture", () => {
    cy.get('[data-cy="movie-Hawaii Five-0"]').should("be.visible");
  });
});
