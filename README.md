# rc-commands

`rc-commands` is a command-line interface (CLI) tool designed to simplify the process of creating components in React. Inspired by Angular's `ng`, this CLI streamlines the generation and organization of components in React projects.

## Installation

### Global Installation

To use `rc-commands` globally, you need to install it globally. You can do this via npm:

```bash
npm install -g rc-commands
```

### Local Installation

If you prefer to install `rc-commands` locally in your project, you can do so by running the following command in your project's root directory:

```bash
npm install rc-commands
```

This will add `rc-commands` as a dependency in your project's `package.json` file.

### Generate a Component

To generate a new component, use the following command:

```bash
rc component componentName
# or
rc c componentName
```

This command will create a directory with the component name inside your React project's components directory, containing the necessary files for the component.

### Example:

```bash
rc c header
```
This will create the following files:
  - Header
    - Header.css
    - Header.tsx
    - Header.spec.tsx


### Help

To get help on how to use `rc-commands`, you can execute:

```bash
rc --help
```

or

```bash
rc c --help
```

## Example

Let's create a new component called `MyComponent`:

```bash
rc component MyComponent
# or
rc c MyComponent
```

This will create the basic structure of the component in your React project's components directory.

## Contribution

Feel free to contribute with improvements or bug fixes. Just follow the steps below:

1. Fork the project
2. Create a branch for your contribution (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m '✨ Adding new feature'`) I like to use [gitmoji](https://gitmoji.dev/) 
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

We hope `rc-commands` proves to be useful for you! If you have any suggestions or encounter any issues, feel free to [report an issue](https://github.com/your-username/rc-commands/issues).