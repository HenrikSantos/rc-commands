"use strict";

const generateInterface = require("../generateInterface");

function tsTemplate(componentName, styleType, props) {
  const generatedInterface = generateInterface(props);
    
  return {
    component: `import React from "react";
import "./${ componentName }.${ styleType }";

${ Object.keys(props).length > 0 ? generatedInterface : "" }
export default function ${ componentName }()${ props?.propName ? `: ${ props.propName }` : "" } {
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
