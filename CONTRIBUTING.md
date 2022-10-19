<details>
	<summary>Table of Contents</summary></br>
	Please use automatically generated table of contents in the top left corner of the README. The table of contents is interactive and links to the selected section. </br></br>
	<img src="https://i0.wp.com/user-images.githubusercontent.com/7900087/113821370-df915480-9730-11eb-8aed-bdc50e2212d5.gif?ssl=1" alt="Italian Trulli">
</details>

## Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1: We automatically adding every contributor to Contributors list!

Have a look at existing [Issues]() and [Pull Requests]() that you could help with. If you found a bug or got a feature idea, and you want to work on it, please request a [Feature]() or report a [Bug]() first.

</br>

## Documentation

**How to use @ag-forms:**

- [README.md](README.md): instructions how to use libs
- [ag-forms.com](ag-forms.com): demo, config ui, docs on vars details
- [StackBlitz]() (online IDE): to open codebase online. [Learn how to use]()

**How to contribute to @ag-forms:**

- [CONTRIBUTING.md](CONTRIBUTING.md) (this document):
- [Code Tour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour#recording-tours) (VSCode Extension): to quickly review step-by-step code implementation. [Learn how to use]()
- []() (online IDE): to open codebase online. [Learn how to use]()
- [Github Issues](): we are using Github Issues for bugs only
- [Github Discussions](): To spread the word we also use Medium and dev blogs to post tutorials, but all tutorials are saved in Tutorials section of Discussions.
- [Community Guidelines](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines)
- [LICENSE.md](LICENSE.md)

<details>
<summary>Read more</summary></br>

:clipboard: **Details:** Full list of documents we use in this project:

1. [README.md](README.md)
   This document is a summary of a prject mainly created for lib consumers, which in our case developers who need to use `ag-forms` inside their project. Here we talk abpot the purpose of the project, problems it solves,
   how to install `ag-forms` libs and use them in projects, etc.

2. [ag-forms.com](ag-forms.com) created with Storybook
   Storybook is used to demo libs and help users build form specs for they project using GUI. It is hosted on ag-forms.com and presented as a demo site with a link to GitHub documentation.

3. CONTRIBUTING.md

   - getting started
   - Coding Rules
   - Commit Message Format
   - **Software Architecture**
     We think it's important to communicate how we are planning to build a software system or how an existing software system works. If software development team doesn't think about architecture all sort of problems can appear (inconsistent approaches to solving the same problems, deployment problems, maintenance issues, code that hard to scale, etc).
     We document our software system architecture using **[C4 Model](https://c4model.com/)** approach and **[Structurizr](https://structurizr.com/)** tool.
   - Code Structure (folder structure)
   - [README.md]() for demo projects
     For every `ag-forms` lib we have demo project that shows lib setup and usage example. In README for demo projects we explain how to setup and run demo projects, and how to understand package.json (it's different from regular Angular project because we use Monorepo setup).
   - **[Architecture Decision Records]()**

4. [Code Tour](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour#recording-tours)
5. [StackBlitz]() (online IDE)
6. [Github Issues]() organized in [GitHub Projects]()
7. [Github Discussions](): we’re using Discussions as a place to connect with other members of our community. We hope that you:
- Ask questions you’re wondering about.
- Share ideas.
- Engage with other community members.
- Welcome others and are open-minded. Remember that this is a community we build together 💪.
9. [Community Guidelines](https://docs.github.com/en/site-policy/github-terms/github-community-guidelines)
10. [LICENSE.md]() It is an open source license of `ag-forms` repository that makes it easier for other people to contribute.

🛠 **Tools:**

- [Storybook](https://storybook.js.org/)
  📦 _packages:_ [`@nrwl/storybook`]() [`@storybook/addon-essentials`]() [`@storybook/angular`]() [`@storybook/builder-webpack5`]() [`@storybook/core-server`]() [`@storybook/manager-webpack5`]() [`@storybook/test-runner`]() [`webpack`]()

- [Code Tour](https://github.com/microsoft/codetour)
  🔌 _vscode plugins:_ [`CodeTour`](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour#recording-tours)

📚 **References:**

- [C4 Model site](https://c4model.com/)
- [Simon Brown site (author of C4 Model)](https://simonbrown.je/)
- [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) by Michael Nygard
- [Architecture decision record](https://github.com/joelparkerhenderson/architecture-decision-record) by Joel Parker Henderson
- [Architectural Decision Records](https://adr.github.io/) by ADR GitHub organization
- [arachne-framework/architecture/adr-001-use-adrs.md](https://github.com/arachne-framework/architecture/blob/master/adr-001-use-adrs.md)
- [Choose an open source license](https://license.md/)
- [Video Tutorial: Storybook for React Apps](https://www.newline.co/courses/storybook-for-react-apps/theming-the-storybook-app)

https://jsoncrack.com/#features

storybook
https://www.chromatic.com/blog/storybook-composition/
https://blog.logrocket.com/next-level-component-showcasing-with-storybook-controls/
https://atanasstoyanov.medium.com/custom-documentation-pages-for-storybookjs-13eb9637d6ab
https://mistica-web.vercel.app/?path=/story/components-popover--default
https://www.apideck.design/?path=/story/card--with-icons
https://github.com/xavierlefevre/shared-react-components-example
https://github.com/lauthieb/awesome-storybook

</details>
</br>

## Developer setup

Option 1: Online IDE

Option 2: Local

<details>
<summary>Read more</summary></br>
</details>
</br>

## Software architecture

clickable diagram

<details>
<summary>Read more</summary></br>

https://github.com/angular/angular/blob/main/docs/DEVELOPER.md
https://github.com/sidneycadot/oeis#how-it-all-fits-together

</details>
</br>

## Code architecture

We decided to adopt **monorepo** as a software development strategy using **[NX](https://nx.dev/)** build system. NX makes developing apps and libraries in a monorepo easier to setup, maintain and work with.

```treeview
ag-forms/
├── demo/			# example app that uses ag-forms
│   ├── example/
│   └── example-e2e/
├── libs/
│   └──  ag-forms/		# ag-forms source code
└── ...
```

<details>
<summary>Read more</summary></br>

📋 **Details:** `ag-forms` project involves developing several libraries and demo applications (examples of library usage). We need to choose how to organize our code. The top-level choice is to organize as a "monorepo" or "polyrepo" or "hybrid":

- Monorepo means we put all pieces into one big repo
- Polyrepo means we put each piece in its own repo
- Hybrid means some mix of monorepo and polyrepo

For more please see https://github.com/joelparkerhenderson/monorepo-vs-polyrepo

**Pros**

1. Built in support
   Built in support for a lot of great libraries and frameworks that we use,like Angular, Jest and Cypress for testing, Prettier, etc.

2. Visualization
   Ability to easily and automatically build a dependency graph. Nx DevTools comes with a really fantastic tool that automatically plots out all of our applications and libraries in a bubble chart. We use this chart to see all those dependencies and identify unintended dependencies. The chart also marks lines and bubbles in red if the changes we made to code will affect those apps and libs. That makes it easy to figure out our changes impact on all code.

3. Affected commands
   Nx can detect what projects in the repo have been affected by a code change. This used by our CI to know what apps/libs need to be built and tested with a change. This saves devs and agents time on CI tasks and keeps our deployments as small and stable as possible.

4. Keeping all libs and apps in sync
   We can code new features and test them right away using demo projects, no need to switch between lib and demo app codes and sync them. In on PR we can duild new feature and demonstrate how to use it in demo project.

5. Unified Dependencies
   The entire repo runs on the same dependencies. This saves time when trying to debug and make version updates a breeze. Instead of updating multiple separate libs and apps to use the next version of Angular, we update everything with a couple of commands and know that everything is compatible. Nx offers a migration tool to help update entire repo, which utilizes ng update and other custom schematics to help make upgrading everything at once much more manageable. It ensures that your dependencies are all compatible and have been tested together. This saves a bunch of time when upgrading libraries because we don’t have to track down library incompatibilities.

6. Distributed Caching
   Distributed caching is an excellent feature unique to nx. The premise is that a piece of code is only built, linted, and tested once across organization. All it takes is a simple command in terminal, and then you start benefiting! Even without distributed caching, you will get local caching so that on your machine, code is only built, linted, and tested once by default. This is a huge time saver and productivity enhancer!

7. Code standards
   We can enforce the same code standard across all of our libs and apps, automatically alert developers and block PRs that don’t follow these standards. It makes life a lot easier.

8. Deployments
   We can also standardise deployments using Nx. We have one single pipeline for all of our apps, which means we have less overhead in maintaining that pipeline. When deploying, we check which applications have been affected by the code changes being made by utilising the command nx affected. This allows us to run the test suites for these applications. If all of these pass, we know we have a valid build and can have relative confidence that releasing code that alters several applications at once won’t result in any breaking changes.

9. Development Experience
   This also helps with onboarding.

10. Best practices
    A set of best practices to enforce on a development team and a great living documentation resources (official site and Nrwl Connect).

11. Documentation
    One set of ADRs can be written for all libs and projects, as well as code and PR guidelines and many more.

12. Seperate builds
    Unlike standard monorepos, Nx build monorepo letting us test and build libs and apps independently, which makes CI/CD process easy and we can deploy libs to package managers and apps to web servers.

**Cons**

1. Rules
   Nx introduces an additional set of rather strict opinions over already extensive Angular's one. The mental burden can be quite heavy, though bearable if you have a decent project documentation.

2. Nesting
   Ridiculously deep nesting can get developer confused and angry quite often. As each application and library has extensive configuration and a separate place for everything your code traveling distance in an IDE or editor rises significantly.

🛠 **Tools:**

- [NX](https://nx.dev/)
  📦 _packages:_ [`nx`](https://www.npmjs.com/package/nx) [`@nrwl/cli`](https://www.npmjs.com/package/@nrwl/cli) [`@nrwl/workspace`](https://www.npmjs.com/package/@nrwl/workspace)

📚 **References:**

- [20 Reasons to do Angular In Nx](https://medium.com/ngconf/20-reasons-to-do-angular-in-nx-27c1ce870822)
- [6 reasons why we chose Nx as our monorepo management tool](https://medium.com/purplebricks-digital/6-reasons-why-we-chose-nx-as-our-monorepo-management-tool-1fe5274a008e)
- [What exactly is Nx.dev?](https://stackoverflow.com/questions/57086528/what-exactly-is-nx-dev)
- [Intro to Nx](https://nx.dev/getting-started/intro)
- [Nx-based monorepo — pains and gains](https://fyodor.io/nx-based-monorepo-pains-and-gains/)
- [Nx: Extensible Dev Tools for Monorepos](https://blog.nrwl.io/nx-angular-cli-power-ups-for-modern-development-37b42e4c8b16)

other:
https://github.com/ma-shamshiri/Human-Activity-Recognition#-cactus-folder-structure
custom form component https://carlosefrfloresta.medium.com/three-ways-to-create-an-angular-custom-form-component-e4fd9e8354c2
data first moel https://github.com/arachne-framework/architecture/blob/master/adr-002-configuration.md
push detection strategy
https://backstage.io/docs/architecture-decisions/adrs-adr004
https://github.com/arachne-framework/architecture/blob/master/adr-008-abstract-modules.md
demo projects
app modules vs standalone components

</details>
</br>

## Languages and frameworks

We need to choose programming language for our software. We have a major need: front-end programming language suitable for web applications. We are writing library specifically for Angular applications. Angular is written in TypeScript.

- [HTML5](https://html.spec.whatwg.org/multipage/) because it's a standard markup language for web pages
- [SASS](https://sass-lang.com/) because it allows us to write neat and clean styling code faster compare to CSS
- [TypeScript](https://www.typescriptlang.org/) because Angular is written in TypeScript and this lib is purely for Angular projects. Also, it is easier and faster to code in compare to JavaScript since TypeScript helps us catch mistakes early through a type system and to make JavaScript development more efficient. https://www.quora.com/What-is-TypeScript-Why-do-we-use-it
- [Angular](https://angular.io/docs) because we write this lib for Angular projects and we think that Angular rocks!!

For lib with UI components generation:

- [Angular CDK][https://material.angular.io/cdk/categories]
https://angular.io/guide/creating-libraries
https://angular.io/guide/schematics
https://angular.io/guide/accessibility
- [TailwindCSS](https://tailwindcss.com/)
- Angular Material
- Bootstrap

<details>
<summary>Read more</summary></br>

📋 **Details:**

🛠 **Tools:**

- [HTML5](https://html.spec.whatwg.org/multipage/): standard markup language for web pages

- [SASS](https://sass-lang.com/): preprocessor scripting language that is compiled into [CSS](https://www.w3.org/Style/CSS/Overview.en.html). "Why Use Sass? Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help. Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff."
  📦 _packages:_ [`postcss`]() [`postcss-import`]() [`postcss-preset-env`]() [`postcss-url`]() [`autoprefixer`]()

- [TypeScript](https://www.typescriptlang.org/)
  📦 _packages:_ [`typescript`](https://www.npmjs.com/package/typescript) [`tslib`](https://www.npmjs.com/package/tslib) [`ts-node`](https://www.npmjs.com/package/ts-node)

- [Angular](https://angular.io/)
  📦 _packages:_ [`@angular/common`](https://angular.io/api/common) [`@angular/core`](https://angular.io/api/core) [`@angular/forms`](https://angular.io/api/forms) [`@angular/platform-browser`](https://angular.io/api/platform-browser) [`@angular/platform-browser-dynamic`](https://angular.io/api/platform-browser-dynamic) [`@angular/router`](https://angular.io/api/router) [`@angular/compiler`](https://www.npmjs.com/package/@angular/compiler) [`@angular-devkit/build-angular`](https://www.npmjs.com/package/@angular-devkit/build-angular) [`@angular/cli`](https://www.npmjs.com/package/@angular/cli) [`@angular/compiler-cli`](https://www.npmjs.com/package/@angular/compiler-cli) [`@angular/language-service`](https://www.npmjs.com/package/@angular/language-service) [`@nrwl/angular`](https://nx.dev/packages/angular) [`zone.js`](https://www.npmjs.com/package/zone.js?activeTab=readme) [`@types/node`]() [`glob`]()

- [TailwindCSS](https://tailwindcss.com/)
  📦 _packages:_ [`tailwindcss`](https://www.npmjs.com/package/tailwindcss)

📚 **References:**

-

https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/examples/css-framework/index.md
https://blog.nrwl.io/set-up-tailwind-css-with-angular-in-an-nx-workspace-6f039a0f4479

</details>
</br>

## Coding standards

Code style
Write useful comments
etc https://github.com/angular/angular/blob/main/docs/CODING_STANDARDS.md
Avoid ANY types https://backstage.io/docs/architecture-decisions/adrs-adr003
Timestamp format https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/examples/timestamp-format/index.md
Naming Conventions https://github.com/angular/angular/blob/main/docs/NAMING.md

<details>
<summary>Read more</summary></br>

</details>
</br>

## Testing and debugging

<details>
<summary>Read more</summary></br>

📋 **Details:** In order to be confident that our software is of a good quality we need to test it. There are different types and techniques of software testing, and not all of them are needed for `ag-forms` library.

- **Static Testing**
  Does not involve software execution and often implicit, like proofreading, plus when programming tools/text editors check source code structure or compilers (pre-compilers) check syntax.
  :hammer_and_wrench: [ESLint](https://eslint.org/) catches inconsistent code formatting, styling, and possible errors
  :hammer_and_wrench: [Prettier](https://prettier.io/) making code’s formatting more consistent; it only addresses style and formatting rules
  :hammer_and_wrench: [SonarCloud](https://www.sonarsource.com/products/sonarcloud/) assesses codebase’s quality across a wide range of measures: reliability, security, maintainability, code coverage, and duplicate code.
  :hammer_and_wrench: [Dependabot](https://github.com/features/security/) addresses security vulnerabilities from out-of-date dependencies.
- **Dynamic Testing**
  Testing of the dynamic behavior of code, executed with a given set of test cases.

  - **Functional Testing**
    Focuses on the business requirements of an application. Tend to answer the question of "can the user do this" or "does this particular feature work."

    - **Unit Test**
      Tests that verify the functionality of a specific section of code, usually at the function level.
      :hammer_and_wrench: [Jest](https://jestjs.io/) testing framework
      :hammer_and_wrench: [Spectator](https://ngneat.github.io/spectator/) that helps with all the boilerplate grunt work and allows to create tests faster and easier-to-maintain
      :hammer_and_wrench: [ng-mocks](https://ng-mocks.sudo.eu/) helps with mocking services, components, directives, pipes and modules.
    - **Integration Test**
      Conducted to evaluate the compliance of a system or component with specified functional requirements. Individual software modules are combined and tested as a group. `@ag-forms/core` will use same tools that are used for unit testing, because it is non-ui library. `@ag-forms/__-cdk` ui libraries will use:
      :hammer_and_wrench: [Cypress](https://docs.cypress.io/guides/component-testing/quickstart-angular#Configuring-Component-Testing) provides a testable component workbench to quickly build and test components.
    - **E2E Test**
      Used to test whether the flow of a software from initial stage to final stage is behaving as expected. The purpose of end-to-end testing is to identify system dependencies and to make sure that the data integrity is maintained between various system components and systems.
      :heavy_multiplication_x: `@ag-forms` has no use case for E2E testing, hence no e2e tests will be performed.
    - **Acceptance Test**
      We are going to ask developers we know to test libraries and documentation to make sure they are esy to read and of a good quality.
      :hammer_and_wrench: users (devs who code in angular)

  - **Non-Functional Testing**
    - **Performance Testing**
    - **Security Testing**
      Uncovers vulnerabilities, threats and risks in a software application.
      :hammer_and_wrench: [SonarCloud](https://www.sonarqube.org/features/security/) In addition to exposing vulnerabilities, it is used to measure the source code quality including: Cross-site scripting, Denial of Service (DoS) attacks, HTTP response splitting, Memory corruption, SQL injection.
    - **Usability (UX) Testing**
      Measuring how easy and user-friendly a software application is.
      - **Accessibility Testing**
        Making your web and mobile apps usable to as many people as possible. It makes apps accessible to those with disabilities, such as vision impairment, hearing disabilities, and other physical or cognitive conditions. `@ag-forms/core` will test accessibility from within `@ag-forms/__-cdk` ui libraries using:
        :hammer_and_wrench: [Axe](https://www.deque.com/axe/) (using [axe-core](https://github.com/dequelabs/axe-core) with cypress) is an accessibility testing engine for websites and other HTML-based user interfaces.
        :hammer_and_wrench: [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) (using [cypress-audit](https://www.npmjs.com/package/cypress-audit)) automated Chrome DevTool for accessibility testing.
        :hammer_and_wrench: [Pa11y](https://pa11y.org/) (using [cypress-audit](https://www.npmjs.com/package/cypress-audit)) tests web pages for accessibility.
      - **Internationalization & Localization (i18n) Testing**
    - **Compatibility Testing**

unit tests in libs
integration tests in libs
language tests in libs
https://github.com/marketplace/accesslint
https://github.com/angular/angular/blob/main/docs/DEBUG.md
https://github.com/angular/angular/blob/main/docs/DEBUG_COMPONENTS_REPO_IVY.md
https://github.com/angular/angular/blob/main/docs/TOOLS.md

🛠 **Tools:**

- [ESLint](https://eslint.org/)
  📦 _packages:_ [`eslint`](https://www.npmjs.com/package/eslint) [`eslint-plugin-cypress`](https://www.npmjs.com/package/eslint-plugin-cypress) [`@typescript-eslint/eslint-plugin`](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser) [`@angular-eslint/eslint-plugin`](https://www.npmjs.com/package/@angular-eslint/eslint-plugin) [`@angular-eslint/eslint-plugin-template`](https://www.npmjs.com/package/@angular-eslint/eslint-plugin-template) [`@angular-eslint/template-parser`](https://www.npmjs.com/package/@angular-eslint/template-parser) [`@nrwl/eslint-plugin-nx`](https://www.npmjs.com/package/@nrwl/eslint-plugin-nx) [`@nrwl/linter`](https://nx.dev/packages/linter)

- [Prettier](https://prettier.io/)
  📦 _packages:_ [`prettier`](https://www.npmjs.com/package/prettier) [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier)

- [Cypress](https://docs.cypress.io/)
  📦 _packages:_ [`cypress`](https://www.npmjs.com/package/cypress) [`@nrwl/cypress`](https://www.npmjs.com/package/@nrwl/cypress)

- [SonarCloud](https://www.sonarsource.com/products/sonarcloud/) https://sonarcloud.io/project/overview?id=movadee-open-source_ag-forms
  📦 _packages:_ [``]() [``]()

- [Dependabot](https://github.com/features/security/)
  📦 _packages:_ [``]() [``]()

- [Jest](https://jestjs.io/)
  📦 _packages:_ [`jest`](https://www.npmjs.com/package/jest) [`jest-environment-jsdom`](https://www.npmjs.com/package/jest-environment-jsdom) [`jest-preset-angular`](https://www.npmjs.com/package/jest-preset-angular) [`ts-jest`](https://www.npmjs.com/package/ts-jest) [`@types/jest`](https://www.npmjs.com/package/@types/jest) [`@nrwl/jest`](https://www.npmjs.com/package/@nrwl/jest)

- [Spectator](https://ngneat.github.io/spectator/)
  📦 _packages:_ [`@ngneat/spectator`](https://www.npmjs.com/package/@ngneat/spectator)

- [ng-mocks](https://ng-mocks.sudo.eu/)
  📦 _packages:_ [`ng-mocks`](https://www.npmjs.com/package/ng-mocks)

- [Axe](https://www.deque.com/axe/)
  📦 _packages:_ [``]() [``]()

- [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
  📦 _packages:_ [``]() [``]()

- [Pa11y](https://pa11y.org/)
  📦 _packages:_ [``]() [``]()

📚 **References:**

- [Software Testing Wiki](https://en.wikipedia.org/wiki/Software_testing#Accessibility_testing)
- [Testing Components with Spectator](https://testing-angular.com/testing-components-with-spectator/#testing-components-with-spectator)
- [Testing Angular: A Guide to Robust Angular Applications](https://testing-angular.com/introduction/#introduction)
- [How to Test Accessibility With Axe in Cypress](https://www.wearecogworks.com/blog/how-to-test-accessibility-with-axe-in-cypress/)
- [Cypress Component Testing in Nx](https://nx.dev/cypress/cypress-component-testing)
- [Nx support for Cypress 10](https://youtu.be/QDWN4C7T-Ck?t=320)
- [Web Performance Testing With Cypress and Google Lighthouse](https://www.lambdatest.com/blog/using-cypress-google-lighthouse-performance-testing/)
- [How to Automate Accessibility Tests with Cypress](https://www.freecodecamp.org/news/automating-accessibility-tests-with-cypress/)
- [How to test for accessibility with Cypress](https://www.deque.com/blog/how-to-test-for-accessibility-with-cypress/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://www.w3.org/TR/wai-aria/#authoring_testing)
- [Accessibility in Angular](https://angular.io/guide/accessibility)
- [Build more accessible Angular apps](https://blog.angular.io/build-more-accessible-angular-apps-1aca4fc39aff)
- [Why you should use open-source component libraries in your Design System](https://backlight.dev/mastery/why-you-should-use-open-source-component-libraries-in-your-design-system)
- [Angular Testing Overview: Unit, Integration & E2E Tests](https://onthecode.co.uk/blog/angular-testing-overview/)

</details>
</br>

## Github process

<details>
<summary>Read more</summary></br>
how to contribute to repo: 
https://github.com/firstcontributions/first-contributions 
codespaces
issue template 
https://github.com/stevemao/github-issue-templates 
https://github.com/codeforamerica/howto/blob/master/Good-GitHub-Issues.md
https://rewind.com/blog/best-practices-for-using-github-issues/

https://github.com/angular/angular/blob/main/docs/COMMITTER.md
https://github.com/angular/angular/blob/main/docs/BRANCHES.md
https://github.com/angular/angular/blob/main/.pullapprove.yml
https://github.com/angular/angular/blob/main/docs/FIXUP_COMMITS.md
https://github.com/angular/angular/blob/main/docs/GITHUB_PROCESS.md
https://github.com/angular/angular/blob/main/docs/PUBLIC_API.md
https://github.com/angular/angular/blob/main/docs/RELEASE_SCHEDULE.md
https://github.com/angular/angular/blob/main/docs/SAVED_REPLIES.md
https://github.com/angular/angular/blob/main/docs/TRIAGE_AND_LABELS.md

</details>
</br>

## Shipping

We use [Semantic Versioning](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

<details>
<summary>Read more</summary></br>

📋 **Details:**

🛠 **Tools:**

- [Semantic Release](https://github.com/semantic-release/semantic-release)
  📦 _packages:_ [`@theunderscorer/nx-semantic-release`](https://github.com/TheUnderScorer/nx-semantic-release) [`ng-packagr`](https://www.npmjs.com/package/ng-packagr)

  https://nx.dev/more-concepts/buildable-and-publishable-libraries
  https://yonatankra.com/how-to-deploy-npm-modules-in-an-nx-monorepo-and-github-actions/
  https://dev.to/dianjuar/publish-your-libraries-to-npm-with-one-command-angular-and-nx-4lao
  https://tane.dev/2020/05/publishing-npm-libraries-using-nx-and-github-actions/

📚 **References:**

-

https://keepachangelog.com/en/1.0.0/
github commits names, pr's etc
semantic release: https://github.com/TheUnderScorer/nx-semantic-release
https://github.com/nhn/tui.editor#-packages

</details>
</br>

## Automation

<details>
<summary>Read more</summary></br>

🛠 **Tools:**

- [Nx Cloud](https://nx.app/)
  📦 _packages:_ [`@nrwl/nx-cloud`](https://www.npmjs.com/package/@nrwl/nx-cloud)

- [GitHub Actions](https://github.com/features/actions)

c4 diagram
https://refresh-sf.com/
https://github.com/jbrestan/structurizr-mkdocs-pages
https://medium.com/@sebagomez/setting-up-a-github-page-with-jekyll-and-a-docker-container-c712e448649b
https://codingwithtaz.blog/2022/08/21/git-to-structurizr-cloud/

https://shields.io/category/build
https://github.com/marketplace/devbots-vacation
https://github.com/marketplace/onesidebar
https://github.com/marketplace/repo-st
https://github.com/marketplace/figstack
https://github.com/responsively-org/responsively-app
https://github.com/marketplace/gitpod-io
https://github.com/marketplace/mokuren-chrome-extension

dependencies
https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/about-dependabot-version-updates
https://github.com/marketplace/licensebat
https://github.com/marketplace/renovate
https://www.youtube.com/watch?v=TnBEVPUsuAw

https://github.com/marketplace/devbots-lock-pull-request
https://github.com/marketplace/devbots-lock-issue

https://github.com/marketplace/percy
https://github.com/marketplace/stale
https://github.com/marketplace/imgbot
https://app.codecov.io/gh/dkhmelenko/autoapproval/pull/726
https://github.com/dkhmelenko/autoapproval/pull/726
https://github.com/marketplace/pr-valet
https://github.com/google/closure-compiler
https://github.com/arachne-framework/architecture/blob/master/adr-011-asset-pipeline.md
github actions
nx-cloud
pre-commit
https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/examples/microsoft-azure-devops/index.md
https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/examples/environment-variable-configuration/index.md
https://www.redhat.com/en/topics/devops/what-is-ci-cd
https://www.redhat.com/en/topics/devops
https://blog.nrwl.io/more-time-saved-for-free-with-nx-cloud-d7079b95f7ca

wip:
https://github.com/marketplace/wip

Ensure Single Commit
https://github.com/marketplace/ensure-single-commit

Check All Tasks Completed
https://github.com/marketplace/task-list-completed

PR depends on
https://github.com/marketplace/dpulls
Incl Videos in PR
https://github.com/marketplace/loom-gif-previews

Auto Create Issue Branch:
https://github.com/marketplace/create-issue-branch auto Create Issue Branch
https://github.com/marketplace/auto-branch auto Create Issue Branch

Release (conventional commit -> Semantic Versioning) prep
https://github.com/jscutlery/semver
https://github.com/marketplace/semantic-prs check pr for conventional commit msg
https://github.com/marketplace/semantic-pull-requests ensure pr is semantic
https://github.com/marketplace/githint-bot follow specified conventions

PR auto label - done
https://github.com/marketplace/pull-request-auto-labeler label based on title and body
https://github.com/marketplace/auto-add-label label based on title
https://github.com/marketplace/trafico-pull-request-labeler
https://github.com/marketplace/devbots-needs-review
https://github.com/marketplace/close-label

https://github.com/marketplace/maintainability-pal
https://github.com/marketplace/kodiakhq
https://github.com/marketplace/ranger
https://github.com/marketplace/mergify
https://github.com/marketplace/pullapprove
https://github.com/marketplace/commit-graph-by-mergebase
https://github.com/marketplace/pull-request-attention
https://github.com/marketplace/butterb0t
https://github.com/marketplace/boring-cyborg-add-labels-to-prs-based-on-filepaths
https://github.com/marketplace/pr-milestone-check
https://github.com/marketplace/lazy-hand
https://github.com/actions/dependency-review-action

?:
https://github.com/marketplace/secureframe
https://github.com/marketplace/soc-2-iso-27001-readiness
https://about.sourcegraph.com/

</details>
</br>

## Metrics, monitors, alerts

<details>
<summary>Read more</summary></br>
https://opensource.guide/metrics/
https://www.quora.com/How-would-you-measure-the-success-of-open-source-project
https://github.com/marketplace/gitspo
https://github.com/joelparkerhenderson/architecture-decision-record/blob/main/examples/metrics-monitors-alerts/index.md
</details>
</br>

## Project management

<details>
<summary>Read more</summary></br>
project management (github projects, issues, issue templates)
https://github.com/jspsych/jsPsych/discussions/categories/show-and-tell
</details>

https://github.com/amitmerchant1990/electron-markdownify#readme
https://www.makeareadme.com/
https://github.com/Stack-in-a-box/triumphmayflowerclub.com#versions
https://firebase.google.com/products/app-check
https://firebase.google.com/products/performance
https://firebase.google.com/products/analytics
https://github.com/PurpleBooth/a-good-readme-template/tags
https://docs.github.com/en/get-started
https://github.com/Stack-in-a-box/triumphmayflowerclub.com#versions
https://github.com/matiassingers/awesome-readme
https://www.mariokandut.com/how-to-check-unused-npm-packages/
https://github.com/angular/components

recommended VSCode plugins
use moment lib? https://backstage.io/docs/architecture-decisions/adrs-adr010
pre-commit
color palette
git flow https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/appendix.html
supported browsers
Error Reporting https://github.com/arachne-framework/architecture/blob/master/adr-013-error-reporting.md
localization https://backstage.io/docs/architecture-decisions/adrs-adr012
Branching and Versioning https://github.com/angular/angular/blob/main/docs/BRANCHES.md
builsing and testing https://github.com/angular/angular/blob/main/docs/DEVELOPER.md

bundle size:
https://www.taskade.com/new/from/QhdTdxcBoGWEWpgd?share=view&view=QGFMgLncup1Lwazw&as=list
https://levelup.gitconnected.com/improving-angular-initial-load-time-fba8b1289c48
https://angular.io/guide/lightweight-injection-tokens
https://blog.sentry.io/2022/07/19/javascript-sdk-package-reduced/
https://www.xenonstack.com/blog/performance-optimization-in-angular
https://akhromieiev.com/how-to-use-webpack-bundle-analyzer-in-angular-project/
https://medium.com/devops-dudes/angular-bundle-size-optimization-75294e83c149
https://www.npmjs.com/package/webpack-bundle-analyzer
https://medium.com/globant/screening-npm-packages-best-practices-a24930b2624e
bundle management https://bundlephobia.com/
https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/19-deploying-an-nx-monorepo

?
https://github.com/marketplace/instabug
https://github.com/marketplace/supportbee
