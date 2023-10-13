# rc-commands

`rc-commands` is a command-line interface (CLI) tool designed to simplify the process of creating components in React. Inspired by Angular's `ng`, this CLI streamlines the generation and organization of components in React projects.

## Installation

### Global Installation (preferred)

To use `rc-commands` globally, you need to install it globally. You can do this via npm:

```bash
npm install -g rc-commands
```

### Local Installation

If you prefer to install `rc-commands` locally in your project, you can do so by running the following command in your project's root directory:

```bash
npm install rc-commands -D
```

This will add `rc-commands` as a dev dependency in your project's `package.json` file.

Next, you will need to add the following command in your `package.json`:

```json
"scripts": {
  "rc": "rc"
}
```

To use `rc-commands` in this way, you will need to prefix all the commands with `npm run`.

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

### Update

To update `rc-commands` just open an terminal and enter the following command `npm update -g rc-commands`.

### Uninstall

To Unistall `rc-commands` just open an terminal and enter the following command `npm uninstall -g rc-commands`.

## Contribution

Feel free to contribute with improvements or bug fixes. Just follow the steps below:

## How to Contribute

1. Find or Create an Issue
   - **Find Existing Issue:**
     - Navigate to the [Issues](https://github.com/HenrikSantos/rc-commands/issues) section to see open tasks.
     - Choose one that aligns with your interests and skills.
     - Leave a comment on the issue indicating that you'd like to work on it. This helps to avoid duplications of effort.
   
   - **Create a New Issue:**
     - If you have a new idea or find a bug that hasn't been reported yet, create a new issue.
     - Click on the "Issues" tab, and then on the "New issue" button. Fill in the new issue template with as much detail as possible.

2. Fork the Repository or Create a Direct PR
   - Choose one of the options below:
     - **Forking:**
       - Click on the "Fork" button in the top right corner of the page to create a copy of the repository in your account.
       - Clone the forked repository to your local environment using the `git clone` command.
     - **Creating a Direct PR:**
       - If you're making a quick fix or small enhancement, you can create a PR directly.

3. Create a Branch
   - Create a new branch in the format `feature/your-feature` or `bugfix/your-fix`.

4. Work on the Issue
   - Develop the solution for the issue in your branch.

5. Commit and Push
   - Make frequent commits with descriptive messages, (i like to use [gitmoji](https://gitmoji.dev/)), and then push to your fork on GitHub.

6. Create a Pull Request
   - If you forked, click on "New Pull Request" in your fork to submit your changes. Remember to reference the issue.
   - If you chose to create a direct PR, follow the instructions in the main repository.

7. Review
   - The changes will be reviewed by a maintainer. If there is feedback, make the necessary changes and update the PR.

8. Merge Contributions
    - Once the review is approved, your Pull Request will be merged into the main repository.

Thank you for contributing to the project! Together, we're making this project even better.


## License

This project is under the MIT license. See the [LICENSE](LICENSE) file for more details.

---

We hope `rc-commands` proves to be useful for you! If you have any suggestions or encounter any issues, feel free to [report an issue](https://github.com/your-username/rc-commands/issues).