#!/usr/bin/node

const request = require('request');

if (process.argv.length !== 3) {
  console.error('Usage: node 4-completed_tasks.js <API URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Initializing an empty object to store the count of completed tasks for each user
const completedTasksByUser = {};

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Error: Status code ${response.statusCode}`);
    process.exit(1);
  }

  const todos = JSON.parse(body);

  // Looping through the todos and count completed tasks for each user
  todos.forEach((todo) => {
    if (todo.completed) {
      if (completedTasksByUser[todo.userId]) {
        completedTasksByUser[todo.userId]++;
      } else {
        completedTasksByUser[todo.userId] = 1;
      }
    }
  });

  // Printing the count of completed tasks for each user
  console.log(completedTasksByUser);
});
