# in this project we have just App.js that contain our code
# we instal bootsrap then import css, button and card
# our card contain all information like full name, image, bio, profession and timer that count the time when our card is open
# the objectif of our project : if we click in button 'show us our profil' our card will be visible,if we make click sacend time our profil will hide
# ################### App.js ####################
# 1- we declare state that contain the object of key-value(fullName,bio, imgSrc, count, profession and a boolean shows)
# 2- we make function 'componentDidMount' that increment 1 to the variable count evry 1 secand (using this.useState)when the profil are shown 
# 3- we associate event 'onClick' to button that will be related to function 'handleClick'
# 4- in function 'handleClick' set the key 'shows' that was initialized to false w use 'this.usestate' to change it to true.The key count also we initialazed to 0 with 'useSate(count : this.sate.count = 0)' in evry click on buttom show
# => we should initialaze the state and the 2 function componentDidMount and handleClick beforore the 'render()'
# 5-we add logical operator && that return sacend value( card ) if the first(value of key shows is true) is true 