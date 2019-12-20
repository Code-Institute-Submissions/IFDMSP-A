# IFDMSP-A

Interactive Frontend Development Milestone Project

[https://cofoeducistudent.github.io/IFDMSP-A/]('https://cofoeducistudent.github.io/IFDMSP-A/')

# ** ELECTION FEVER **

## Milestone2 Project (MSP2)

![game screen image](/support/ef-front-page-500.png)

> Requirement (hypothetical)

BBC London has approached my company for a website-based game.

* They wish for something that will tap into the current zeitgeist of the political process occurring as of late 2019, namely Brexit. Because Brexit is quite decisive and polarising, they have stated that they want the game to merely focus on the political process of voting and avoid the real political topic of the EU exit referendum.

* Following a short meeting I was given a small budget and asked to create a prototype of a potential game that would allow members of the public to try and understand what it feels like to be a politician during the electoral run. This they speculate would be interesting enough for a member of the public to give them a small, but somewhat limited taste of becoming one of the currently more disliked career opportunities in the public eye.

* The BBC has said they are exploring other avenues for something of entertainment value to fulfil their current need, and therefore they simply require something to put to their director of entertainment body in 10-15 days for a concept test.

* In addition, they have stated for legal reasons they do not wish that I utilize any names of real current politicians, as there are strict guidelines regarding the political process, and they wish to avoid anything that could be construed as potentially libellous.

* Also, they have said not to worry too much about performance, for if the game is selected for production, they will redesign with appropriate technologies conducive to large scale public consumption, similar to many other similar endeavours of which they are experienced in. They simply want to see a working prototype quickly.

## 1 - UX

Within the following section I will describe various elements and thoughts that went into my design for the project. I will follow the tried and trusted five stage design principles used in my working style, namely

* Strategy
* Scope
* Structure
* Skeleton
* Surface

In addition, I may include rough sketches. They may not be born into the final game but are included for completeness. The code was created quickly and leaves room for optimisation I am sure. However, my focus was getting a working prototype available for review.


a) - Strategy

Following discussions with the BBC, I have decided to produce a game for them with the following characteristics.  

> The Game in a Nutshell!

* The game will be a simplified pastiche of the events of a political run for the office of prime minister, as the player will assume the role of an already established UK parliamentarian (MP).

* Therefore, the game will focus on the ‘General Election’, not the challenge of local ‘bi-elections’.

* Your job as the leader of your chosen political party shall be to offer advice to the local representative in the districts with regards to promoting your party’s overall manifesto within the electoral districts.

* Once you have carried out the rounds of campaigning (promoting your manifesto pledges in this instance) you can move on to the Election day and see how your party fared. 

* The party with the largest majority of public support within a district, gains control of the district.

* The party with the most majority of district ownership will win the election. Thus, making you the next UK Prime minster. 

* As stated, this is a very simplified game, and should be approached as fantasy like, rather than an outright simulation.

## Initial Thoughts

I will utilize common off-the-shelf technologies (COTS), that is web-technologies to prototype the game.

* HTML
* jQuery
* CSS
* JavaScript
* Google-fonts
* Font-awsome
* Jasmine Test Tool

For testing I will use the Jasmine tool for some elements. But because I will be working in Rapid Application Design (RAD) mode, my first go to testing support tool will be ‘google developer tools’.

Also, I believe in setting break/test points in the code, to view variables outputs. i.e. console. Logs. I find this quicker. However, when most functions are working, I will structure a jasmine test template for automated testing, for future modifications.

> The scope of the project will therefore be:

1. Create a web-based game, to allow members of the public to get a feel for a juncture in the political process, specifically the run for Premiership.

2. The game is a fantasy and not a simulation. Accuracy is not of concern. I.e. districts, population, issue will not be effectively rendered here.

3. The player will assume the role of an MP
4. The player will create and have responsibility for creating a political manifesto
5. The player will promote said manifesto
6. The player will enter a “General Election”
7. The player will see the results of their political strategy.

>|

* I will not be concerned with optimisation and performance as stated by the BBC, as they require a working prototype as quickly as possible, as they are soliciting other ideas simultaneously. 

* If my game is selected it will be re-written with performance in mind, as the BBC is a global brand and has distributed server platforms serving many people.

* Although there are many facets potentially to such a game, my game will be simplified

* I will avoid the use of any real politician names, to avoid any legally libellous situations

* Finally, and most importantly the product is a game and not a simulation

> Following are user stories to support the development:

## User Stories

## C) - Structure

The data required for the game will be primarily integrated into the JavaScript file, as opposed to the html file. 

This will allow a somewhat more centralized data structure in the absence of a database.

There are a few important data elements that will be included, from the obvious to the not so obvious. Some of these are....

* Countries (indirectly related for data generation)
* Districts (fantasy Not accurate)
* Political Parties
* Politician data
* People (residents) of districts & there supporting data
* Score-data

Table 1.1

| Data | Content | Purpose |
|------|---------|---------|
| 1 | Global Countries Data | Used as part of an algorithm to generate values in code |
| 2 | Districts |Districts filled with residents to canvas for votes |
| 3 | Political Parties | Conservative / Labour / Lib-Dem / Green party |
| 4 | Politicians Data | Holds the data representing the politicians for the political partties|
| 5 | Populus Data | The data of trthe people in the various districts |
| 6 | Score Data | This refers to district relevant  data |
| 7 | Issues & Response Data | The data of randomly genarated issues affecting the district & appropriate solution options|
| 8 | Images | Images of politicians head-shots|

> Features

Below are features that I expect to be integrated into the application.

| Feature | Purpose |
|:---------|:--------|
| Navigation Menu | To navigate through sections of the game|
| Politician selector| Allows the player to select a politician representing a one of four political parties|
| New Game button | Allows user to reset the game, through a reset screen |
| Global Economy | Feature that generates Three factors for 195 countries. These factors are used as control numbers and used within the game as part of a control algorithm|
| View District Feature | Allows the user to look at any of the districts and gauge its specific issues. The user will spend much of their time here assessing the different elements that are key to progressing in the game|
| View population | Feature allows user to list the residents of the districts. They will be able to then determine the state of mind of the individual resident, prior to making decisions that will determine if they will successfully convert the said resident|
| Create Manifesto | Feature allows the user to create the political manifesto of their party from 25 pledges in 5 areas concern “Crime, Health, Wealth, Employment, Social Satisfaction”|
| Pledge Priority Status Bar | Shows the priorities assigned to each pledge in your manifesto / area|
| Canvass Report | Provides a guide to the social momentum in the area. This information is not to be wholly trusted, but used as a guide, in as-much as polls are in real elections. The truth is they can be wrong. For this reason, the user should open each district and review the populous data |
| Residents button | Allows user to view a list of residents in a particular district|
| Pledges button | Allows users to view the party manifesto and prioritize the pledges as wished |
| Newsflash | Provides snapshot of issues in district |
| Visual Status of District | Allows user to see a quick snapshot of issues. Again, this is not to be relied upon, as it was taken from the canvass report information |
| Results page | Provides three bits of information on the pressing respective buttons |
| Pre-Election Stats |(A)-Current state of political support in the various districts |
| Implement Stratergy |(B)-On applying your manifest, pledges and priorities, the people converted to your party during the election|
| Post-Election Stats |(C)-The political changes in support within the various districts after the election process |
