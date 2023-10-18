"use strict";

function tsTemplate(componentName, styleType) {
  return {
    component: `import React from "react";
import "./${ componentName }.${ styleType }";

export default function ${ componentName }() {
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
