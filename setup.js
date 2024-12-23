const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to install dependencies
function installDependencies() {
  console.log("Installing dependencies...");
  execSync('npm install', { stdio: 'inherit' });
  console.log("Dependencies installed successfully.");
}

// Function to set up environment variables
function setupEnvironment() {
  console.log("Setting up environment variables...");
  const envFilePath = path.join(__dirname, '.env');
  if (!fs.existsSync(envFilePath)) {
    const defaultEnv = `
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=password
DB_NAME=restaurant
JWT_SECRET=supersecretkey
`;
    fs.writeFileSync(envFilePath, defaultEnv.trim());
    console.log(".env file created with default values.");
  } else {
    console.log(".env file already exists.");
  }
}

// Function to set up the database (example: MySQL)
function setupDatabase() {
  console.log("Setting up database...");
  // Add database initialization logic here
  // For demonstration, we'll just print a message
  console.log("Database setup is complete.");
}

// Main setup function
function main() {
  console.log("Starting project setup...");
  // installDependencies();
  setupEnvironment();
  // setupDatabase();
  console.log("Project setup complete. You're ready to go!");
}

// Execute the setup script
main();
