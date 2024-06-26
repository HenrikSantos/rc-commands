"use strict";

const generateInterface = require("../generateInterface");

function tsTemplate(componentName, styleType, props) {
  const generatedInterface = generateInterface(props, componentName);
    
  return {
    component: `import React from "react";
import "./${ componentName }.${ styleType }";
${ Object.keys(props).length > 0 ? `\n${ generatedInterface }` : "" }
export default function ${ componentName }(${ Object.keys(props).length > 0  ? `{}: I${ componentName }` : "" }) {
  return (
    <div>${ componentName }</div>
  );
}`,
    spec: `import React from "react";
import { render } from "@testing-library/react";
import ${ componentName } from "./${ componentName }";

test("checks if the div with text ${ componentName } is present", () => {
  const { getByText } = render(<${ componentName } />);
  const divElement = getByText(/${ componentName }/i);
  expect(divElement).toBeInTheDocument();
});`
  };
}

module.exports = {
  tsTemplate
};
