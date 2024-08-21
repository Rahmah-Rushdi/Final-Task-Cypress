class createCardTempAssertions{
  checkCardIsVisible() {
    cy.get("[data-testid='card-name']").eq(0).should("to.be.visible");
    return this;
  }
    
  checkCardIsContainCorrectText(expectedText) {
    cy.wait(2000)
    cy.get("[data-testid='card-name']").should("contain", expectedText);
    return this;
  }
    
 
}export default createCardTempAssertions