<details>
	<summary>Table of Contents</summary></br>
	Please use automatically generated table of contents in the top left corner of the README. The table of contents is interactive and links to the selected section. </br></br>
	<img src="https://i0.wp.com/user-images.githubusercontent.com/7900087/113821370-df915480-9730-11eb-8aed-bdc50e2212d5.gif?ssl=1" alt="Italian Trulli">
</details>

## Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

Have a look at existing [Issues]() and [Pull Requests]() that you could help with. If you found a bug or got a feature idea, and you want to work on it, please request a [Feature]() or report a [Bug]() first. We will review it within 48 hours.

We auto-add all contributors to README.md and package.json

<details>
	<summary><i>See implementation details</i></summary>
	<p>
	GitHub Action jobs are setup in <a href=".github/workflows/contributors.yml"><code>contributors.yml</code></a> to run every Sunday midnight. It updates contributors on README.md and package.json files, so that our contributors could be visible project pages of: GitHub, NPM, PNPM, and YARN.
	</p>
</details>

## Development setup

## Release History

## Versioning

We use [Semantic Versioning](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PurpleBooth/a-good-readme-template/tags).

## How it all fits together

https://github.com/sidneycadot/oeis#how-it-all-fits-together

## Folder Structure

https://github.com/ma-shamshiri/Human-Activity-Recognition#-cactus-folder-structure

```treeview
ag-forms/
├── demo/			# example app that uses ag-forms
│   ├── example/
│   └── example-e2e/
├── libs/
│   └──  ag-forms/		# ag-forms source code
└── ...
```

- recommended VSCode plugins
- sonarcloud: https://sonarcloud.io/project/overview?id=movadee-open-source_ag-forms
- semantic release: https://github.com/TheUnderScorer/nx-semantic-release

| type                      | package                  | path to code        | description            |
| ------------------------- | ------------------------ | ------------------- | ---------------------- |
| package [npm, yarn, pnpm] | `@ag-forms/core`         | `libs/core`         | Library that helps you |
| package [npm, yarn, pnpm] | `@ag-forms/tailwind-cdk` | `libs/tailwind-cdk` |                        |
| demo project              | `demo-core`              | `demo/core`         |                        |
| demo project              | `demo-tailwind-cdk`      | `demo/tailwind-cdk` |                        |

ADRs:
Error Reporting https://github.com/arachne-framework/architecture/blob/master/adr-013-error-reporting.md
localization https://backstage.io/docs/architecture-decisions/adrs-adr012
github commits names, pr's etc
use moment lib? https://backstage.io/docs/architecture-decisions/adrs-adr010
pre-commit
color palette
git flow https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/appendix.html
supported browsers
Branching and Versioning https://github.com/angular/angular/blob/main/docs/BRANCHES.md
builsing and testing https://github.com/angular/angular/blob/main/docs/DEVELOPER.md
bundle management https://bundlephobia.com/

<a href=""><code></code></a>

https://github.com/nhn/tui.editor#-packages

