<p align="center">
  <img alt="micro-frontend-frameworks logo" src="https://raw.githubusercontent.com/micro-frontend-frameworks/docs/main/assets/logo.png" height="200" width="200" />
  <h3 align="center">NextJS microfrontend framework with run-time integration approach</h3>
</p>

---

- [Strenghts](#strenghts)
- [Weaknesses](#weaknesses)
- [Playing with the POC](#playing-with-the-poc)
- [Architecture](#architecture)
  - [Interaction Overview](#interaction-overview)

## Strenghts

- Each microfrontend can be deployed independently.

## Weaknesses

- Client-side rendering is not an option.

## Playing with the POC

Unfortunatelly, you can't play with this POC unless you configure your own Vercel instance to take care of the deployments of the micro-frontend applications. That is because I didn't implement a programmatic deployment workflow for this POC (too much effort for a POC).

## Architecture

### Interaction Overview

![Microfrontend Framework](https://raw.githubusercontent.com/micro-frontend-frameworks/docs/main/assets/nrti.svg)
