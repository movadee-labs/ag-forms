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

## Automation

### Labels 

We use labels to help us prioritize and organize issues and pull requests. We use auto generated and user applied (manual) labels.

<table>
	<!-- AUTO LABELS -->
  <tr><td colspan="3"><b>PR Auto Labels</tr>
	<!-- Label: PR size -->
  <tr>
    <td>size/XS</td>
    <td>PR that changes 0-9 lines</td>
    <td rowspan="4">
			Config file: <a href=".github/labels.yml" target="_blank">labels.yml</a></br>
			GitHub app: <a href="https://github.com/noqcks/pull-request-size" target="_blank">Pull Request Size</a></br>
			<em>Labels PR based on the lines of code changed
		</td>
  </tr>
	<tr>
    <td>size/S</td>
    <td>PR that changes 10-29 lines</td>
  </tr>
	<tr>
    <td>size/M</td>
    <td>PR that changes 30-99 lines</td>
  </tr>
	<tr>
    <td>size/L</td>
    <td>PR that changes 100+ lines</td>
  </tr>
</table>