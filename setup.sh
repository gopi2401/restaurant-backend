#!/bin/bash

{
    green='\033[0;32m'
    Red='\033[0;31m'
    nc='\033[0m' # No Color
    # title design
    command printf "${green}************************************\n"
    command printf "*         Backend Setup            *\n"
    command printf "************************************${nc}\n"
    command pkg update -y && pkg upgrade

    pkg_install() {
        pkg_list=("git" "nodejs" "curl")
        for pkg_name in ${pkg_list[@]}; do
            if dpkg -s $pkg_name &>/dev/null; then
                command printf "${green}$pkg_name is installed!${nc}\n"
            else
                command pkg install -y $pkg_name
            fi
        done
    }
    file_download() {
        command curl -o server.js https://github.com/gopi2401/restaurant-backend/releases/download/test/main.js
        command curl -o setup.js https://raw.githubusercontent.com/gopi2401/restaurant-backend/main/setup.js
    }

    # mysql_setup() {
    #     command pkg install mariadb -y
    #     command mysql_install_db                 # Initialize the MariaDB data directory
    #     command mysqld_safe &                    # Start the MariaDB server
    #     command echo "mysqld_safe &" >>~/.bashrc # add the startup command
    #     command mysql -u root -e "create database restaurant"
    #     command curl -o restaurant.sql https://raw.githubusercontent.com/gopi2401/restaurant-backend/main/restaurant.sql || {
    #         command printf "${Red}Failed:${nc}Download database. Please report this!\n"
    #         exit 2
    #     }
    #     command mysql mysql <restaurant.sql >mysqllogs.log &&
    #         echo "New password was successfully set." ||
    #         echo "Failed to set new password"
    #     command rm restaurant.sql
    #     if [ ! -s mysqllogs.log ]; then
    #         command rm mysqllogs.log
    #     fi
    # }

    # project_setup() {
    #     command git clone https://github.com/gopi2401/restaurant-backend.git || {
    #         command printf "${Red}Failed:${nc}clone project repo. Please report this!\n"
    #         exit 2
    #     }
    #     command cd restaurant-backend && npm i && node setup.js
    # }

    pkg_install
    file_download
    command printf "Run the script to set up your database environment variables:/n   node setup.js\nthen run /n   node server.js"
}
