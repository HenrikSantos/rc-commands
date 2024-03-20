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
    .option("-s, --strings <strings...>", "specify strings props")
    .option("-n, --numbers <numbers...>", "specify numbers props")
    .option("-b, --booleans <booleans...>", "specify booleans props")
    .action((componentPath, options) => {
      const props = {};

      if ("strings" in options) props.strings = options.strings; 
      if ("numbers" in options) props.numbers = options.numbers; 
      if ("booleans" in options) props.booleans = options.booleans;

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

      createComponent(componentPath, fileType, styleType, props);
    });
}

createComponentCommand("component <[path/to/new/]ComponentName>", "create a typescript component", ["c", "tsc"], "ts");
createComponentCommand("js-component <[path/to/new/]ComponentName>", "create a javascript component", ["jsc"], "js");

program.parse(process.argv);
