# github-api-endpoints 

> A list of all the paths supported by the GitHub v3 API

This module is compiled by scraping 
[developer.github.com/v3](https://developer.github.com/v3/)
and  collecting all the `<code>` snippets that start with HTTP verbs.

## Installation

```sh
npm install github-api-endpoints --save
```

## Usage

You can use it programatically:

```js
const endpoints = require('github-api-enpoints')

endpoints.length
// 485

endpoints.filter(e => e.includes('GET /gists'))
// [ 
//  'GET /gists',
//  'GET /gists/:gist_id/comments',
//  'GET /gists/:gist_id/comments/:id',
//  'GET /gists/:id',
//  'GET /gists/:id/:sha',
//  'GET /gists/:id/commits',
//  'GET /gists/:id/forks',
//  'GET /gists/:id/star',
//  'GET /gists/public',
//  'GET /gists/starred'
// ]
```

Or you can install it globally and use it on the command line:

```sh

npm i -g github-api-endpoints

github-api-endpoints | grep branches | grep DELETE
# DELETE /repos/:owner/:repo/branches/:branch/protection
# DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins
# DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
# DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks
# DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
# DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions
# DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
# DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users
```

## Endpoints

```
DELETE /admin/pre_receive_environments/:id
DELETE /admin/pre_receive_hooks/:id
DELETE /applications/:client_id/grants/:access_token
DELETE /applications/:client_id/tokens/:access_token
DELETE /applications/grants/:id
DELETE /authorizations/:id
DELETE /gists/:gist_id/comments/:id
DELETE /gists/:id
DELETE /gists/:id/star
DELETE /notifications/threads/:id/subscription
DELETE /orgs/:org/blocks/:username
DELETE /orgs/:org/hooks/:id
DELETE /orgs/:org/members/:username
DELETE /orgs/:org/memberships/:username
DELETE /orgs/:org/migrations/:id/archive
DELETE /orgs/:org/migrations/:id/repos/:repo_name/lock
DELETE /orgs/:org/outside_collaborators/:username
DELETE /orgs/:org/public_members/:username
DELETE /projects/:id
DELETE /projects/columns/:id
DELETE /projects/columns/cards/:id
DELETE /reactions/:id
DELETE /repos/:owner/:repo
DELETE /repos/:owner/:repo/branches/:branch/protection
DELETE /repos/:owner/:repo/branches/:branch/protection/enforce_admins
DELETE /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks
DELETE /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions
DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
DELETE /repos/:owner/:repo/branches/:branch/protection/restrictions/users
DELETE /repos/:owner/:repo/collaborators/:username
DELETE /repos/:owner/:repo/comments/:id
DELETE /repos/:owner/:repo/contents/:path
DELETE /repos/:owner/:repo/downloads/:id
DELETE /repos/:owner/:repo/git/refs/:ref
DELETE /repos/:owner/:repo/hooks/:id
DELETE /repos/:owner/:repo/import
DELETE /repos/:owner/:repo/invitations/:invitation_id
DELETE /repos/:owner/:repo/issues/:number/assignees
DELETE /repos/:owner/:repo/issues/:number/labels
DELETE /repos/:owner/:repo/issues/:number/labels/:name
DELETE /repos/:owner/:repo/issues/:number/lock
DELETE /repos/:owner/:repo/issues/comments/:id
DELETE /repos/:owner/:repo/keys/:id
DELETE /repos/:owner/:repo/labels/:name
DELETE /repos/:owner/:repo/milestones/:number
DELETE /repos/:owner/:repo/pulls/:number/requested_reviewers
DELETE /repos/:owner/:repo/pulls/:number/reviews/:id
DELETE /repos/:owner/:repo/pulls/comments/:id
DELETE /repos/:owner/:repo/releases/:id
DELETE /repos/:owner/:repo/releases/assets/:id
DELETE /repos/:owner/:repo/subscription
DELETE /repos/octocat/Hello-World/git/refs/heads/feature-a
DELETE /repos/octocat/Hello-World/git/refs/tags/v1.0
DELETE /scim/v2/organizations/:organization/Users/:id
DELETE /setup/api/settings/authorized-keys
DELETE /teams/:id
DELETE /teams/:id/members/:username
DELETE /teams/:id/memberships/:username
DELETE /teams/:id/repos/:owner/:repo
DELETE /user/blocks/:username
DELETE /user/emails
DELETE /user/following/:username
DELETE /user/gpg_keys/:id
DELETE /user/installations/:installation_id/repositories/:repository_id
DELETE /user/keys/:id
DELETE /user/repository_invitations/:invitation_id
DELETE /user/starred/:owner/:repo
DELETE /user/subscriptions/:owner/:repo
GET  /repos/:owner/:repo/traffic/clones
GET  /repos/:owner/:repo/traffic/views
GET /:owner/:name/import/large_files
GET /admin/pre-receive-environments/:id
GET /admin/pre-receive-environments/:id/downloads/latest
GET /admin/pre-receive-hooks
GET /admin/pre-receive-hooks/:id
GET /admin/pre_receive_environments
GET /app
GET /app/installations
GET /app/installations/:installation_id
GET /applications/:client_id/tokens/:access_token
GET /applications/grants
GET /applications/grants/:id
GET /apps/:app_slug
GET /authorizations
GET /authorizations/:id
GET /codes_of_conduct
GET /codes_of_conduct/:key
GET /emojis
GET /enterprise/settings/license
GET /enterprise/stats/:type
GET /events
GET /feeds
GET /gists
GET /gists/:gist_id/comments
GET /gists/:gist_id/comments/:id
GET /gists/:id
GET /gists/:id/:sha
GET /gists/:id/commits
GET /gists/:id/forks
GET /gists/:id/star
GET /gists/public
GET /gists/starred
GET /gitignore/templates
GET /gitignore/templates/C
GET /installation/repositories
GET /issues
GET /legacy/issues/search/:owner/:repository/:state/:keyword
GET /legacy/repos/search/:keyword
GET /legacy/user/email/:email
GET /legacy/user/search/:keyword
GET /licenses
GET /licenses/:license
GET /marketplace_listing/accounts/:id
GET /marketplace_listing/plans
GET /marketplace_listing/plans/:id/accounts
GET /marketplace_listing/stubbed/accounts/:id
GET /marketplace_listing/stubbed/plans
GET /marketplace_listing/stubbed/plans/:id/accounts
GET /meta
GET /networks/:owner/:repo/events
GET /notifications
GET /notifications/threads/:id
GET /notifications/threads/:id/subscription
GET /organizations
GET /orgs/:org
GET /orgs/:org/blocks
GET /orgs/:org/blocks/:username
GET /orgs/:org/events
GET /orgs/:org/hooks
GET /orgs/:org/hooks/:id
GET /orgs/:org/invitations
GET /orgs/:org/issues
GET /orgs/:org/members
GET /orgs/:org/members/:username
GET /orgs/:org/memberships/:username
GET /orgs/:org/migrations
GET /orgs/:org/migrations/:id
GET /orgs/:org/migrations/:id/archive
GET /orgs/:org/outside_collaborators
GET /orgs/:org/projects
GET /orgs/:org/public_members
GET /orgs/:org/public_members/:username
GET /orgs/:org/repos
GET /orgs/:org/teams
GET /projects/:id
GET /projects/:project_id/columns
GET /projects/columns/:column_id/cards
GET /projects/columns/:id
GET /projects/columns/cards/:id
GET /rate_limit
GET /repos/:owner/:name/community/profile
GET /repos/:owner/:repo
GET /repos/:owner/:repo
GET /repos/:owner/:repo
GET /repos/:owner/:repo/:archive_format/:ref
GET /repos/:owner/:repo/assignees
GET /repos/:owner/:repo/assignees/:assignee
GET /repos/:owner/:repo/branches
GET /repos/:owner/:repo/branches/:branch
GET /repos/:owner/:repo/branches/:branch/protection
GET /repos/:owner/:repo/branches/:branch/protection/enforce_admins
GET /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks
GET /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
GET /repos/:owner/:repo/branches/:branch/protection/restrictions
GET /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
GET /repos/:owner/:repo/branches/:branch/protection/restrictions/users
GET /repos/:owner/:repo/collaborators
GET /repos/:owner/:repo/collaborators/:username
GET /repos/:owner/:repo/collaborators/:username/permission
GET /repos/:owner/:repo/comments
GET /repos/:owner/:repo/comments/:id
GET /repos/:owner/:repo/comments/:id/reactions
GET /repos/:owner/:repo/commits
GET /repos/:owner/:repo/commits/:ref
GET /repos/:owner/:repo/commits/:ref/comments
GET /repos/:owner/:repo/commits/:ref/status
GET /repos/:owner/:repo/commits/:ref/statuses
GET /repos/:owner/:repo/commits/:sha
GET /repos/:owner/:repo/commits/:sha
GET /repos/:owner/:repo/community/code_of_conduct
GET /repos/:owner/:repo/compare/:base...:head
GET /repos/:owner/:repo/compare/hubot:branchname...octocat:branchname
GET /repos/:owner/:repo/contents/:path
GET /repos/:owner/:repo/contributors
GET /repos/:owner/:repo/deployments
GET /repos/:owner/:repo/deployments/:deployment_id
GET /repos/:owner/:repo/deployments/:id/statuses
GET /repos/:owner/:repo/deployments/:id/statuses/:status_id
GET /repos/:owner/:repo/downloads
GET /repos/:owner/:repo/downloads/:id
GET /repos/:owner/:repo/events
GET /repos/:owner/:repo/forks
GET /repos/:owner/:repo/git/blobs/:sha
GET /repos/:owner/:repo/git/commits/:sha
GET /repos/:owner/:repo/git/commits/:sha
GET /repos/:owner/:repo/git/refs
GET /repos/:owner/:repo/git/refs/:ref
GET /repos/:owner/:repo/git/refs/heads/feature
GET /repos/:owner/:repo/git/refs/heads/feature-branch-that-no-longer-exists
GET /repos/:owner/:repo/git/refs/heads/skunkworkz/featureA
GET /repos/:owner/:repo/git/refs/tags
GET /repos/:owner/:repo/git/tags/:sha
GET /repos/:owner/:repo/git/tags/:sha
GET /repos/:owner/:repo/git/trees/:sha
GET /repos/:owner/:repo/git/trees/:sha?recursive=1
GET /repos/:owner/:repo/hooks
GET /repos/:owner/:repo/hooks/:id
GET /repos/:owner/:repo/import
GET /repos/:owner/:repo/import/authors
GET /repos/:owner/:repo/invitations
GET /repos/:owner/:repo/issues
GET /repos/:owner/:repo/issues/:issue_number/events
GET /repos/:owner/:repo/issues/:issue_number/timeline
GET /repos/:owner/:repo/issues/:number
GET /repos/:owner/:repo/issues/:number/comments
GET /repos/:owner/:repo/issues/:number/labels
GET /repos/:owner/:repo/issues/:number/reactions
GET /repos/:owner/:repo/issues/comments
GET /repos/:owner/:repo/issues/comments/:id
GET /repos/:owner/:repo/issues/comments/:id/reactions
GET /repos/:owner/:repo/issues/events
GET /repos/:owner/:repo/issues/events
GET /repos/:owner/:repo/issues/events/:id
GET /repos/:owner/:repo/keys
GET /repos/:owner/:repo/keys/:id
GET /repos/:owner/:repo/labels
GET /repos/:owner/:repo/labels/:name
GET /repos/:owner/:repo/languages
GET /repos/:owner/:repo/license
GET /repos/:owner/:repo/milestones
GET /repos/:owner/:repo/milestones/:number
GET /repos/:owner/:repo/milestones/:number/labels
GET /repos/:owner/:repo/notifications
GET /repos/:owner/:repo/pages
GET /repos/:owner/:repo/pages/builds
GET /repos/:owner/:repo/pages/builds/:id
GET /repos/:owner/:repo/pages/builds/latest
GET /repos/:owner/:repo/projects
GET /repos/:owner/:repo/pulls
GET /repos/:owner/:repo/pulls/:number
GET /repos/:owner/:repo/pulls/:number/comments
GET /repos/:owner/:repo/pulls/:number/commits
GET /repos/:owner/:repo/pulls/:number/files
GET /repos/:owner/:repo/pulls/:number/merge
GET /repos/:owner/:repo/pulls/:number/requested_reviewers
GET /repos/:owner/:repo/pulls/:number/reviews
GET /repos/:owner/:repo/pulls/:number/reviews/:id
GET /repos/:owner/:repo/pulls/:number/reviews/:id/comments
GET /repos/:owner/:repo/pulls/comments
GET /repos/:owner/:repo/pulls/comments/:id
GET /repos/:owner/:repo/pulls/comments/:id/reactions
GET /repos/:owner/:repo/readme
GET /repos/:owner/:repo/releases
GET /repos/:owner/:repo/releases/:id
GET /repos/:owner/:repo/releases/:id/assets
GET /repos/:owner/:repo/releases/assets/:id
GET /repos/:owner/:repo/releases/latest
GET /repos/:owner/:repo/releases/tags/:tag
GET /repos/:owner/:repo/stargazers
GET /repos/:owner/:repo/stats/code_frequency
GET /repos/:owner/:repo/stats/commit_activity
GET /repos/:owner/:repo/stats/contributors
GET /repos/:owner/:repo/stats/participation
GET /repos/:owner/:repo/stats/punch_card
GET /repos/:owner/:repo/subscribers
GET /repos/:owner/:repo/subscription
GET /repos/:owner/:repo/tags
GET /repos/:owner/:repo/teams
GET /repos/:owner/:repo/topics
GET /repos/:owner/:repo/traffic/popular/paths
GET /repos/:owner/:repo/traffic/popular/referrers
GET /repositories
GET /scim/v2/organizations/:organization/Users/:id
GET /scim/v2/organizations/:organization/Users/:id
GET /search/code
GET /search/commits
GET /search/issues
GET /search/repositories
GET /search/users
GET /setup/api/configcheck
GET /setup/api/maintenance
GET /setup/api/settings
GET /setup/api/settings/authorized-keys
GET /teams/:id
GET /teams/:id/invitations
GET /teams/:id/members
GET /teams/:id/members/:username
GET /teams/:id/memberships/:username
GET /teams/:id/repos
GET /teams/:id/repos/:owner/:repo
GET /teams/:id/teams
GET /user
GET /user/blocks
GET /user/blocks/:username
GET /user/emails
GET /user/followers
GET /user/following
GET /user/following/:username
GET /user/gpg_keys
GET /user/gpg_keys/:id
GET /user/installations/:installation_id/repositories
GET /user/installations?access_token=...
GET /user/issues
GET /user/keys
GET /user/keys/:id
GET /user/marketplace_purchases
GET /user/marketplace_purchases/stubbed
GET /user/memberships/orgs
GET /user/memberships/orgs/:org
GET /user/orgs
GET /user/public_emails
GET /user/repos
GET /user/repository_invitations
GET /user/starred
GET /user/starred/:owner/:repo
GET /user/subscriptions
GET /user/subscriptions/:owner/:repo
GET /user/teams
GET /users
GET /users/:username
GET /users/:username/events
GET /users/:username/events/orgs/:org
GET /users/:username/events/public
GET /users/:username/followers
GET /users/:username/following
GET /users/:username/following/:target_user
GET /users/:username/gists
GET /users/:username/gpg_keys
GET /users/:username/keys
GET /users/:username/orgs
GET /users/:username/received_events
GET /users/:username/received_events/public
GET /users/:username/repos
GET /users/:username/starred
GET /users/:username/subscriptions
GET https://api.github.com/scim/v2/organizations/:organization/Users
GET https://api.github.com/scim/v2/organizations/:organization/Users?filter=userName eq user@example.com
PATCH /:owner/:name/import/lfs
PATCH /admin/ldap/teams/:team_id/mapping
PATCH /admin/ldap/users/:username/mapping
PATCH /admin/organizations/:org
PATCH /admin/pre_receive_environments/:id
PATCH /admin/pre_receive_hooks/:id
PATCH /authorizations/:id
PATCH /gists/:gist_id/comments/:id
PATCH /gists/:id
PATCH /notifications/threads/:id
PATCH /orgs/:org
PATCH /orgs/:org/hooks/:id
PATCH /projects/:id
PATCH /projects/columns/:id
PATCH /projects/columns/cards/:id
PATCH /repos/:owner/:repo
PATCH /repos/:owner/:repo/branches/:branch/protection/required_pull_request_reviews
PATCH /repos/:owner/:repo/branches/:branch/protection/required_status_checks
PATCH /repos/:owner/:repo/comments/:id
PATCH /repos/:owner/:repo/git/refs/:ref
PATCH /repos/:owner/:repo/hooks/:id
PATCH /repos/:owner/:repo/import
PATCH /repos/:owner/:repo/import/authors/:author_id
PATCH /repos/:owner/:repo/invitations/:invitation_id
PATCH /repos/:owner/:repo/issues/:number
PATCH /repos/:owner/:repo/issues/comments/:id
PATCH /repos/:owner/:repo/labels/:name
PATCH /repos/:owner/:repo/milestones/:number
PATCH /repos/:owner/:repo/pulls/:number
PATCH /repos/:owner/:repo/pulls/comments/:id
PATCH /repos/:owner/:repo/releases/:id
PATCH /repos/:owner/:repo/releases/assets/:id
PATCH /scim/v2/organizations/:organization/Users/:id
PATCH /teams/:id
PATCH /user
PATCH /user/email/visibility
PATCH /user/memberships/orgs/:org
PATCH /user/repository_invitations/:invitation_id
POST /admin/ldap/teams/:team_id/sync
POST /admin/ldap/users/:username/sync
POST /admin/organizations
POST /admin/pre-receive-hooks
POST /admin/pre_receive_environments
POST /admin/pre_receive_environments/:id/downloads
POST /applications/:client_id/tokens/:access_token
POST /authorizations
POST /gists
POST /gists/:gist_id/comments
POST /gists/:id/forks
POST /installations/:installation_id/access_tokens
POST /markdown
POST /markdown/raw
POST /orgs/:org/hooks
POST /orgs/:org/hooks/:id/pings
POST /orgs/:org/migrations
POST /orgs/:org/projects
POST /orgs/:org/repos
POST /orgs/:org/teams
POST /projects/:project_id/columns
POST /projects/columns/:column_id/cards
POST /projects/columns/:id/moves
POST /projects/columns/cards/:id/moves
POST /repos/:owner/:repo/branches/:branch/protection/enforce_admins
POST /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
POST /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
POST /repos/:owner/:repo/branches/:branch/protection/restrictions/users
POST /repos/:owner/:repo/comments/:id/reactions
POST /repos/:owner/:repo/commits/:sha/comments
POST /repos/:owner/:repo/deployments
POST /repos/:owner/:repo/deployments/:id/statuses
POST /repos/:owner/:repo/forks
POST /repos/:owner/:repo/git/blobs
POST /repos/:owner/:repo/git/commits
POST /repos/:owner/:repo/git/refs
POST /repos/:owner/:repo/git/tags
POST /repos/:owner/:repo/git/trees
POST /repos/:owner/:repo/hooks
POST /repos/:owner/:repo/hooks/:id/pings
POST /repos/:owner/:repo/hooks/:id/tests
POST /repos/:owner/:repo/issues
POST /repos/:owner/:repo/issues/:number/assignees
POST /repos/:owner/:repo/issues/:number/comments
POST /repos/:owner/:repo/issues/:number/labels
POST /repos/:owner/:repo/issues/:number/reactions
POST /repos/:owner/:repo/issues/comments/:id/reactions
POST /repos/:owner/:repo/keys
POST /repos/:owner/:repo/labels
POST /repos/:owner/:repo/merges
POST /repos/:owner/:repo/milestones
POST /repos/:owner/:repo/pages/builds
POST /repos/:owner/:repo/projects
POST /repos/:owner/:repo/pulls
POST /repos/:owner/:repo/pulls/:number/comments
POST /repos/:owner/:repo/pulls/:number/requested_reviewers
POST /repos/:owner/:repo/pulls/:number/reviews
POST /repos/:owner/:repo/pulls/:number/reviews/:id/events
POST /repos/:owner/:repo/pulls/comments/:id/reactions
POST /repos/:owner/:repo/releases
POST /repos/:owner/:repo/statuses/:sha
POST /scim/v2/organizations/:organization/Users
POST /setup/api/configure
POST /setup/api/maintenance
POST /setup/api/settings/authorized-keys
POST /setup/api/start
POST /setup/api/upgrade
POST /staff/indexing_jobs
POST /user/emails
POST /user/gpg_keys
POST /user/keys
POST /user/repos
POST https://<upload_url>/repos/:owner/:repo/releases/:id/assets?name=foo.zip
PUT /authorizations/clients/:client_id
PUT /authorizations/clients/:client_id/:fingerprint
PUT /gists/:id/star
PUT /notifications
PUT /notifications/threads/:id/subscription
PUT /orgs/:org/blocks/:username
PUT /orgs/:org/memberships/:username
PUT /orgs/:org/outside_collaborators/:username
PUT /orgs/:org/public_members/:username
PUT /repos/:owner/:repo/branches/:branch/protection
PUT /repos/:owner/:repo/branches/:branch/protection/required_status_checks/contexts
PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/teams
PUT /repos/:owner/:repo/branches/:branch/protection/restrictions/users
PUT /repos/:owner/:repo/collaborators/:username
PUT /repos/:owner/:repo/contents/:path
PUT /repos/:owner/:repo/contents/:path
PUT /repos/:owner/:repo/import
PUT /repos/:owner/:repo/issues/:number/labels
PUT /repos/:owner/:repo/issues/:number/lock
PUT /repos/:owner/:repo/notifications
PUT /repos/:owner/:repo/pulls/:number/merge
PUT /repos/:owner/:repo/pulls/:number/reviews/:id/dismissals
PUT /repos/:owner/:repo/subscription
PUT /repos/:owner/:repo/topics
PUT /scim/v2/organizations/:organization/Users/:id
PUT /setup/api/settings
PUT /teams/:id/members/:username
PUT /teams/:id/memberships/:username
PUT /teams/:id/repos/:org/:repo
PUT /user/blocks/:username
PUT /user/following/:username
PUT /user/installations/:installation_id/repositories/:repository_id
PUT /user/starred/:owner/:repo
PUT /user/subscriptions/:owner/:repo
```

## Paths

You can also get a list of URL paths:

```js
const paths = require('github-api-endpoints/paths')
```

Here's the full list of paths:

```
activity
activity/events
activity/events/types
activity/feeds
activity/notifications
activity/starring
activity/watching
apps
apps/available-endpoints
apps/installations
apps/marketplace
apps/permissions
auth
codes_of_conduct
emojis
enterprise-admin/admin_stats
enterprise-admin/ldap
enterprise-admin/license
enterprise-admin/management_console
enterprise-admin/orgs
enterprise-admin/pre_receive_environments
enterprise-admin/pre_receive_hooks
enterprise-admin/search_indexing
enterprise
gists
gists/comments
git
git/blobs
git/commits
git/refs
git/tags
git/trees
gitignore
issues
issues/assignees
issues/comments
issues/events
issues/labels
issues/milestones
issues/timeline
licenses
markdown
media
meta
migration
migration/migrations
migration/source_imports
misc
oauth_authorizations
orgs
orgs/blocking
orgs/hooks
orgs/members
orgs/outside_collaborators
orgs/teams
pre-release
previews
projects
projects/cards
projects/columns
pulls
pulls/comments
pulls/review_requests
pulls/reviews
rate_limit
reactions
repos
repos/branches
repos/collaborators
repos/comments
repos/commits
repos/community
repos/contents
repos/deployments
repos/downloads
repos/forks
repos/hooks
repos/invitations
repos/keys
repos/merging
repos/pages
repos/releases
repos/statistics
repos/statuses
repos/traffic
scim
search
search/legacy
troubleshooting
users
users/blocking
users/emails
users/followers
users/gpg_keys
users/keys
versions
```

## Tests

```sh
npm install
npm test
```

## Dependencies

None

## Dev Dependencies

- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [cheerio](https://github.com/cheeriojs/cheerio): Tiny, fast, and elegant implementation of core jQuery designed specifically for the server
- [got](): Simplified HTTP requests
- [http-verbs](https://github.com/pigulla/http-verbs): Export http verbs as constants.
- [lodash](): Lodash modular utilities.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [standard](https://github.com/standard/standard): JavaScript Standard Style
- [standard-markdown](): Test your Markdown files for Standard JavaScript Style™


## License

MIT
