---
layout: post.liquid
title: "Git Good #1: Rewriting History"
date: 2022-05-22
---

Welcome to part 1 out of ??? of my git series (super original title I know) covering slightly intermediate to advanced topics that you may or may not have been familiar with. I figured what better way to start this series than by covering some of what are possibly the most dangerous commands in git and when you might want to use them. This blog post will cover 2 methods to rewrite history.

**WARNING**: you almost NEVER want to rewrite history as it tends to end up being a great way to either shoot yourself in the foot, shoot someone else in the foot, or blow off the legs of everybody involved. If this is your own repository and you are the only contributor, then by all means, go off. If this is someone else’s repository then you should reconsider or instead consider using a **git revert** instead as it amends rather than rewrites history. However, if your intent is to erase commits from the commit log entirely then this guide is for you.

## Scenario 1: You want to rewind to a specific commit, nuking all newer commits

![image](https://user-images.githubusercontent.com/8981287/169747149-2005f139-aad5-447e-8628-e899551f6439.png)
What’s this? You accidentally directly pushed to the acmcsuf.com main branch and are now panicking because Karni might beat your ass the next time she sees you? Well there’s no need to fear because this is where dangerous git command # 1 comes into play.

### `git reset --hard`

1. Head over to Github and copy the SHA of the commit you want to rewind to
   ![image](https://user-images.githubusercontent.com/8981287/169747276-71967553-5bdb-4645-b5bd-f1ac81369f80.png)

2. Head over to your terminal and run `git reset --hard [SHA]`. This will rewind your local copy of the repository to the commit you want, discarding ALL modified changes. If you’d still like to keep the changes without committing them, just exclude the --hard
   ![image](https://user-images.githubusercontent.com/8981287/169747313-fee0a649-a241-4837-80fd-289b0e90325e.png)

3. If you tried to git push now, your changes would be rejected as they would rewrite history in the upstream copy
   ![image](https://user-images.githubusercontent.com/8981287/169747465-e74b5f6e-5c81-4faa-93ce-bac802f3097a.png)

4. To remedy this, simply run dangerous git command # 2: **git push --force** which should be pretty self explanatory in what it does, which is to force git to accept your changes whether it likes it or not
   ![image](https://user-images.githubusercontent.com/8981287/169747506-3a27b5a3-e4cb-4b20-8eb4-590ac995895b.png)

As you can see, our commits are now gone and your ass is now saved from Karni

## Scenario 2: You want to remove a specific commit or multiple commits but keep the rest

![image](https://user-images.githubusercontent.com/8981287/169747555-fe2d8408-6fb7-47e7-9e14-2e790d29cd1f.png)
Uh oh, you committed the wrong commit to the wrong branch and then committed more commits on top of that commit, Karni’s really gonna beat your ass now. Don’t worry, once again I got you covered with dangerous git command # 3

### `git rebase --interactive` (or just git rebase -i)

Admittedly this command tends to be less dangerous, less easy to mess up, and actually legitimately useful for doing things like splitting a pull request with 3 features into 3 separate branches. Rebasing could honestly be a whole blog post on its own but I’ll be covering just 1 specific use case here

1. Just like above, pick the commit you want to go back to and start picking from
   ![image](https://user-images.githubusercontent.com/8981287/169747603-3b3cd0c7-fc1a-4909-842b-faf36a36d87d.png)

2. Head back over to your terminal and run `git rebase -i [SHA]`, this will open a text editor, either nano or vim (personally I don’t know how to use vim so if you get vim then just press i to put it in notepad mode and use it like notepad)
   ![image](https://user-images.githubusercontent.com/8981287/169747642-c6518658-88c8-46cb-94ed-c0ef23712b5c.png)

3. From here, you’ll see a list of commits past the commit you selected earlier, to remove a commit, either delete the line or replace pick with drop
   ![image](https://user-images.githubusercontent.com/8981287/169747683-ed5853a4-341d-4c02-bb27-a45b33e7f7ac.png)

4. If you’re using vim it’s escape -> :wq to save and quit, if you’re using nano it’s ctrl + x

5. From here you may or may not have to resolve any rebase conflicts which are just like merge conflicts so go ahead and get those resolved if applicable

6. Once again, this rewrites history so you’ll have to use **git push --force** again and the commit in question should now be erased and your ass is once again saved from a beating
   ![image](https://user-images.githubusercontent.com/8981287/169747719-8405d468-971b-4ed3-a2be-e5a47c9ccdf5.png)
   Thanks for reading and once again please use caution when using these as they are as dangerous as they are powerful and you can easily lose your own or someone else's commits in the process or create a merge conflict problem for someone else when they suddenly can't push to main. Best advice I can give to minimizing this kind of damage is to only use these commands on branches/forks that only you work on and to never do this on main.

<br/><br/>

**Edit 6/8/2022**: Make use of newly added code block support

**Originally posted at**: [https://acmcsuf.com/blog/480](https://acmcsuf.com/blog/480)
