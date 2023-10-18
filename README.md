# rc-commands

`rc-commands` is a command-line interface (CLI) tool designed to simplify the process of creating components in React. Inspired by Angular's `ng`, this CLI streamlines the generation and organization of components in React projects.

## Installation

| Option            | Command                                      |
|-------------------|----------------------------------------------|
| Global (preffer)  | `npm install -g rc-commands`                 |
| Local             | `npm install rc-commands -D`                 |

If installing locally, add the following to your `package.json`:

```json
"scripts": {
  "rc": "rc"
}
```

Use `npm run` before the command (e.g., `npm run rc`) when using locally.

## How to use

### Generate a TS Component

| Option              | Command                                     |
|---------------------|---------------------------------------------|
| Short               | `rc c componentName`                        |
| Medium              | `rc tsc componentName`                      |
| Long                | `rc component componentName`                |

### Generate a JS Component

| Option              | Command                                     |
|---------------------|---------------------------------------------|
| Short               | `rc jsc componentName`                      |
| Long                | `rc js-component componentName`             |

### Styles Options

| Option           | Command                              |
|------------------|--------------------------------------|
| CSS (default)    | `rc c header`                        |
| No Style         | `rc c header --no-styles`            |
| LESS Styles      | `rc c header --less`                 |
| SASS Styles      | `rc c header --sass`                 |

## Examples:

```bash
rc c header
```

This will create the following files:
  - Header
    - Header.css
    - Header.tsx
    - Header.spec.tsx

### Paths

You can pass an optional path before the componentName, ex:

```bash
rc c ./src/components/header
# or
rc c src/components/header
```

Supposing you have opened the terminal in the previous Header folder and want to create another component in the components folder, you can do the following:

```bash
rc c ../footer
```

These commands will create the following files:
   - src
      - Header
         - Header.css
         - Header.tsx
         - Header.spec.tsx
      - Footer
         - Footer.css
         - Footer.tsx
         - Footer.spec.tsx

## Help

To get help on how to use `rc-commands`, you can execute:

```bash
rc --help
```

## Update

To update `rc-commands` just open a terminal and enter the following command `npm update -g rc-commands`.

## Uninstall

To Uninstall `rc-commands` just open a terminal and enter the following command `npm uninstall -g rc-commands`.

## Contribution

Feel free to contribute with improvements or bug fixes. Just follow the steps below:

### How to Contribute

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
   - Create a new branch in the format `features/your-feature` or `bugfix/your-fix` or `tests/your-test`, you get it.

4. Work on the Issue
   - Develop the solution for the issue in your branch.

5. Commit and Push
   - Make frequent commits with descriptive messages (I like to use [gitmoji](https://gitmoji.dev/)), and then push to your fork on GitHub.

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

We hope `rc-commands` proves to be useful for you!
