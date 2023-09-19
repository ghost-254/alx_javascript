# JavaScript - Network
************************************************************************************************************

# Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

# General
Why JavaScript programming is amazing
How to manipulate JSON data
How to use request and fetch API
How to read and write a file using fs module

# Requirements
# General
Recommended editors: Visual studio code
All your files will be interpreted on Ubuntu 20.04 LTS using node (version 14.x)
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Your code should be semistandard compliant. Rules of Standard + semicolons on top. Also as reference: AirBnB style
The length of your files will be tested using wc
You are not allowed to use var
***********************************************************************************************************************

# Intro Session for this project
    https://youtu.be/KfsMYfjjtDU
***********************************************************************************************************************

# Tasks
# 0. Status code
mandatory
Write a script that display the status code of a GET request.

The first argument is the URL to request (GET)
The status code must be printed like this: code: <status code>
You must use the module request (NB: It must be installed if you haven’t already installed it)

# 1. Star wars movie title
mandatory
Write a script that prints the title of a Star Wars movie where the episode number matches a given integer.

The first argument is the movie ID
You must use the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
You must use the module request

# 2. Star wars Wedge Antilles
mandatory
Write a script that prints the number of movies where the character “Wedge Antilles” is present.

The first argument is the API URL of the Star wars API: https://swapi-api.alx-tools.com/api/films/
Wedge Antilles is character ID 18 - your script must use this ID for filtering the result of the API
You must use the module request

# 3. Loripsum
mandatory
Write a script that gets the contents of a webpage and stores it in a file.

The first argument is the URL to request
The second argument the file path to store the body response
The file must be UTF-8 encoded
You must use the module request

# 4. How many completed?
mandatory
Write a script that computes the number of tasks completed by user id.

The first argument is the API URL: https://jsonplaceholder.typicode.com/todos
Only print users with completed task
You must use the module request

# 5. Who was playing in this movie?
mandatory
Write a script that prints all characters of a Star Wars movie:

The first argument is the Movie ID - example: 3 = “Return of the Jedi”
Display one character name by line
You must use the Star wars API
You must use the module request
*******************************************************************************************
# Project Author:
    NEVILLE OTIENO
# School: 
    ALX Africa

*******************************************************************************************
