# 1. branching-model

Date: 2020-06-16

## Status

2020-06-16 Completed

## Context

Aiming at continuous deployment of Employment Forms and quicker response to defect fixes, a proper branching model is required for team post go-live to manage both feature development and bugfix.

## Decision

Team decided to use `master/production` branching model, which `master` is focused on feature/enhancement development for every release, `production` only on bugfixes.

## Consequences

- Any fix applied to `production` is required to be **merged** into `master` on a regular basis and prior next release.
- Fix on `production` can be directly deployed to production environment once verification is passed.
- For each release, a new `production` branch should be created. Previous `production` branch will be left behind.
