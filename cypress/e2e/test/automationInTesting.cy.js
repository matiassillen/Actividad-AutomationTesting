describe("TEST", { testIsolation: false }, () => {
  it("Verificar que la información del hotel esté presente en la página", () => {
    cy.visit("https://automationintesting.online/");

    cy.get("p").contains("Shady Meadows B&B").should("be.visible");
    cy.get("p").find("span.fa.fa-home").should("be.visible");

    cy.get("p")
      .contains("The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S")
      .should("be.visible");

    cy.get("p").contains("012345678901").should("be.visible");
    cy.get("p").find("span.fa.fa-phone").should("be.visible");

    cy.get("p").contains("fake@fakeemail.com").should("be.visible");
    cy.get("p").find("span.fa.fa-envelope").should("be.visible");
  });

  it("Verificar que haya al menos una imagen visible", () => {
    cy.get('img[src="/images/rbp-logo.jpg"]').should("be.visible");
    cy.get('img[src="/images/room2.jpg"]').should("be.visible");
  });

  it("Verificar que el texto de la descripción del hotel sea el esperado", () => {
    cy.get(".col-sm-10 > p").should(
      "have.text",
      "Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place."
    );
  });
});
