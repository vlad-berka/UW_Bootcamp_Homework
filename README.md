# Vladimir Berka's Homework #1, UW Bootcamp

## Assignment Description
This is a homework assignment for the UW Bootcamp and serves as a demonstration of semantic markup and refactor skills in a web developer environment. The goal of the assignment was to update a website for improved accessibility from the perspective of a potential on-the-job work order. Original HTML, CSS, and PNG images were provided. Specific tasks were written in the form of a user story and acceptance criteria, copied to the end of this document.

## Assignment Scope
Refactor a single landing page for a company that specializes in Search Engine Optimization. The content of the webpage is the company's services and their respective descriptions, with multiple images and a navigation bar. 

## Generalized Tasks
- Learn to read / understand AGILE User Stories and Acceptance Criteria
- Replace HTML tags in the original source code with their semantic equivalents
- Verify source code works and the website in general meet other listed Homework requirements
- Create a README.md file to describe the assignment and submission
- Push to GitHub

## Summary of Work Completed
All `div` and `span` HTML tags were substituted with appropriate semantic equivalents, such as `footer`, `section`, and `nav`. These were determined using educated guesses based on the flow and layout of the webpage. The CSS file then had to be updated to reflect the appropriate tag substitutions as some classes could be deleted in favor of new tags. There were a few errors in the code that needed to be corrected, like a broken hyperlink in the navigation bar to an anchor lower down in the website. Comments were then added into the CSS file for improved readability and understanding.

No new lines of code were written.
No new web page functionality added.

## List of Files
* README.md - This current read me file
* index.html - HTML file for the initial website
* ~./assets/css/style.css - CSS file for the above noted website in the css subdirectory of the assets directory
* ~./assets/images/brand-awareness.png - Multiple PNG files for the associated website in the images subdirectory of the assets directory
* ~./assets/images/cost-management.png
* ~./assets/images/digital-marketing-meeting.png
* ~./assets/images/lead-generation.png
* ~./assets/images/online-reputation-management.png
* ~./assets/images/search-engine-optimization.png
* ~./assets/images/social-media-marketing.png

# Original Homework Assignment Details

## User Story

```
AS A marketing agency
I WANT a codebase that follows accessibility standards
SO THAT our own site is optimized for search engines
```

## Acceptance Criteria

```
GIVEN a webpage meets accessibility standards
WHEN I view the source code
THEN I find semantic HTML elements
WHEN I view the structure of the HTML elements
THEN I find that the elements follow a logical structure independent of styling and positioning
WHEN I view the icon and image elements
THEN I find accessible alt attributes
WHEN I view the heading attributes
THEN they fall in sequential order
WHEN I view the title element
THEN I find a concise, descriptive title
```