###### ADR-001 / 2022-10-03 / In Progress

# Documentation

## Summary

Project documentation is important for us because:

- we can see a big picture of the architectural decision after documenting it and often it encourages improvment, so in the end we have a well-thought implemented solution
- for contributors to understand technical rationale behind decisions, give they feedback and make suggestions
- we want to be able to revisit prior decisions to determine if they still make sense and to refresh in our memory reasons for that decision

Our goal is to have as simple and clean documentation as possible. The following is a list of all project documents:

- [README.md]()
  This document is a summary of a prject mainly created for lib consumers, which in our case developers who need to use `ag-forms` inside their project. Here we talk abpot the purpose of the project, problems it solves,
  how to install `ag-forms` libs and use them in projects, etc.
- [README.md]() for demo projects
  For every `ag-forms` lib we have demo project that shows lib setup and usage example. In README for demo projects we explain how to setup and run demo projects, and how to understand package.json (it's different from regular Angular project because we use Monorepo setup).
- [Storybook](ag-forms.com) hosted on ag-forms.com
  Storybook is used to demo libs and help users build form specs for they project using GUI. It is hosted on ag-forms.com and presented as a demo site with a link to GitHub documentation.
- [CONTRIBUTING.md]()
  - **Software Architecture** using C4 model for visualising software architecture
  - **[Architecture Decision Records]()**
- [LICENSE.md]()
  It is an open source license of `ag-forms` repository that makes it easier for other people to contribute.
- [Issues]() organized in [GitHub Projects]()

## Details

These are a well structured, relatively lightweight way to capture architectural proposals. They can serve as an artifact for discussion, and remain as a record of the context and motivation of past decisions. As a result, the master branch of our repositories will reflect a useful persistent record of why the system is the way it is.

The workflow will be:

1. A developer creates an ADR document outlining an approach for a
   particular question or problem. The ADR has an initial status of "proposed."
2. The developers discuss the ADR. During this period, the ADR should be updated
   to reflect additional context, concerns raised, and proposed changes.
3. Once consensus is reached, ADR can be transitioned to either an
   "accepted" or "rejected" state.
4. Only after an ADR is accepted should implementing code be committed
   to the master branch of the relevant project/module.
5. If a decision is revisited and a different conclusion is reached,
   existing ADR should be modified with updated changelog including
   reference to PR with changes.

## References

- [C4 model](https://c4model.com/)
- [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) by Michael Nygard
- [Architecture decision record](https://github.com/joelparkerhenderson/architecture-decision-record) by Joel Parker Henderson
- [Architectural Decision Records](https://adr.github.io/) by ADR GitHub organization
- [arachne-framework/architecture/adr-001-use-adrs.md](https://github.com/arachne-framework/architecture/blob/master/adr-001-use-adrs.md)
- [Choose an open source license](https://license.md/)
- [Storybook](https://storybook.js.org/)
