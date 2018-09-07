# Predix Arcade

A React-based web UI for [JSNES](https://github.com/bfirsh/jsnes) ready for Predix deployment. Based on [JSNES Web UI](https://github.com/bfirsh/jsnes-web).

## Development Setup
Clone or download and extract the source code:

```Shell
git clone https://github.com/futuregarnet/predix-arcade.git
cd predix-arcade
```

### Package Manager Installation

If you don't have them already, you'll need yarn (with Node.js) installed:

1. Install [yarn](https://yarnpkg.com/en/docs/install)

### Dependency Installation

This app uses packages managed by yarn. Issue the following command to install them:

```Shell
yarn
```

## Local Development

To start the app locally, issue the command:

```Shell
yarn start
```

This command will compile code for local development and watch changes for file. Your browser should automatically open [localhost:3000](http://localhost:3000).

## Predix Deployment

Use the following commands to compile code and push to Predix:

```Shell
yarn build
cf push [-n <APP_NAME>]
```

Optional Parameters:

- `-n`: Provide a custom app name (also used for the URL)
  - You can also update the **name** attribute in `manifest.yml` to a custom app name and remove the **random-route** attribute to avoid this parameter.
