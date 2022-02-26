# Renter

Cool tagline.

## What is Renter?
Insert blurb about Renter.

## External documentation
* [Wireframes on Figma](https://www.figma.com/file/0LX61Px2G18BhdYtXy3FSD/Renter?node-id=0%3A1) 
* Site map (Do we want one?)
* db diagram 

## Local installation steps:
Clone this repo

```js
cd renter
npm install
```
The server will be running on http://localhost:3000.

## Task / feature management
Our tasks are all managed on a Github Project which you can [find here](https://github.com/harakeke-2022/renter/projects/1). There are four columns for each task
- *to do* - the entry point for new issue that are ready to be worked on and can be picked up by any dev
- *in progress* - assign yourself to a card / task / issue and move it to this "doing" column so everyone knows it's in progress
- *review (code & git)* - if your issue is ready for git keeper & product owner to review then create a PR and move it to this column
- *Done* - once your issue is done, the git keeper can move it here, it's now ready to ship :rocket:

## Branching strategy

### main branch
DO NOT touch this branch. This branch is what will be deployed to production, i.e. used for demo day!

### dev branch
This is the branch each of your features should be created from (checkout the dev branch then run `git checkout -b myNewBranchName`). NOTHING should be committed directly to dev. We've protected this branch so in theory only the git keeper can push / merge to it.

### feature branches
When starting on a new feature you need to branch off of the _dev_ branch (*NOT MAIN!!!*)

Features should be named something like `feature/searchBar`.  The first half (feature) let's folks know what kind of branch this is. A feature branch is in development and is not ready for deployment yet.  The second half is a descriptive name of the feature you are building.

## Planning

### Team Member Roles:
- Bella: Product Owner
- Jake: Vibes Lead
- Sam: Git Keeper
- Ningyi: Scrum Master
- Nikhita: Kanban Board Manager


#### Reference docs: 
    - Dreamfest (Database stuff): https://github.com/harakeke-2022/dreamfest
    - Pupparazzi (Writing user stories): https://github.com/harakeke-2022/pupparazzi
    - Charlotte's Web (Routes layout for front-end & back-end liaison): https://github.com/harakeke-2022/charlottes-web-log-api
    - Search Bar auto complete feature: https://www.youtube.com/watch?v=x7niho285qs; https://github.com/machadop1407/React-Search-Bar/tree/main/search-bar-code