<table>
  <tr>
    <th>Category with link to <a href="/docs/architecture/decision_record/use-adrs.md">ADRs</a></th>
    <th>Tools</th>
    <th>Supporting Packages</th>
		<th>VSCode Extensions</th>
		<th>DevOps</th>
  </tr>
	<!-- Languages -->
  <tr>
    <td rowspan="3"><a href="">Languages</a></td>
    <td><a href="https://www.typescriptlang.org/">TypeScript</a></td>
    <td>
			<a href="https://www.npmjs.com/package/typescript"><code>typescript</code></a>
			<a href="https://www.npmjs.com/package/tslib"><code>tslib</code></a>
			<a href="https://www.npmjs.com/package/ts-node"><code>ts-node</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="">HTML</a></td>
    <td>-</td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="">SASS</a></td>
    <td>
			<a href=""><code>postcss</code></a>
			<a href=""><code>postcss-import</code></a>
			<a href=""><code>postcss-preset-env</code></a>
			<a href=""><code>postcss-url</code></a>
			<a href=""><code>autoprefixer</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<!-- Package Release -->
  <tr>
    <td><a href="">Package Release</a></td>
    <td><a href="https://github.com/semantic-release/semantic-release">Semantic Release</a></td>
    <td>
			<a href="https://github.com/TheUnderScorer/nx-semantic-release"><code>@theunderscorer/nx-semantic-release</code></a>
			<a href="https://www.npmjs.com/package/ng-packagr"><code>ng-packagr</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<!-- Documentation -->
  <tr>
    <td><a href="">Documentation</a></td>
    <td><a href="">Storybook</a></td>
    <td>
			<a href=""><code>@nrwl/storybook</code></a>
			<a href=""><code>@storybook/addon-essentials</code></a>
			<a href=""><code>@storybook/angular</code></a>
			<a href=""><code>@storybook/builder-webpack5</code></a>
			<a href=""><code>@storybook/core-server</code></a>
			<a href=""><code>@storybook/manager-webpack5</code></a>
			<a href=""><code>@storybook/test-runner</code></a>
			<a href=""><code>webpack</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<!-- DevOps -->
	<tr>
    <td rowspan="2"><a href="">DevOps</a></td>
    <td><a href="https://nx.app/">Nx Cloud</a></td>
    <td><a href="https://www.npmjs.com/package/@nrwl/nx-cloud"><code>@nrwl/nx-cloud</code></a></td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://github.com/features/actions">GitHub Actions</a></td>
    <td>-</td>
		<td></td>
		<td></td>
  </tr>
	<!-- CSS Framework -->
	<tr>
    <td rowspan="2"><a href="">CSS Framework</a></td>
    <td><a href="https://material.angular.io/">Angular Material</a></td>
		<td></td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://tailwindcss.com/">TailwindCSS</a></td>
    <td><a href="https://www.npmjs.com/package/tailwindcss"><code>tailwindcss</code></a></td>
		<td></td>
		<td></td>
  </tr>
	<!-- Monorepo Architecture -->
  <tr>
    <td><a href="/docs/architecture/decision_record/monorepo.md">Monorepo Architecture</a></td>
    <td><a href="https://nx.dev/">Nx</a></td>
    <td>
			<a href="https://www.npmjs.com/package/nx"><code>nx</code></a>
			<a href="https://www.npmjs.com/package/@nrwl/cli"><code>@nrwl/cli</code></a>
			<a href="https://www.npmjs.com/package/@nrwl/workspace"><code>@nrwl/workspace</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<!-- Application Framework -->
	<tr>
    <td><a href="">Application Framework</a></td>
    <td><a href="https://angular.io/">Angular</a></td>
    <td>
			<a href="https://angular.io/api/common"><code>@angular/common</code></a>
			<a href="https://angular.io/api/core"><code>@angular/core</code></a>
			<a href="https://angular.io/api/forms"><code>@angular/forms</code></a>
			<a href="https://angular.io/api/platform-browser"><code>@angular/platform-browser</code></a>
			<a href="https://angular.io/api/platform-browser-dynamic"><code>@angular/platform-browser-dynamic</code></a>
			<a href="https://angular.io/api/router"><code>@angular/router</code></a>
			<a href="https://www.npmjs.com/package/@angular/compiler"><code>@angular/compiler</code></a>
			<a href="https://www.npmjs.com/package/@angular-devkit/build-angular"><code>@angular-devkit/build-angular</code></a>
			<a href="https://www.npmjs.com/package/@angular/cli"><code>@angular/cli</code></a>
			<a href="https://www.npmjs.com/package/@angular/compiler-cli"><code>@angular/compiler-cli</code></a>
			<a href="https://www.npmjs.com/package/@angular/language-service"><code>@angular/language-service</code></a>
			<a href="https://nx.dev/packages/angular"><code>@nrwl/angular</code></a>
			<a href="https://www.npmjs.com/package/zone.js?activeTab=readme"><code>zone.js</code></a>
			<a href=""><code>@types/node</code></a>
			<a href=""><code>glob</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<!-- Software Testing -->
	<tr>
    <td rowspan="11"><a href="/docs/architecture/decision_record/code/software-testing.md">Software Testing</a></td>
		<td><a href="https://eslint.org/">ESLint</a></td>
    <td>
			<a href="https://www.npmjs.com/package/eslint"><code>eslint</code></a>
			<a href="https://www.npmjs.com/package/eslint-plugin-cypress"><code>eslint-plugin-cypress</code></a>
			<a href="https://www.npmjs.com/package/@typescript-eslint/eslint-plugin"><code>@typescript-eslint/eslint-plugin</code></a>
			<a href="https://www.npmjs.com/package/@typescript-eslint/parser"><code>@typescript-eslint/parser</code></a>
			<a href="https://www.npmjs.com/package/@angular-eslint/eslint-plugin"><code>@angular-eslint/eslint-plugin</code></a>
			<a href="https://www.npmjs.com/package/@angular-eslint/eslint-plugin-template"><code>@angular-eslint/eslint-plugin-template</code></a>
			<a href="https://www.npmjs.com/package/@angular-eslint/template-parser"><code>@angular-eslint/template-parser</code></a>
			<a href="https://www.npmjs.com/package/@nrwl/eslint-plugin-nx"><code>@nrwl/eslint-plugin-nx</code></a>
			<a href="https://nx.dev/packages/linter"><code>@nrwl/linter</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://prettier.io/">Prettier</a></td>
    <td>
			<a href="https://www.npmjs.com/package/prettier"><code>prettier</code></a>
			<a href="https://www.npmjs.com/package/eslint-config-prettier"><code>eslint-config-prettier</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://docs.cypress.io/">Cypress</a></td>
    <td>
			<a href="https://www.npmjs.com/package/cypress"><code>cypress</code></a>
			<a href="https://www.npmjs.com/package/@nrwl/cypress"><code>@nrwl/cypress</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://www.sonarsource.com/products/sonarcloud/">SonarCloud</a></td>
    <td><a href=""><code></code></a></td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://github.com/features/security/">Dependabot</a></td>
    <td><a href=""><code></code></a></td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://jestjs.io/">Jest</a></td>
    <td>
			<a href="https://www.npmjs.com/package/jest"><code>jest</code></a>
			<a href="https://www.npmjs.com/package/jest-environment-jsdom"><code>jest-environment-jsdom</code></a>
			<a href="https://www.npmjs.com/package/jest-preset-angular"><code>jest-preset-angular</code></a>
			<a href="https://www.npmjs.com/package/ts-jest"><code>ts-jest</code></a>
			<a href="https://www.npmjs.com/package/@types/jest"><code>@types/jest</code></a>
			<a href="https://www.npmjs.com/package/@nrwl/jest"><code>@nrwl/jest</code></a>
		</td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://ngneat.github.io/spectator/">Spectator</a></td>
    <td><a href="https://www.npmjs.com/package/@ngneat/spectator"><code>@ngneat/spectator</code></a></td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://ng-mocks.sudo.eu/">ng-mocks</a></td>
    <td><a href="https://www.npmjs.com/package/ng-mocks"><code>ng-mocks</code></a></td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://www.deque.com/axe/">Axe</a></td>
    <td><a href=""><code></code></a></td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://developer.chrome.com/docs/lighthouse/overview/">Lighthouse</a></td>
    <td><a href=""><code></code></a></td>
		<td></td>
		<td></td>
  </tr>
	<tr>
    <td><a href="https://pa11y.org/">Pa11y</a></td>
    <td><a href=""><code></code></a></td>
		<td></td>
		<td></td>
  </tr>
