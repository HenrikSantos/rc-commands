"use strict";

function generateInterface(input, componentName) {
  
  const properties = [];

  if ("strings" in input) {
    properties.push(...input.strings.map((prop) => `${ prop }: string`));
    
  }
  if ("numbers" in input) {
    properties.push(...input.numbers.map((prop) => `${ prop }: number`));
    
  }
  if ("booleans" in input) {
    properties.push(...input.booleans.map((prop) => `${ prop }: boolean`));
    
  }
  
  const interfaceDefinition = `interface I${ componentName } {
  ${ properties.join(",\n  ") }
}` + "\n";
  
  return interfaceDefinition;
}

module.exports = generateInterface;
