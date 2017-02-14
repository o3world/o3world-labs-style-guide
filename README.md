# O3 Labs Style Guide

A Style Guide that is living document of the elements and components that make up O3 Labs projects.

#
![screenshot of project main page](/src/images/demo-screenshot.jpg)

## Github Pages Link

https://o3world.github.io/o3world-labs-style-guide/index.html

## O3 World's Website

http://o3world.com/

## Local Setup

Clone the repo and navigate into it.

````
git clone https://github.com/o3world/o3world-labs-style-guide.git
cd o3-labs-style-guide
````
Make sure you have Ruby Gems installed. If you do not you can find the download at the below link.

https://rubygems.org/pages/download#formats

Install Jekyll and plug-ins in one fell swoop. This mirrors plug-ins used by GitHub Pages on your local machine including Jekyll, Sass, etc.
````
gem install github-pages
````

Switch to development branch before running Jekyll and Gulp
````
git checkout development
````
cd to project root and run 
````
jekyll serve
````
View website at http://localhost:4000/ 

***NOTE: Jekyll may choose a different port. A terminal message will tell you the destination, but default is 4000***

Install gulp and gulp modules
````
npm install
````
Initialize gulp watch for css, js, and svg files
````
gulp watch
````
##Directory Structure

A Jekyll build will copy into the _site directory all top-level directories and files except those which start with an underscore (_layouts, _pages, etc.) or those listed in the config exclude. It will also build the Jekyll pages and place them into the _site folder accordingly.

* _includes
  - Includes content sections (typography, colors, etc.) as well as the structural elements of the style guide (components & sidebar) 
* _layouts
  - Template files used by Jekyll to build pages. Each page will have a template listed
* _layouts/default.html
  - The highest level template which is used for every page. It holds things like the head, scripts, etc.
* _site
  - The destination of the Jekyll build. NEVER EDIT THIS  
* index.html
  - Homepage
* styleguide.html
  - Style guide landing page where all content is pulled into

