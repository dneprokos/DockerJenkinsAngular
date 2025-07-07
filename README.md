# DockerJenkinsAngular
A traning project first designed to pratice in docker containers and then updated with a different page elements.
Can be a good pratice in UI automation 
Deployed on Firebase: https://qa-automation-test-site.web.app/ 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Running end-to-end tests in docker container
Docker and docker-compose should be installed

Run following command "docker-compose up" in root project directory(wait until installation has finished).

Run "docker exec -it testapp protractor ./e2e/protractor-ci.conf.js" in the same root directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deploy to firebase

- Firebase account should be created https://firebase.google.com/ 

1. Install firebase-tools with command - "npm install -g firebase-tools"
2. Build production env with command "npm run build-prod"
3. Login to firebase account "firebase login"
4. Initialize firebase "firebase init". 

Select the following items:
a) Configure and deploy Firebase Hosting sites 
b) What do you want to use as your public directory? (public) - Specify "dist/<project name in dist directory>"
c) Configure as a single-page app (rewrite all URLs to /index.html)? - Select No

5. Run deploy "fire-deploy-hosting"

Note: This deployment instruction was working with Angular version 12.2.2

### Why did this happen?
During the `firebase init hosting` step, the script (or the CLI prompt) set the **public directory** to `public` (the default), not to your Angular build output (`dist/docker-jenkins-angular`).  
So, Firebase is deploying the contents of the `public` folder, not your Angular app.

---

## How to Fix

1. **Update Firebase Hosting config to use your Angular build output:**
   - The correct public directory should be:  
     `dist/docker-jenkins-angular`

2. **Edit `firebase.json`:**
   - Open `firebase.json` and set:
     ```json
     {
       "hosting": {
         "public": "dist/docker-jenkins-angular",
         "ignore": [
           "firebase.json",
           "**/.*",
           "**/node_modules/**"
         ],
         "rewrites": [
           { "source": "**", "destination": "/index.html" }
         ]
       }
     }
     ```

3. **Delete the `public` folder** (optional, to avoid confusion).

4. **Rebuild and redeploy:**
   ```sh
   npm run build-prod
   firebase deploy --only hosting
   ```

---

Would you like me to automatically update your `firebase.json` and redeploy for you?




