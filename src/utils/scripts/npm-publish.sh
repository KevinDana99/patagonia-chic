export COMMIT_MESSAGE=`git log --format=%B -n 1 $BITBUCKET_COMMIT`

## Get NPM version from commit message in between { }
export NPM_VERSION=`echo $COMMIT_MESSAGE | sed -n 's/.*{\(.*\)}.*/\1/p'`


yarn
yarn build
npm config set registry https://registry.npmjs.org/
echo _authToken=$NPM_TOKEN >> ~/.npmrc
npm version $NPM_VERSION
npm publish --access public

## commit updated package.json with version bump
git add package.json
git commit -m "Bump version ${NPM_VERSION}" 
git push
