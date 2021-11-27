# Resume Creator

Resume Creator is a project with the aim of support creatives to craft CV's, portfolios and other documents.

This project utilizes [Cask](https://com-lihaoyi.github.io/cask/) as an HTTP micro-framework and [React](https://reactjs.org/) (without JSX) for an interactive UI.

## Roadmap

The first version of the project includes a printable CV. Next steps would be to add a possibility to save a CV and its link through routing. Each CV would have their own page, where other users can comment on the CV. Furthermore, other document templates would be available for editing, printing and saving.

- Basic setup of CV page ✅
- Editing textboxes of CV ✅
- Adding new list items of CV elements ✅
- Adding CV photo to CV ✅
- Printing document ✅
- Other document templates
- Drag'n'drop elements on templates✅

## React Components

This projects uses React components to handle the GUI of the application. Components are situated in the root ```/components``` folder.

### Using React components

The React components are rendered in the DOM through unique ID's set to divs or other html tags.

For example, for a div with the id ```#page```, we can render a React component ```Page```.

```const domContainer = document.querySelector('#page');```
```ReactDOM.render(e(Page), domContainer);```

To use the component in the application, you must also include the component through a script tag at the end of the ```body``` tag, e.g.:

```script(src :="/js/page.js")```, where the ```/js``` refers to the ```/components```folder.

### React without JSX

This projects doesn't use JSX, as we're not using Babel to intrepret .jsx files.

## Credits

Made by Mikael Pernu and Kalle Laitinen. 