</table>

references:

- https://choosealicense.com/
  https://github.com/amitmerchant1990/electron-markdownify#readme
  https://www.makeareadme.com/
  https://keepachangelog.com/en/1.0.0/
  https://cloud.google.com/identity-platform/docs/multi-tenancy-authentication
  emoji https://github.com/gofiber/fiber#readme
  https://github.com/Stack-in-a-box/triumphmayflowerclub.com#versions
  https://firebase.google.com/products/app-check
  https://firebase.google.com/products/performance
  https://firebase.google.com/products/analytics
  https://stackblitz.com/membership

  https://github.com/PurpleBooth/a-good-readme-template/tags
  https://keepachangelog.com/en/1.0.0/
  https://docs.github.com/en/get-started
  https://github.com/Stack-in-a-box/triumphmayflowerclub.com#versions
  https://github.com/matiassingers/awesome-readme
  https://www.mariokandut.com/how-to-check-unused-npm-packages/
  https://github.com/angular/components

  storybook
  https://www.chromatic.com/blog/storybook-composition/
  https://blog.logrocket.com/next-level-component-showcasing-with-storybook-controls/
  https://atanasstoyanov.medium.com/custom-documentation-pages-for-storybookjs-13eb9637d6ab
  https://mistica-web.vercel.app/?path=/story/components-popover--default
  https://www.apideck.design/?path=/story/card--with-icons
  https://github.com/xavierlefevre/shared-react-components-example
  https://github.com/lauthieb/awesome-storybook

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
