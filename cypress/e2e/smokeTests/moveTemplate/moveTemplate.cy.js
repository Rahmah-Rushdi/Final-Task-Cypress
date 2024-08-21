/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../shared/dataUtils.cy";
import MoveTempActions from "../../../pageObjects/moveTemplate/actions.cy";
import MoveTempAssertions from "../../../pageObjects/moveTemplate/assertions.cy";

const moveTempAction =new MoveTempActions()
const moveTempAssertions= new MoveTempAssertions()
const dataUtils=new sharedDataUtils()

const boardName="My Board"
let boardUrl,boardId,listId;
const listName="MY List"
const cardTempName="MY Template Card"

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
    moveTempAction.openBoard(boardUrl)
  
});
When("Clicks on edit Template Card Icon",()=>{
   
    moveTempAction.clicksOnEditTemplateCardIcon()
});
When("Clicks on Move card button",()=>{
  moveTempAction.ClicksOnMoveCardButton()  
});
When("Choose list",()=>{
    moveTempAction.chooseList()
    
});
When("Clicks on Move button",()=>{
    moveTempAction.ClicksOnMoveButton()
    
});
Then("The Move Template To Any List will be moved successfully",()=>{
    moveTempAssertions.checkListIsContainCorrectText(listName)
   
});
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
   cy.wait(3000)
})