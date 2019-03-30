# MazeTV

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

The aim of this project is to fetch data from API Maze TV, namely information about shows and their episodes.

The main page is the home page and it can be accessed form any page since its link is always available because the link itself is in the APP component, and by clicking it we are brought to the SHOWS component.

The SHOWS component contains the input box (1.1) for the keywords which will be sent to the API and it will receive the shows containing the key words (1.2).
Using angular material acordion it is possible to click on each show (1.3) and get additional information on the show.
One of the additional things that appears is the Get Seasons button which brings us to the EPISODES component and displays the seasons of the shwo that was selected (2).

Two methods are available to display the episodes of a season and their information.

Method (2.1) makes a double loop so that when we click on a season get only the episodes of that season, and method (2.2) invokes the SEASONS-EPISODES component where the episodes of the given season are displayed in cards.  
