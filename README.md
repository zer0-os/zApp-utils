# zApp utils

This is a package of utilities for zApp developers. We noticed a bunch of duplicated code in each zApp, so we decided to put it in a package.

<!-- Semantic Release is currently disabled - to enable, update CircleCi config.yml -->

## Semantic Release and Commit Messages
This project utilizes Semantic Release to automate the release process. Semantic Release analyzes the commit history to determine the next version based on commit message conventions.

To ensure accurate versioning, please follow the recommended commit message conventions:

Use the following format for commit messages: <type>(<scope>): <subject>
<type>: Specifies the type of the commit (e.g., feat, fix, chore, etc.)
<scope> (optional): Indicates the scope of the commit (e.g., a specific component or module)
<subject>: A brief description of the changes made in the commit
Semantic Release uses this information to determine the appropriate version for each release. By following the commit message conventions, we can automate the release process and ensure accurate versioning.

Example: `feat(user): Add functionality to reset password`
