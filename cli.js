#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const program = require("commander");

program.version("0.0.2");

// Create a component
function createComponentFiles(componentName, type) {
  const folder = componentName;
  const templates = {
    ts: {
      component: `import React from "react";
import "./${componentName}.css";

export default function ${componentName}() {
  return (
    <div>${componentName}</div>
  );
}`,
      spec: `import React from "react";
import { render } from "@testing-library/react";
import ${componentName} from "./${componentName}";

test("checks if the div with text ${componentName} is present", () => {
  const { getByText } = render(<${componentName} />);
  const divElement = getByText(/${componentName}/i);
  expect(divElement).toBeInTheDocument();
});`,
      css: "",
    },
    js: {
      component: `import React from "react";
import "./${componentName}.css";

export default function ${componentName}() {
  return (
    <div>${componentName}</div>
  );
}`,
      spec: `import React from "react";
import { render } from "@testing-library/react";
import ${componentName} from "./${componentName}";

test("checks if the div with text ${componentName} is present", () => {
  const { getByText } = render(<${componentName} />);
  const divElement = getByText(/${componentName}/i);
  expect(divElement).toBeInTheDocument();
});`,
      css: "",
    },
  };

  const files = [
    { name: `${componentName}.${type === "ts" ? "tsx" : "jsx"}`, content: templates[type].component },
    { name: `${componentName}.spec.${type === "ts" ? "tsx" : "jsx"}`, content: templates[type].spec },
    { name: `${componentName}.css`, content: templates[type].css },
  ];

  fs.mkdirSync(folder);
  files.forEach((file) => {
    const filePath = path.join(folder, file.name);
    fs.writeFileSync(filePath, file.content);
  });

  console.log("Folder and files created successfully!");
}

function createComponent(componentName, type) {
  try {
    createComponentFiles(componentName, type);
  } catch (error) {
    console.error(`Something went wrong: ${error}`);
  }
}

// Create component command
function createComponentCommand(commandName, description, aliases, fileType) {
  const command = program.command(commandName).description(description);

  if (aliases && aliases.length > 0) {
    aliases.forEach((alias) => command.alias(alias));
  }

  command.action((paramComponentName) => {
    const componentName = paramComponentName.charAt(0).toUpperCase() + paramComponentName.slice(1);
    createComponent(componentName, fileType);
  });
}

createComponentCommand("component <paramComponentName>", "Create a component", ["c", "tsc"], "ts");
createComponentCommand("js-component <paramComponentName>", "Create a js component", ["jsc"], "js");

program.parse(process.argv);
