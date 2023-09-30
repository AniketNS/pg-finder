# PG Finder - (Paying Guest Finder) - A MERN STACK PROJECT

Welcome to PG Finder! This is a project in MERN STACK that helps you find paying guest accommodations. It consists of a server and a client application. To get started, follow the steps below.

## Prerequisites

Before you can run this project, make sure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)
- MongoDB Compass: [Download MongoDB Compass](https://www.mongodb.com/try/download/compass)

## Setup

1. Create a MongoDB database named `pg-finder`.
2. Inside the `pg-finder` database, create the following collections:
   - `users`
   - `rooms`
   - `messages`
   - `appointments`

## Installation

1. Clone this repository to your local machine:

   ```shell
   git clone https://github.com/ParthNS1/pg-finder.git
   ```

2. Navigate to the server directory and install the server dependencies:

   ```shell
   cd server
   npm install
   ```

3. Navigate to the client directory and install the client dependencies:

   ```shell
   cd client
   npm install
   ```
## Running the Application


1. Start the server

   ```shell
   cd server
   nodemon index.js
   ```
 (The server will run on port 3001)
   
3. start the client

   ```shell
   cd client
   npm run start 
   ```
(The client side will run on port 3000)

## Use

The client application will open in your default web browser.
