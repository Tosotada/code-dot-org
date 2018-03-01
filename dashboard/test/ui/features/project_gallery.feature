@dashboard_db_access
Feature: Public Project Gallery

  Background:
    Given I create a teacher named "Project_Czar"
    And I give user "Project_Czar" project validator permission

Scenario: Published Projects Show In Recency Order in Gallery
  Then I make a playlab project named "Older Published"
  Then I publish the project
  Given I am on "http://studio.code.org/projects/public"
  Then I wait until element ".project_card" is in the DOM
  Then I wait until element "#ui-project-name" is in the DOM
  Then I wait until the first "#ui-project-name" contains text "Older Published"
  Then I make a playlab project named "Newer Published"
  Then I publish the project
  Given I am on "http://studio.code.org/projects/public"
    #check that "Older Published" is in the gallery, second
    #check that "Newer Published" is in the gallery, first
