###### ADR-002 / 2022-10-03 / In Progress

# Monorepo Architecture

## Context

`ag-forms` project involves developing several libraries and demo applications (examples of library usage). We need to choose how to organize our code. The top-level choice is to organize as a "monorepo" or "polyrepo" or "hybrid":

- Monorepo means we put all pieces into one big repo
- Polyrepo means we put each piece in its own repo
- Hybrid means some mix of monorepo and polyrepo

For more please see https://github.com/joelparkerhenderson/monorepo-vs-polyrepo

## Decision

We decided to adopt **monorepo** as a software development strategy using **[NX](https://nx.dev/)** build system. NX makes developing apps and libraries in a monorepo easier to setup, maintain and work with.

## Details

### Pros

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

### Cons

1. Rules
   Nx introduces an additional set of rather strict opinions over already extensive Angular's one. The mental burden can be quite heavy, though bearable if you have a decent project documentation.

2. Nesting
   Ridiculously deep nesting can get developer confused and angry quite often. As each application and library has extensive configuration and a separate place for everything your code traveling distance in an IDE or editor rises significantly.

## References

- [20 Reasons to do Angular In Nx](https://medium.com/ngconf/20-reasons-to-do-angular-in-nx-27c1ce870822)
- [6 reasons why we chose Nx as our monorepo management tool](https://medium.com/purplebricks-digital/6-reasons-why-we-chose-nx-as-our-monorepo-management-tool-1fe5274a008e)
- [What exactly is Nx.dev?](https://stackoverflow.com/questions/57086528/what-exactly-is-nx-dev)
- [Intro to Nx](https://nx.dev/getting-started/intro)
- [Nx-based monorepo — pains and gains](https://fyodor.io/nx-based-monorepo-pains-and-gains/)
- [Nx: Extensible Dev Tools for Monorepos](https://blog.nrwl.io/nx-angular-cli-power-ups-for-modern-development-37b42e4c8b16)
