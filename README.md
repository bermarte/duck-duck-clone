# duck-duck-clone

[FROM HYF](https://github.com/HackYourFutureBelgium/incremental-development/blob/master/README.md#week-3)  

<details>
<summaryLearn to collaborate on one repository</summary>
   
1. set up your repository and clone it
2. write a development strategy
3. set up a project board on your repo
4. create one issue per step, move them to the board
5. assign each issue to one group member
6. each group member codes their assigned issue
   1. move their issue into _in progress_
   2. creates a new branch locally
   3. writes their new code on that branch
   4. pushes their branch to the group repository
   5. create a PR linked to this issue
   6. assigns team mates to review their PR
   7. waits for the review
7. the group merges each others' pull requests one at a time
   1. review & correct the code
   2. merge the PR after review, closing that issue
   3. move the issue into _done_
   4. everyone pulls the updated `master` branch
   5. repeat
 </details>

<details>
   
<summary>more info</summary>

### Prep Work

> before class

- [Adding collaborators to a repository](https://www.youtube.com/watch?v=p49LRx3hYI8)
- [Git Workflow for Two](https://github.com/hackyourfuturebelgium/git-workflow-workshop-for-two)
- [about code reviews](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-request-reviews)
- [requesting a code review](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)
- [from-strategy-to-issues](https://github.com/hackyourfuturebelgium/from-strategy-to-issues) (example repo)

### Lesson Plan

> during class

**Before Break**

Build one last group intro repository (promise ;)

Before break you will:

1. Choose one of you to be the repository owner, they will complete _step 0_ of the development strategy.
    - When they have finished the group repo should look something like [this example repo](https://github.com/hackyourfuturebelgium/from-strategy-to-issues)
    - Your repo should have: a `development-strategy`, one issue per step, each issue assigned to someone, and a project board for the issues
2. Using the same workflow as last week, each member of the team will complete their assigned issues:
    - Move your issue into "In Progress"
    - Complete your task on a separate branch on your local machine
    - When you have checked all the boxes, push your branch to GitHub
    - Open a Pull Request and [request a review from your team mates](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/requesting-a-pull-request-review)
    - link your PR to your issue ([reference 1](https://help.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue),  [reference 2](https://help.github.com/articles/autolinked-references-and-urls/))
    - Move your issue into "Ready for Review"

**After Break**

Finish what you started before break, merge everyone's branches and close off your work in the project board:

3. Once everyone has created their PRs, review each PR as a group
    - If changes need to be made, request the changes and move the issue to "Needs Revision"
    - If everything is OK: [close te Issue using keywords](https://help.github.com/en/enterprise/2.16/user/github/managing-your-work-on-github/closing-issues-using-keywords), and move the issue to "Done"
4. Discuss!
    - How was this process?
    - Did you get conflicts?  which conflicts and how did you fix them?

### Project

> after class

This week's _**group**_ project is to build your own accessible & responsive clone of the [DuckDuckGo home page](https://duckduckgo.com/?va=z&t=hr) (long version).  We don't expect your DOM to be identical to DuckDuckGo's, or for all the buttons to have the same behavior, but visually your site should be identical to the real DuckDuckGo.  If you would like to use a CSS framework, go for it! Just be sure everyone in your team uses it ;)

Unlike the last two weeks, this project does not have a video tutorial for you to follow. This week you will also expected to do your best at writing _accessible_ HTML including correct Semantic HTML and ARIA. Pay special attention to points of user interaction like the search field and submit button.

You are expected to submit your code from his tutorial in a new repository [generated](https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/) from [the w3-validation-starter repo](https://github.com/HackYourFutureBelgium/w3-validation-template).  Your repository should be named `duck-duck-clone` and should be collaboratively developed following the same workflow you practiced in class this Sunday.  It's up to you to write the development strategy!

### Issue Checklist

Your group will create 1 issue using the _group_ template in your class repo.  Place this issue on the _Incremental Development_ project board and track your progress there so your classmates can study your work and help you when you're stuck.  Link to the group project issue from the **Week 3** section of your _individual_ issue.

Copy-Paste this checklist in your group issue:

```md
- [ ] [repo](https://github.com/_/_) (with a complete README)
- [ ] [live demo](https://_.github.io/_)
- [ ] [development strategy](https://github.com/_/_/tree/master/development-strategy.md)
- [ ] [project board w/ labeled & assigned issues](https://github.com/_/_/projects/1)
- [ ] [issues closed by PRs](https://github.com/_/_/issues)
- [ ] [one branch per step](https://github.com/_/_/network)
- [ ] [one closed PR per step](https://github.com/_/_/pulls)
- [ ] [multiple contributors](https://github.com/_/_/contributors)
```


</details>
