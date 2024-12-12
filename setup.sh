#!/bin/bash

{
    green='\033[0;32m'
    nc='\033[0m' # No Color
    # title design
    command printf "${green}************************************\n"
    command printf "*         Backend Setup            *\n"
    command printf "************************************${nc}\n"
    command pkg update && pkg upgrade
    command pkg install -y git nodejs
    # mysql(){
    #     command
    # }

    project_setup() {
        command git clone https://github.com/gopi401/restaurant-backend || {
            command printf 'Failed to clone project repo. Please report this!'
            exit 2
        }
    }

    project_setup
}
