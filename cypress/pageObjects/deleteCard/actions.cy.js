class DeleteCardActions{

    openBoard(url){
        cy.visit(url)

        return this;
    }
    clickOnEditACardIcon(){
        cy.wait(3000)
        cy.findByTestId("quick-card-editor-button").click({force:true})
        return this;
    }

    clickOnDeleteCardButton(){
        cy.findByTestId("quick-card-editor-archive").click()
        return this;
    }

}export default DeleteCardActions