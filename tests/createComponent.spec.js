"use strict";

const fs = require("fs");

const { createComponent } = require("../createComponent");

const DEFAULT_PATH = "tests/path";

test("JS component creation with styles", async() => {
  const componentPath = `${ DEFAULT_PATH }/testComponent1`;

  const fileType = "js";

  const createStyles = "css";

  const props = {};
  await createComponent(componentPath, fileType, createStyles, props);

  expect(fs.existsSync(componentPath)).toBeTruthy();

  const jsxSpecFileExists = fs.existsSync(`${ componentPath }/TestComponent1.spec.jsx`);
  expect(jsxSpecFileExists).toBeTruthy();

  const jsxFileExists = fs.existsSync(`${ componentPath }/TestComponent1.jsx`);
  expect(jsxFileExists).toBeTruthy();
  
  const styleFileExists = fs.existsSync(`${ componentPath }/TestComponent1.css`);
  expect(styleFileExists).toBeTruthy();
});

test("JS component creation without styles", () => {
  const componentPath = `${ DEFAULT_PATH }/testComponent2`;

  const fileType = "js";

  const createStyles = "no-styles";

  const props = {};
  createComponent(componentPath, fileType, createStyles, props);

  expect(fs.existsSync(componentPath)).toBeTruthy();
  
  const jsxSpecFileExists = fs.existsSync(`${ componentPath }/TestComponent2.spec.jsx`);
  expect(jsxSpecFileExists).toBeTruthy();

  const jsxFileExists = fs.existsSync(`${ componentPath }/TestComponent2.jsx`);
  expect(jsxFileExists).toBeTruthy();
  
  const styleFileExists = fs.existsSync(`${ componentPath }/TestComponent2.css`);
  expect(styleFileExists).toBeFalsy();
});

test("JS component creation with Sass styles", async() => {
  const componentPath = `${ DEFAULT_PATH }/testComponent3`;
    
  const fileType = "js";
    
  const createStyles = "sass"; 
  
  const props = {};
  await createComponent(componentPath, fileType, createStyles, props);
    
  expect(fs.existsSync(componentPath)).toBeTruthy();
    
  const jsxSpecFileExists = fs.existsSync(`${ componentPath }/TestComponent3.spec.jsx`);
  expect(jsxSpecFileExists).toBeTruthy();
  
  const jsxFileExists = fs.existsSync(`${ componentPath }/TestComponent3.jsx`);
  expect(jsxFileExists).toBeTruthy();
  
  const styleFileExists = fs.existsSync(`${ componentPath }/TestComponent3.sass`);
  expect(styleFileExists).toBeTruthy();
});

test("JS component creation with Less styles", async() => {
  const componentPath = `${ DEFAULT_PATH }/testComponent4`;
  
  const fileType = "js";
    
  const createStyles = "less"; 
  
  const props = {};
  await createComponent(componentPath, fileType, createStyles, props);
  
  expect(fs.existsSync(componentPath)).toBeTruthy();
  
  const jsxSpecFileExists = fs.existsSync(`${ componentPath }/TestComponent4.spec.jsx`);
  expect(jsxSpecFileExists).toBeTruthy();
  
  const jsxFileExists = fs.existsSync(`${ componentPath }/TestComponent4.jsx`);
  expect(jsxFileExists).toBeTruthy();
  
  const styleFileExists = fs.existsSync(`${ componentPath }/TestComponent4.less`);
  expect(styleFileExists).toBeTruthy();
});

test("TS component creation with styles", async() => {
  const componentPath = `${ DEFAULT_PATH }/testComponent5`;

  const fileType = "ts";

  const createStyles = "css";

  const props = {};
  await createComponent(componentPath, fileType, createStyles, props);

  expect(fs.existsSync(componentPath)).toBeTruthy();

  const tsxSpecFileExists = fs.existsSync(`${ componentPath }/TestComponent5.spec.tsx`);
  expect(tsxSpecFileExists).toBeTruthy();

  const tsxFileExists = fs.existsSync(`${ componentPath }/TestComponent5.tsx`);
  expect(tsxFileExists).toBeTruthy();
  
  const styleFileExists = fs.existsSync(`${ componentPath }/TestComponent5.css`);
  expect(styleFileExists).toBeTruthy();

});

test("TS component creation without styles", () => {
  const componentPath = `${ DEFAULT_PATH }/testComponent6`;

  const fileType = "ts";

  const createStyles = "no-styles";

  const props = {};
  createComponent(componentPath, fileType, createStyles, props);

  expect(fs.existsSync(componentPath)).toBeTruthy();

  const tsxSpecFileExists = fs.existsSync(`${ componentPath }/TestComponent6.spec.tsx`);
  expect(tsxSpecFileExists).toBeTruthy();

  const tsxFileExists = fs.existsSync(`${ componentPath }/TestComponent6.tsx`);
  expect(tsxFileExists).toBeTruthy();

  const styleFileExists = fs.existsSync(`${ componentPath }/TestComponent6.css`);
  expect(styleFileExists).toBeFalsy();
});
  
test("TS component creation with Sass styles", async() => {
  const componentPath = `${ DEFAULT_PATH }/testComponent7`;
  
  const fileType = "ts";
  
  const createStyles = "sass"; 
  
  const props = {};
  await createComponent(componentPath, fileType, createStyles, props);
  
  expect(fs.existsSync(componentPath)).toBeTruthy();
  
  const tsxSpecFileExists = fs.existsSync(`${ componentPath }/TestComponent7.spec.tsx`);
  expect(tsxSpecFileExists).toBeTruthy();
  
  const tsxFileExists = fs.existsSync(`${ componentPath }/TestComponent7.tsx`);
  expect(tsxFileExists).toBeTruthy();
  
  const styleFileExists = fs.existsSync(`${ componentPath }/TestComponent7.sass`);
  expect(styleFileExists).toBeTruthy();
});

test("TS component creation with Less styles", async() => {
  const componentPath = `${ DEFAULT_PATH }/testComponent8`;
    
  const fileType = "ts";
    
  const createStyles = "less"; 
    
  const props = { 
    propName: "minhaInterface",
    strings: ["name", "lastName"],
    numbers: ["id"],
    booleans: ["valido"], 
  };

  await createComponent(componentPath, fileType, createStyles, props);
    
  expect(fs.existsSync(componentPath)).toBeTruthy();
    
  const tsxSpecFileExists = fs.existsSync(`${ componentPath }/TestComponent8.spec.tsx`);
  expect(tsxSpecFileExists).toBeTruthy();
    
  const tsxFileExists = fs.existsSync(`${ componentPath }/TestComponent8.tsx`);
  expect(tsxFileExists).toBeTruthy();
    
  const styleFileExists = fs.existsSync(`${ componentPath }/TestComponent8.less`);
  expect(styleFileExists).toBeTruthy();
});
  
