class HideTempActions{

    openBoard(url){
        cy.visit(url)

        return this;
    }
    clicksOnEditTemplateCardIcon(){
        cy.findByTestId("quick-card-editor-button").click({force:true})
        return this;
    }
    clicksOnHideTemplateCardButton(){
        cy.wait(2000)
        cy.findByTestId("quick-card-editor-archive").click({force:true})
        return this;
    }
    
}export default HideTempActions