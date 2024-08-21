/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../shared/dataUtils.cy";
import createCardTempActions from "../../../pageObjects/createCardTemp/actions.cy";
import createCardTempAssertions from "../../../pageObjects/createCardTemp/assertions.cy";


const createCardTempAction=new createCardTempActions()
const createCardTempAssertion= new createCardTempAssertions()

const dataUtils=new sharedDataUtils()

const boardName="My Board"
let boardUrl,boardId;
const cardTempName="MY Template Card"

before(()=>{

    cy.loginToTrello()
    dataUtils.createBoard(boardName).then((response)=>{
        boardUrl=response.body.url;
        boardId=response.body.id;
    })  
})
Given("The user navigate to the board",()=>{
    // url for the board
    createCardTempAction.openBoard(boardUrl)
});
When("Clicks on Template Card Icon",()=>{
   createCardTempAction.ClicksOnTemplateCardIcon()
});
When("Clicks on create Template Card button",()=>{
    createCardTempAction.ClicksOnCreateTemplateCardButton()
});
When("Types in card Template title input field",()=>{
    createCardTempAction.TypesInCardTemplateTitleInputField(cardTempName) 
});
When("Clicks on Add card Template button",()=>{
    createCardTempAction.ClicksOnAddCardTemplateButton()
});
When("Clicks on Close Icon",()=>{
    createCardTempAction.ClicksOnCloseIcon()
    
});
Then("The card Template will be created successfully",()=>{
    createCardTempAssertion.checkCardIsVisible()
    createCardTempAssertion.checkCardIsContainCorrectText(cardTempName)
});
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
   cy.wait(3000)
})