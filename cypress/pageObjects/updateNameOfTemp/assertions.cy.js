class updateCardTempAssertions{
    checkCardIsContainCorrectText(expectedText) {
        cy.wait(2000)
        cy.get("[data-testid='card-name']").should("contain", expectedText);
        return this;
    }


}export default updateCardTempAssertions