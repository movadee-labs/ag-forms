https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file

###### ADR-001 / 2022-10-03 / Accepted

# Use Architectural Decision Records (ADRs)

## Summary

Project documentation is important for us because we want:

- think deeply about all our architectural decisions, exploring all alternatives and making a careful, considered, well-researched choice
- contributors to understand technical rationale behind decisions, give they feedback and make suggestions
- be able to revisit prior decisions to determine if they still make sense and to refresh in our memory reasons for that decision

the following approaches and solutions are used to document `ag-forms`:

1. **[C4 model for visualising software architecture](https://c4model.com/)**
2. **[Architecture Decision Records](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)**

3. Storybook
4. Issues and Pull Requests

- READMEs
  - `@ag-forms` README.md
  - `@ag-forms/core` README.md
  - `@ag-forms/{{css-framework}}-cdk` README.md
  - `demo-core` README.md
  - `demo-{{css-framework}}-cdk` README.md
- CONTRIBUTING.md
- LICENSE.md

We will document every architecture-level decision with an **Architecture Decision Record**.

<embed src="./_sc4-model.md" />

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

- [Documenting architecture decisions](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions) by Michael Nygard
- [Architecture decision record](https://github.com/joelparkerhenderson/architecture-decision-record) by Joel Parker Henderson
- [Architectural Decision Records](https://adr.github.io/) by ADR GitHub organization
- [arachne-framework/architecture/adr-001-use-adrs.md](https://github.com/arachne-framework/architecture/blob/master/adr-001-use-adrs.md)
