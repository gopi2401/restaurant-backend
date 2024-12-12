#!/bin/bash

{
    green='\033[0;32m'
    Red='\033[0;31m'
    nc='\033[0m' # No Color
    # title design
    command printf "${green}************************************\n"
    command printf "*         Backend Setup            *\n"
    command printf "************************************${nc}\n"
    command pkg update && pkg upgrade
    command pkg install -y git nodejs

    mysql_setup() {
        command pkg install mariadb -y
        command mysql_install_db                 # Initialize the MariaDB data directory
        command mysqld_safe &                    # Start the MariaDB server
        command echo "mysqld_safe &" >>~/.bashrc # add the startup command
    }

    project_setup() {
        command git clone https://github.com/gopi2401/restaurant-backend || {
            command printf "${Red}Failed:${nc}clone project repo. Please report this!\n"
            exit 2
        }
        command cd restaurant-backend && npm i
    }

    project_setup
}
