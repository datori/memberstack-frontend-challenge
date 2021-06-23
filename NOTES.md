<!-- Tell us about your solution here -->
# Environmental preface
Had some initial issues getting `yarn start` running due to a Windows 10 environment. It seems the inline environment variable assignment within each `start` npm script doesn't play nicely with this setup; so I added [`cross-env`](https://www.npmjs.com/package/cross-env) as a devDep to resolve.

# General structure
Architecture is pretty straight-forward:
- Host initializes, sets color and binds ref
- Chat initializes, sets color and creates event listener
- Dynamic changes to color selector propagate through host and get dispatched via window `postMessage` to iframe using the bound ref.
- Each app keeps a separate store of value for refresh

I think the trickiest part overall was approaching the dual-initialization upon refresh. There's probably a smart way to negotiate/notify the timing of first event send such that both apps are maintained by a single source of truth; but in this situation it seemed simpler and quicker to mitigate the issue entirely.

# Style
Replaced the component `style.css` files with `styled-component`s. Since color updating can be very rapid, I slightly optimized the style for the `ChatIcon` component.

# Conclusion
Definitely a really fun little project! Lots of unexpected little quirks; I like when problems are a bit deeper than at first glance, so I enjoyed this a lot. I think there may be quite a few optimizations possible, but I'm close to the 2h mark. Thanks for the project!