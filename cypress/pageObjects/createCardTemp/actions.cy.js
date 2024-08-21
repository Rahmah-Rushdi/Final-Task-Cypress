class createCardTempActions{

    openBoard(url){
        cy.visit(url)

        return this;
    }
    ClicksOnTemplateCardIcon(){
        cy.findByTestId("TemplateCardIcon").first().click()
        return this;
    }
    ClicksOnCreateTemplateCardButton(){
        cy.findByTestId("create-new-template-card-button").click()
        return this;  
    }
    TypesInCardTemplateTitleInputField(cardTempName){
        cy.findByTestId("create-template-card-composer").type(cardTempName)
        return this;  
    }
    ClicksOnAddCardTemplateButton(){
        cy.findByTestId("new-template-card-submit-button").click()
        return this; 
    }
    ClicksOnCloseIcon(){
        cy.wait(3000)
        cy.findByTestId("CloseIcon").first().click({force:true})
        return this;
    }
    
}export default createCardTempActions