# Work & Co Web Code Assessment

To install dependencies, use the package manager [Yarn](https://yarnpkg.com/en/):

```
yarn
```

To start a development server:

```
yarn start
```

## Approach
1. Brainstorming
    - Given three tasks for this assignment, I have created three different branches to keep track of of my progress updates. I have also created a PR with notes for each of them.
    - In the beginning, I have created a subtask list for each of the tasks to help me guide through the coding process.
    - Going through [Design.sketch](/assets/Design.sketch), I have written down a list including but not limited to:
        - Assets I need to export and make, such as [cart icon](/src/assets/icons/CartIcon.js), [close icon](/src/assets/icons/CloseIcon.js), and [images](/src/assets/images/)
        - New components/containers and tests that I need to write and make edits to, such as [Header](/src/containers/Header.js) and [CartLink](/src/components/CartLink.js)
        - Which measurements that I need to calculate for the responsive layout
2. Design Choices
    - While working the assignments, there were some independent design choices that I needed to make.
    - I created a [CartLink](/src/components/CartLink.js) component and added a new reducer, which gets the total quantity of items that you have added to cart, in order to display the update as the user adds an item to the cart.
    - I also made a slight design change in empty cart popup to display the price description even when its empty.
    - I created a [popup](/src/reducers/popup.js) state in order to manage all the popup states. For now, the application only has a cart popup, but I thought it would be useful when adding more types of popups in the future.
    - I implemented an [image mapper](/src/api/image.js) which returns an image for corresponding title.
    - I added a simple [data processor](/src/api/parser.js) which returns a processed data compatible to the application; therefore, you would not need to change all the props later when the api changes.
    - I mainly used component-based SCSS modules in order to make the component more reuseable and be styled in singleton. However, I have also written a [global scss file](/src/scss/) in order to keep all the base styles, scss variables, and mixins together.
3. End
    - Overall I have enjoyed working on the assignment and have some independence in making design choices. If any questions arise while looking through my code, feel free to reach me at sshong@bu.edu. Thank you.


## Tasks

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
    - [x] Base SCSS
        - [x] Global font style
        - [x] Variable for colors and font-sizes
    - [x] Create new components
        - [x] Header component
    - [x] Create SCSS modules for each components
        - [x] App.js 
        - [x] Header.js
        - [x] Product.js
        - [x] Cart.js
        - [x] CartContainer.js
    - [x] Create new reducers/actions for popup states
        - [x] popup.js
        - [x] popup.spec.js
    - [x] Make edits to components
        - [x] ProductItem.js
        - [x] ProductList.js
        - [x] ProductsContainer.js
    - [x] Fix any breaks within the application
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
    - [x] Reuse ADD_TO_CART for incrementing quantity for the item in the cart
    - [x] Implement REMOVE_FROM_CART 
    - [x] Write tests for above cases
    - [x] Impement REMOVE_PRODUCT_FROM_CARt
    - [x] Write tests for above cases 
3. [Hook Up Product API](/tasks/03-product-api.md)
    - [x] Make edits to shop.js and use axios for workco api
    - [x] Data parsed correctly for react
