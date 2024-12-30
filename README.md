# Restaurant Backend Mobile Setup

This project provides a backend server for a restaurant application. Follow this guide to set up the server on your Android device using Termux.

## Prerequisites

- Install the Termux app on your Android device. You can download it from the [Google Play Store.](https://play.google.com/store/apps/details?id=com.termux&pcampaignid=web_share).

## Setup Instructions

### 1. Download and Run the Setup Script

Run the following command to download and execute the setup script:

```bash
curl -s https://raw.githubusercontent.com/gopi2401/restaurant-backend/main/setup.sh | bash
```

### 2. Set Up the Environment Variables

Run the script to set up your database environment variables:

```bash
node setup.js
```

When prompted, enter the following details:

<b>Host URL: </b>`localhost`

<b>Username: </b>`root`

<b>Password: </b>`root`

<b>Database Name: </b>`restaurant`

### 3.Configure Startup Script (optional)

To ensure the server starts automatically when Termux launches:

1. Open the .bashrc file in Termux:

```bash
nano ~/.bashrc
```

2. Add the following line at the end of the file:

```bash
node --env-file .env server.js
```

3. Save and exit:

- Press `CTRL + O`, then hit `Enter` to save changes.

- Press `CTRL + X` to exit the editor.
