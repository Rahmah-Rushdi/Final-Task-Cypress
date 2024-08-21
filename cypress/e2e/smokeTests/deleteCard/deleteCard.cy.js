/// <reference types="cypress" />
import { Given, Then, When  } from "cypress-cucumber-preprocessor/steps";
import sharedDataUtils from "../../../shared/dataUtils.cy";
import DeleteCardActions from "../../../pageObjects/deleteCard/actions.cy";
import DeleteCardAssertions from "../../../pageObjects/deleteCard/assertions.cy";


const deleteCardAction =new DeleteCardActions();
const deleteCardAssertion=new DeleteCardAssertions();

const dataUtils=new sharedDataUtils()

const boardName="My Board"
const cardName="My Card"
let boardUrl,boardId,listId;
const listName="MY List"

before(()=>{

    cy.loginToTrello()
    dataUtils.createBoard(boardName).then((response)=>{
        boardUrl=response.body.url;
        boardId=response.body.id;
       
        dataUtils.createList(boardId,listName)
        .then((res)=>{
            listId= res.body.id
            dataUtils.createCard(listId,cardName);  
        })  
 
    })  
})
Given("The user navigate to the board",()=>{
    // url for the board
    deleteCardAction.openBoard(boardUrl)
    cy.screenshot({capture:"fullPage"})
});
When("Clicks on edit card icon",()=>{
    deleteCardAction.clickOnEditACardIcon()
});
When("Clicks on delete Card button",()=>{
    deleteCardAction.clickOnDeleteCardButton() 
});
Then("The card will be deleted successfully",()=>{
    deleteCardAssertion.checkCardIsNotExist(cardName)
});
after(()=>{
    cy.wait(3000)
    dataUtils.deleteBoard(boardId)
   cy.wait(3000)
})