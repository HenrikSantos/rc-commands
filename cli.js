#!/usr/bin/env node

"use strict";

const { Command } = require("commander");

const { createComponent } = require("./createComponent");

const program = new Command("rc-commands");

program.version("0.0.5");

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

  for (let index = 0; index < aliases.length; index += 1) {
    command.alias(aliases[index]);
  }

  command
    .description(description)
    .option("--no-styles", "Skip creation of style file (css)")
    .option("--less","Choose less as style file")
    .option("--sass", "Choose sass as style file")
    .action((componentPath, options) => {

      let styleType = "css";
      
      if (options.noStyles) {
        styleType = "no-styles";
      } 
      
      if (options.less) {
        styleType = "less";
      } 
      
      if (options.sass) {
        styleType = "sass";
      }

      createComponent(componentPath, fileType, styleType);
    });
}

createComponentCommand("component <[path/to/new/]ComponentName>", "create a typescript component", ["c", "tsc"], "ts");
createComponentCommand("js-component <[path/to/new/]ComponentName>", "create a javascript component", ["jsc"], "js");

program.parse(process.argv);
