/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../shared/dataUtils.cy";
import updateCardTempActions from "../../../pageObjects/updateNameOfTemp/actions.cy";
import updateCardTempAssertions from "../../../pageObjects/updateNameOfTemp/assertions.cy";

const updateCardTempAction= new updateCardTempActions()
const updateCardTempAssertion= new updateCardTempAssertions()
const dataUtils=new sharedDataUtils()

const boardName="My Board"
let boardUrl,boardId,listId;
const listName="MY List"
const cardTempName="MY Template Card"
const updateCardTempName="New Name Template Card"
let isTemplate=true
before(()=>{

    cy.loginToTrello()
    dataUtils.createBoard(boardName).then((response)=>{
        boardUrl=response.body.url;
        boardId=response.body.id;

        dataUtils.createList(boardId,listName)
        .then((res)=>{
            listId= res.body.id
            dataUtils.createNewCard(listId,cardTempName,isTemplate)
        }) 
    })  
})
Given("The user navigate to the board",()=>{
    // url for the board
    updateCardTempAction.openBoard(boardUrl)
});
When("Clicks on edit Template Card Icon",()=>{
    updateCardTempAction.clicksOnEditTemplateCardIcon()
    
});
When("Update name card Template in title input field",()=>{
  updateCardTempAction.UpdateCardTemplateName(updateCardTempName)
    
});
When("Clicks on Save button",()=>{
    updateCardTempAction.ClicksOnSaveButton()
    
});
Then("The update card Template will be updated successfully",()=>{
    updateCardTempAssertion.checkCardIsContainCorrectText(updateCardTempName)
   
});
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
   cy.wait(3000)
})