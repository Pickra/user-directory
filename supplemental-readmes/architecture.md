# Architecture
- [Component Architecture](#component-architecture)
- [Different Types of Components](#different-types-of-components)
- [State Management](#state-management)

## Component Architecture
Cool, cool, cool. what does that mean?!!!?!?!??!

ALL files related to a component (including tests, state files, styles, etc) go in that component's folder. Each component folder will vary in size dependning on the component's needs. 

Options for when a folder gets too big:
- Decouple child components/files
- add nested folders
  - subcomponent
  - `state`
  - util
  - etc...

## Different Types of Components
Stateful and Presentation component definitions unabashedly ripped off from:
- @dan_abramov: [smart-and-dumb-components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- @yassimortensen: [container-vs-presentational-components-in-react](https://medium.com/@yassimortensen/container-vs-presentational-components-in-react-8eea956e1cea)
### Stateful Components
- Concerned with *how things work*
- Rarely have any HTML tags of their own, aside from a wrapping `<div>`
- Responsible for providing data and behavior to their children

### Presentation Components
- Are concerned with *how things look*
- May contain both presentational and stateful components
- Are unaware of state or know how the data is loaded or mutated.
- Receive data and callbacks exclusively via props.
- Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.

## State Management
State Management means keeping track of important user actions and/or behavior. The below diagram is how user-directory handles state management.

                                             UPDATE STATE
    +-------------------------------------------------------------------------------------------+

         DisplayUsersComponent    getUsersThunk          addUsersAction        UsersReducer
           +-----------+           +----------+           +-----------+        +-----------+                  STATE
           |           |           |          |           |           |        |           |             +---------------+
           |           | +------>  |          |  +------> |           | +----> |           | +----->     |               |
           |           |           |          |           |           |        |           |             |               |
           +-----------+           +----------+           +-----------+        +-----------+             |               |
                                                                                                         |               |
                                                                                                         |               |
                                                                                                         |               |
                                            GET FROM STATE                                               |               |
    +--------------------------------------------------------------------------------------------+       |               |
                                                                                                         +---------------+
      ShowUsersComponent          getUsersSelector
          +---------+              +------------+                                                                 ^
          |         |              |            |                                                                 |
          |         |   <------>   |            |   <-------------------------------------------------------------+
          |         |              |            |
          +---------+              +------------+


### Doesn't Need State Management Example
When a user hovers on a button, CSS styles may change the color or add an animation.
State management isn't needed because the app isn't manipulating backend data.

### Needs State Management Examples
- When the app loads; data needs to be fetched, added to state and displayed in the UI.
- When a user clicks the "next" button, user data is added to state and displayed in the UI.
