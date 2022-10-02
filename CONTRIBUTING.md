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


| type | package | path to code | description |
| --- | --- | --- | --- |
| package [npm, yarn, pnpm] | `@ag-forms/core` | `libs/core` | Library that helps you  |
| package [npm, yarn, pnpm] | `@ag-forms/tailwind-cdk` | `libs/tailwind-cdk` |  |
| demo project | `demo-core` | `demo/core` |  |
| demo project | `demo-tailwind-cdk` | `demo/tailwind-cdk` |  |