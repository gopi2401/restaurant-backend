// Import required modules
const fs = require('fs');
const readline = require('readline');

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt function to get user inputs
const prompt = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

(async () => {
  try {
    // Prompt user for inputs
    const host = await prompt("Enter the host URL: ");
    const user = await prompt("Enter the username: ");
    const password = await prompt("Enter the password: ");
    const database = await prompt("Enter the database name: ");

    // Create the .env content
    const envContent = `HOST=${host}\nUSER=${user}\nPASSWORD=${password}\nDATABASE=${database}\n`;

    // Save the content to a .env file
    fs.writeFileSync(".env", envContent);
    console.log("Saved file '.env' successfully.");
  } catch (error) {
    console.error(`Failed to save the '.env' file! Error: ${error.message}`);
  } finally {
    rl.close();
  }
})();
