class HideTempAssertions{
    checkCardIsExists(cardTempName){
        cy.wait(2000)
        cy.findByTestId("list-name")
        .contains(cardTempName)
        .should('not.exist');
    }


}export default HideTempAssertions 