/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../shared/dataUtils.cy";
import HideTempActions from "../../../pageObjects/hideCardTemp/actions.cy";
import HideTempAssertions from "../../../pageObjects/hideCardTemp/assertions.cy";

const hideTempAction=new HideTempActions();
const hideTempAssertion =new HideTempAssertions();
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
    hideTempAction.openBoard(boardUrl)
  
});
When("Clicks on edit Template Card Icon",()=>{
   
    hideTempAction.clicksOnEditTemplateCardIcon()
});
When("Clicks on Hide card button",()=>{
    hideTempAction.clicksOnHideTemplateCardButton()
});
Then("The Template will be hide successfully",()=>{
   hideTempAssertion.checkCardIsExists(cardTempName)  
});
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
   cy.wait(3000)
   
})