class updateCardTempActions{

    openBoard(url){
        cy.visit(url)

        return this;
    }
    clicksOnEditTemplateCardIcon(){
        cy.findByTestId("quick-card-editor-button").click({force:true})
        return this;
    }
    UpdateCardTemplateName(updateCardTempName){
        cy.findByTestId("quick-card-editor-card-title").type(updateCardTempName)
        return this;  
    }
    ClicksOnSaveButton(){
        cy.wait(2000)
        cy.get("[type='submit']").click()
        return this; 
    }

}export default updateCardTempActions