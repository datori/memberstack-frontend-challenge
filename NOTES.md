<!-- Tell us about your solution here -->
# Environmental preface
Had some initial issues getting `yarn start` running due to a Windows 10 environment. It seems the inline environment variable assignment within each `start` npm script doesn't play nicely with this setup; so I added [`cross-env`](https://www.npmjs.com/package/cross-env) as a devDep to resolve.