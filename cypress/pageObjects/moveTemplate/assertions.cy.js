class MoveTempAssertions{

    checkListIsContainCorrectText(expectedText) {
        cy.wait(2000)
        cy.get("[data-testid='list-name']").should("contain", expectedText);
        return this;
    }

}export default MoveTempAssertions