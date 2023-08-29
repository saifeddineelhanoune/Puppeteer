#!/bin/bash

# Prompt the user to enter the commit message
read -p "Enter commit message: " commit_message


# Perform the Git commands
git add .
git commit -m "$commit_message"
git push 

# Pull from the remote repository and handle errors
git pull "$remote_repository" master || {
    echo "Failed to pull from the remote repository"
    exit 1
}

echo "Changes pushed to $remote_repository"