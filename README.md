# Multi Value Dictionary

This multi-value dictionary is designed to be installed using NPM and used via the terminal as a global command. It will place words into a dictionary that can be looked up.

## Get Started

You will need nvm to get started. This can be downloaded following the instructions in the [NVM Repository](https://github.com/nvm-sh/nvm) and once you have it installed, you can run the following from the root of the repository.

`nvm use` which will utilize node 16.15.0. You may be prompted to install this version with nvm so make sure to read the terminal. Once you are using the rigth version of node, run `npm run build` to create the latest build on your machine.

Now that you are ready to start using the dictionary, simply run `npm start`.

## Usage

The following commands are available for the dictionary and case does not matter.

- `ADD foo bar`
- `REMOVE foo bar`
- `KEYS`
- `MEMBERS foo`
- `REMOVEALL foo`
- `CLEAR`
- `KEYEXISTS foo`
- `MEMBEREXISTS foo bar`
- `ALLMEMBERS`
- `ITEMS`

You can alter the arguments after each command to your liking, but the basic principles are the same.