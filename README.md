Chatbot express and sqlite 

This repository contains a RESTful API developed using the Express.js framework, backed by SQLite and Sequelize ORM. The API serves as the backend for a platform where users can create chatbots that have conversations with end users.

## Entities

- User
- Chatbot
- Conversation
- EndUser (The individual interacting with the chatbot)

### Entity Relationships

- A User can have multiple Chatbots.
- A Chatbot belongs to a User and can have multiple Conversations.
- A Conversation belongs to a Chatbot and involves an EndUser.
- An EndUser is identified by a name and an email.

## Technical Requirements

- Express.js is used as the framework for building the API.
- SQLite is used as the database.
- Sequelize is used as the ORM.
 
 
## Installation

1. Clone the repository:
 
git clone https://github.com/sammed-21/chatbot-platform.git

## Installation

1. Clone the repository: `git clone https://github.com/sammed-21/chatbot.git`
2. Navigate to the project directory: `cd chatbot`
3. Install dependencies: `npm install`

## Running the Server

Run the Express server using the following command:

`nodemon app.js` 
 
## Endpoints

### Users

| Endpoint                | Description                  | Method |
|-------------------------|------------------------------|--------|
| /users                  | Create a new user            | POST   |
| /users                  | List all users               | GET    |
| /users/:id              | Retrieve a single user       | GET    |
| /users/:id              | Update a user                | PUT    |
| /users/:id              | Delete a user                | DELETE |

### Chatbots

| Endpoint                      | Description                        | Method |
|------------------------------|------------------------------------|--------|
| /users/:userId/chatbots      | Create a new chatbot for a user    | POST   |
| /users/:userId/chatbots      | List all chatbots for a user       | GET    |
| /chatbots/:chatbotId         | Retrieve a single chatbot          | GET    |
| /chatbots/:chatbotId         | Update a chatbot                   | PUT    |
| /chatbots/:chatbotId         | Delete a chatbot                   | DELETE |

### Conversations

| Endpoint                          | Description                          | Method |
|----------------------------------|--------------------------------------|--------|
| /chatbots/:chatbotId/conversations| Start a new conversation for a chatbot| POST   |
| /chatbots/:chatbotId/conversations| List all conversations for a chatbot  | GET    |
| /conversations/:conversationId   | Retrieve a single conversation       | GET    |
| /conversations/:conversationId   | Update a conversation                | PUT    |
| /conversations/:conversationId   | End/delete a conversation            | DELETE |

### EndUsers

| Endpoint                | Description                    | Method |
|-------------------------|--------------------------------|--------|
| /endusers               | Register a new end user        | POST   |
| /endusers               | List all end users             | GET    |
| /endusers/:endUserId    | Retrieve details of a user     | GET    |
| /endusers/:endUserId    | Update end user details        | PUT    |
| /endusers/:endUserId    | Delete an end user             | DELETE |


