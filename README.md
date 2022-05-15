# NOTE

nrwl is the company who created NX (Narwhal extensions)

 npm i @nrwl/angular   

 npx nx generate @nrwl/angular:application customer-portal --routing

 npx nx serve customer-portal

 npx nx e2e customer-portal-e2e --watch (test ui)

 npx nx generate @nrwl/angular:lib auth --routing

 npx nx generate @nrwl/angular:component containers/login --project=auth

  npx nx generate @nrwl/angular:component components/login-form --project=auth

npx nx generate @nrwl/angular:lib data-models

nx generate @nrwl/angular:service services/auth/auth --project=auth

 ## Components Presentational 

- UI presentation look and feel 
- HTML and CSS
- No dependencies with the rest of the app
- Don't specifyc how data is loaded or changed but emit events via @Output 
- Reciecve data via @Input
- May contain other components 

## Components Container

- Concerned with how things work
- Have LITTLE to NONE html AND css
- HAVE injected dependencies 
- Are stateful and specify how data is loaded and changed
- Top level route
- May contain other components
