# Multi Value Dictionary

This multi-value dictionary is designed to place words into a dictionary that can be looked up. It will place words into a dictionary that can be looked up.

## Get Started

You will need nvm to get started. This can be downloaded following the instructions in the [NVM Repository](https://github.com/nvm-sh/nvm#installing-and-updating). For simplicity, I have included that here, but if you receive any failures, check the NVM repository for changes.

```bash
 curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Once nvm is installed, you need to install the right version with `nvm install 16.15.0` and then in the **root of the repository**, run `nvm use` which will utilize node 16.15.0. Once you are using the right version of node, run `npm install` and then `npm run build` to create the latest build on your machine.

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
- `EXIT`

You can alter the arguments after each command to your liking, but the basic principles are the same.

## Testing

I have included automated unit tests for all required functionality. To run these tests, run `npm test` and all tests should pass without issue.
