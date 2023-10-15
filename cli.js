#!/usr/bin/env node

const { Command } = require("commander");
const { createComponent } = require("./createComponent");

const program = new Command("rc-commands")

program.version("0.0.3");

/**
 *
 * @param {string} commandName
 * @param {string} description
 * @param {string[]} aliases
 * @param {"js" | "ts"} fileType
 * @returns void
 */
function createComponentCommand(commandName, description, aliases, fileType) {
  const command = program.command(commandName);

  if (aliases && aliases.length > 0) {
    aliases.forEach((alias) => command.alias(alias));
  }

  command
    .description(description)
    .option('--no-styles', 'Skip creation of style file (css)')
    .action((componentPath, options) => {
      const createStyles = options.styles;
      createComponent(componentPath, fileType, createStyles);
    });
}

createComponentCommand("component <[path/to/new/]ComponentName>", "create a component", ["c", "tsc"], "ts");
createComponentCommand("js-component <[path/to/new/]ComponentName>", "create a js component", ["jsc"], "js");

program.parse(process.argv);
