### Live Demo
https://charleswang007.github.io/thriving-boards/

### Run Project Locally
```
1. git clone 
2. cd thriving-boards
3. npm i
4. npm run serve
```

### Publish
```
npm run deploy
```

### Publish to Azure App Service
1. vue.config.js
```
//publicPath: "/thriving-boards/",
publicPath:"./",
outputDir:"dist",
```
2. npm run build
3. right click on dist folder, select "deploy to web app".

### Technologies
- Vue.js
- JavaScript
- HTML5
- CSS3
- Webpack
- npm

### Screenshot
![screenshot](screenshot.png)
