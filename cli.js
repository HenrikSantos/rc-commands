#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const program = require("commander");

program.version("0.0.1");

program
  .command("component <paramComponentName>")
  .description("Create a component")
  .alias("c")
  .action((paramComponentName) => {
    const componentName = paramComponentName.charAt(0).toUpperCase() + paramComponentName.slice(1);
    const folder = `${componentName}`;

    const files = [
      {
        name: `${componentName}.tsx`, content: `import React from "react"
import "./${componentName}.css"

export default function ${componentName}() {
  return (
    <div>${componentName}</div>
  )
}      
`
      },
      { 
        name: `${componentName}.spec.tsx`, content: `import React from "react";
import { render } from "@testing-library/react";
import ${componentName} from "./${componentName}";

test("verifica se a div com texto "name" está presente", () => {
  const { getByText } = render(<${componentName} />);
  const divElement = getByText(/${componentName}/i);
  expect(divElement).toBeInTheDocument();
});
`
      },
      { name: `${componentName}.css`, content: "" }
    ];

    fs.mkdirSync(folder);

    files.forEach(file => {
      const caminho = path.join(folder, file.name);
      fs.writeFileSync(caminho, file.content);
    });

    console.log("Folder and files created successfully!");
  })

program.parse(process.argv);
