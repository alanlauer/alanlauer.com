# Alan's Website 
**A Gatsbyjs digital garden using [gatsby-theme-primer-wiki](https://github.com/theowenyoung/gatsby-theme-primer-wiki)**

> **_NOTE:_** Due to the dependencies' lack of recent updates, this project requires you to use **node v16** for now. We'll be on the lookout for incoming upgrades but for now, this is the path of least resistance so we forge ahead. 

## Features

- Support Local search, full-text search.
- Support Graph Visualisation with canvas.
- Support Tags, Tags First, Generating tag pages, also connecting with graph visualisation.
- Support [Gitbook](https://docs.gitbook.com/integrations/github/content-configuration#summary) styled `SUMMARY.md` for custom sidebar.
- Support `[[WikiLink]]`, But you'd better use [Link Reference Definitions](https://foambubble.github.io/foam/features/link-reference-definitions) with extensions, `"foam.edit.linkReferenceDefinitions": "withExtensions"`
- Support Light/Dark Theme
- Custom Header Nav Items
- Nested sidebar
- Support Google Analytics
- Support Sitemap/Robot
- SEO optimization


## 🚀 Quick start

1.  **Install deps.**
    Ensure you've installed dependencies:
    ```shell
    npm i
    ```

1.  **Start developing.**
    Navigate into your this project's root directory and start it up.

    ```shell
    npm start
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the directory in your code editor of choice and edit `content` markdown files using folders, images and more. Save your changes and the browser will update in real time!

2.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## Source Control procedure

1. `git checkout -b new-branch-name`
1. On github.com, create a pull request for `DRAFT:new-branch-name`.
1. Make changes.
1. Save changes.
1. Use VSCode source control to stage a logical group of changes.
1. [Compose a concise commit message](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) following this format: `<type>[optional scope]: <description>`
1. Commit. Repeat for all changes.
1. `git push origin new-branch-name`
1. On github.com, open the existing pull request.
1. On github.com, review your changes.
1. On github.com, merge your pull request to `master`.
1. On github.com, delete `new-branch-name`.

## Deployment Sequence

After you've merged your changes to master, follow this procedure to deploy to production from local:

1. `git checkout master`
1. `git rebase`
2. `npm run deploy`
