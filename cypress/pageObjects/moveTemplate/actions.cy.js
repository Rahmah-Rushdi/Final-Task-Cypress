class MoveTempActions{

    openBoard(url){
        cy.visit(url)

        return this;
    }
    clicksOnEditTemplateCardIcon(){
        cy.findByTestId("quick-card-editor-button").click({force:true})
        return this;
    }
    ClicksOnMoveCardButton(){
        cy.findByTestId("quick-card-editor-move").click({force:true})
        return this;
    }
    chooseList(){
        cy.findByTestId("move-card-popover-select-list-destination").click()
    //     cy.findByTestId('list-destination')
    //   .should('contain', 'To Do'); 
        return this;
    }
    ClicksOnMoveButton(){
        cy.findByTestId("move-card-popover-move-button").click()
    }
    
}export default MoveTempActions