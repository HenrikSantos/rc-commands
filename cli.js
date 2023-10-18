#!/usr/bin/env node

"use strict";

const { Command } = require("commander");

const { createComponent } = require("./createComponent");

const program = new Command("rc-commands");

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
    .option("--no-styles", "Skip creation of style file (css)")
    .option("--less","Choose less as style file")
    .option("--sass", "Choose sass as style file")
    .action((componentPath, options) => {
      const createStyles = options.styles;

      const styleTypeMap = {
        less: "less",
        sass: "sass",
        default: "css"
      };

      const styleType = options.less ? "less" : options.sass ? "sass" : "default";
      
      createComponent(componentPath, fileType, createStyles, styleTypeMap[styleType]);
    });
}

createComponentCommand("component <[path/to/new/]ComponentName>", "create a component", ["c", "tsc"], "ts");
createComponentCommand("js-component <[path/to/new/]ComponentName>", "create a js component", ["jsc"], "js");

program.parse(process.argv);
