# Basic Node.js Application

A basic Node.js application deployed using Jenkins.

## Technologies

- Node.js
- npm
- Jenkins
- GitHub
- PM2

## Run locally

Install dependencies:

```bash
npm install

Run tests:

npm test

Start the application:

npm start

The application runs on:

http://localhost:3000


---

# 10. Your final project

Run:

```bash
ls -la

You should have:

.
..
.gitignore
Jenkinsfile
README.md
ecosystem.config.js
package-lock.json
package.json
server.js
test.js

The structure is:

basic-node-app/
│
├── .gitignore
│
├── Jenkinsfile
│
├── README.md
│
├── ecosystem.config.js
│
├── package.json
│
├── package-lock.json
│
├── server.js
│
└── test.js
What each file does
File	Purpose
server.js	Node.js application
package.json	Project information + npm scripts
package-lock.json	Locks npm dependency information
test.js	Basic test for Jenkins
ecosystem.config.js	PM2 application configuration
Jenkinsfile	Jenkins CI/CD pipeline
.gitignore	Files Git should ignore
README.md	Project documentation
