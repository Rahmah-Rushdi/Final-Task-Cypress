class DeleteCardAssertions{
    checkCardIsNotExist(expectedText) {
        cy.contains(expectedText).should('not.exist');
        return this;
    }
}export default DeleteCardAssertions