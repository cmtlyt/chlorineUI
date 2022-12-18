npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy:docs'

git push -f https://github.com/cmtlyt/chlorineUI.git master:gh-pages
