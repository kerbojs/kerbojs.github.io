# Deployment

## TL;DR

1. run `npm run build`
1. run `git add dist -f`
1. run `git commit -m "Adding dist"`
1. run `git subtree push -P dist origin gh-pages`

## 1 Test

Skip this step for now.

## 2 Build

Run `npm run build`.

## 3 Commit changes

Run `git add dist -f`.
Run `git commit -m "Adding dist"`.

## 4 Deploy

Run `git subtree push -P dist origin gh-pages`.
