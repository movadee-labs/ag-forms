# Contributing to `ag-forms`

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following contains architecture, design decisions, code of conduct and more. It should help you with onboarding and contributing :)

## Folder Structure

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
