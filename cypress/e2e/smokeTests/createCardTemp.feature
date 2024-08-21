 Feature: Create Card Template Functionality
    Scenario: Validate the user can create Card Template
       Given The user navigate to the board
       When Clicks on Template Card Icon
       And Clicks on create Template Card button
       And Types in card Template title input field
       And Clicks on Add card Template button
       And Clicks on Close Icon
       Then The card Template will be created successfully