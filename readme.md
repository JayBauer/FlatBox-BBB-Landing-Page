# Jay Bauer - Foundation Starter Site

This is the Foundation ZURB template, bastardized and customized by Jay Bauer for use at Elite Digital. Designed to be a starting point for all non-Wordpress sites. It includes the following:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript module bundling with webpack
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

### Installing the template via Git

This template is designed to be easily distributed through Git, using a few simple commands. This README will focus on the CLI method.

First, the repo must be cloned:
```bash
git clone [path]
```
```bash
cd [projectname]
```

After downloading the repo, run
```bash
npm install
```
to install the dependencies described in ```package.json```. This will take a few minutes. Afterwards, the installation should be complete and your project is ready to start.

## Working with the CLI

Foundation makes use of several commands in order to streamline the development and distribution process.

```bash
foundation watch
```
- This command will map your .scss files and create a pseudo-compiled CSS file, as well as begin watching your working folders for changes. After the command runs, it will open a tab in your browser with the current build of the website. Any changes made to any tracked folders will immediately be pushed through the BrowserSync process and update the view, allowing you to see changes made in real time.


```bash
foundation build
```
- This command will properly compile and minify all your SASS files, uglify/concatenate your JS files, and optimize your images. This will be moved to a "dist" folder in the root of your project. The contents of this folder are what should ultimately be delivered to the live or staging website.
