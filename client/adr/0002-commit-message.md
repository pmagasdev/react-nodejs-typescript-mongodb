# 2. commit-message

Date: 2020-06-16

## Status

2020-06-16 Completed

## Context

To avoid commit message to be messy, the team should have its aligned git commit message format.

## Decision

We choose [Semantic Commit Message](https://seesparkbox.com/foundry/semantic_commit_messages).  
In particular, we use the following convention for verbs used in a commit message:

- feat: (new feature for the user, not a new feature for build script)
- fix: (bug fix for the user, not a fix to a build script)
- docs: (changes to the documentation)
- style: (formatting, missing semi colons, etc; no production code change)
- refactor: (refactoring production code, eg. renaming a variable)
- test: (adding missing tests, refactoring tests; no production code change)
- chore: (updating grunt tasks etc; no production code change)

## Consequences

Every commit (except `merge`) should follow the same format as described in the link above. The commit message should also contain the JIRA issue number the committer is working on.  
E.g. `feat: #EPWM-666 add donuts baking to employment forms.`  
If card has no number, we use #N/A instand.
