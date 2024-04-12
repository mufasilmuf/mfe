## Micro-Frontend Ecom Web Application:

Created the simple micro frontend application using module federation with webpack.

#### Flow Architecture:

![mfe-flow-architecture](https://ecom-mfe.s3.amazonaws.com/mfe-flow-arct.png)

#### Mfe Tech Stacks:

![mfe-tech-stacks](https://ecom-mfe.s3.amazonaws.com/mfe-stacks.png)

---

### Setup:

1. Clone the github repo.

2. Add the dependence on all micro-frontend apps, navigate to below packages and run `npm install`.

```
 cd packages/auth
 cd packages/container
 cd packages/dashboard
 cd packages/marketing
```

3. Start the each micro frontend seperately using `npm start`, different port config for each service, so run each mfe run on isolation.

> Container main app run on http://localhost:8080/
> Auth run on http://localhost:8080/
> Dashboard run on http://localhost:8080/
> Marketing run on http://localhost:8081/

---
#### MFE Consisderation Table:

Mention things are important consisdration on creating micro frontend application and it help to debug and resolve the error and handle problems.

| Issue        | Solutions    |
| ------------ | ------------ |
| Content Cell | Content Cell |
| Content Cell | Content Cell |
