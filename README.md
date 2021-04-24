# Skyguide : An interactive game guide to Sky Children of the light 

[Skyguide](https://alexjohnives.github.io/skyguide/)

<https://alexjohnives.github.io/skyguide/index.html>

An interactive memory aid and guide to collecting winged lights in Sky: Children of the light

![Website shown on different display sizes](https://github.com/alexjohnives/skyguide/blob/master/assets/images/skyguideresponse.png)

# Table of contents
- [Table of contents](#table-of-contents)
- [Introduction](#introduction)
- [Project goals](#project-goals)
- [User Experience](#user-experience)
  * [First Time User](#first-time-user)
  * [Returning User requirements and expectations](#returning-user-requirements-and-expectations)
- [Design](#design)
  * [Color Palette](#color-palette)
  * [Typography](#typography)
  * [Icons](#icons)
  * [Images and Photo Media](#images-and-photo-media)
  * [Other resources](#other-resources)
  * [Languages Used](#languages-used)
  * [Tools, Frameworks, Libraries and Programs used](#tools--frameworks--libraries-and-programs-used)
- [Skyguide Javascript Code Development](#skyguide-javascript-code-development)
  * [Step 1: Skytest Toggle Display.](#step-1--skytest-toggle-display)
  * [Step 2: Skyguide](#step-2--skyguide)
  * [Step 3: Email JS](#step-3--email-js)
  * [Step 4: Scroll](#step-4--scroll)
  * [Step 5: Eden clock](#step-5--eden-clock)
- [Testing User Stories from (UX) section](#testing-user-stories-from--ux--section)
  * [Revisiting first time User goals](#revisiting-first-time-user-goals)
  * [Revisiting returning User goals](#revisiting-returning-user-goals)
- [Testing](#testing)
  * [HTML Testing](#html-testing)
    + [HTML Test Errors](#html-test-errors)
    + [HTML Test Fixes](#html-test-fixes)
  * [CSS Testing](#css-testing)
    + [CSS Test Errors](#css-test-errors)
    + [CSS Test Error Fixes](#css-test-error-fixes)
  * [Javascript Testing](#javascript-testing)
  * [Accessibility Testing](#accessibility-testing)
  * [Accessibility Testing results - WAVE](#accessibility-testing-results---wave)
    + [WAVE Errors](#wave-errors)
    + [WAVE Alerts](#wave-alerts)
    + [WAVE Test Fixes](#wave-test-fixes)
  * [Accessibility Test results - Google Lighthouse](#accessibility-test-results---google-lighthouse)
    + [Mobile](#mobile)
    + [Desktop](#desktop)
    + [Accessibility Test Analysis - Google Lighthouse](#accessibility-test-analysis---google-lighthouse)
  * [Responsiveness Testing](#responsiveness-testing)
- [Bugs](#bugs)
  * [Known Bugs](#known-bugs)
  * [Other points of note](#other-points-of-note)
- [Deployment](#deployment)
    + [GitHub Pages](#github-pages)
    + [Forking the GitHub Repository](#forking-the-github-repository)
    + [Making a Local Clone](#making-a-local-clone)
    + [Github Pages](#github-pages)
- [Code acknowledgments](#code-acknowledgments)
- [Media](#media)
- [Acknowledgements](#acknowledgements)

# Introduction

[Sky: Children of the Light Official Game Website](https://thatgamecompany.com/sky/)

I was a beta tester for this MMO (Massively Mulitplayer Online Game) in 2019. Having not played since it launched that same year, I revisited a couple of months ago to see how it had progressed. 

I discovered it had become incredibly popular with over 50 million downloads, a huge international online community and a significantly expanded virtual world to explore.

![Sky: Children of the Light](https://github.com/alexjohnives/skyguide/blob/master/assets/images/skythatgamecompany.png)

What first appealed to me about Sky, is it's a game that promotes community, kindness and friendship. For this reason it attracts a wide range of age groups, with the creator Jenova Chen stating he wanted to create a game that even families could play together.

To progress, players have to collect light which they can trade for other in game currencies, and winged lights which they use to complete the final level of the game. Players soon learn that there are patterns of play for collecting these two elements which yield the optimum results.

Winged lights in the game are at fixed locations, and there are over 100 of them. Once collected, these can be traded in once a week before the game resets on Sundays at 0000 PST or PDT UTC (-8hours or -7hours).

Having learned that many players resort to reading game guides and watching videos, I thought that an interactive website could instead provide the optimum resource for players in locating and memorising these locations.

# Project goals

The goal of this project website is to create an interactive memory guide and resource for the online game Sky: Children of the light.

1. I wanted to present a guide that does not spoil the content of the game, and acts more as an interactive assistive visual aid, enabling first time and more experienced users to request only the information they require.

2. I wanted to create a site that provided engagement with the user, which promotes their experience of the game and is visually appealing.

3. I wanted the website information to be laid out in a logical form which would facilitate players referring to it as they play.

4. I plan to take an expanded version of this website live in the future, and with this in mind wished to include a functioning contact section.

5. For returning users I hoped to provide a Sky reset clock and other Sky centric information they might find useful.

# User Experience

Users will be immediately struck by how much there is to memorise in Sky, and how quickly new users can be overwhelmed. Exploring the online community, I discovered fan sites and videos which provided guides to address this need to help locate items etc, but these required sifting though lengthy text guides, or watching videos that shared game content and were also generally non specific.

I imagined as a user a tool that would serve as a memory aid, showing me a visual reference in this example for each winged light location. This would allow information to be tailored to each user's personal experience, and would help identify the gaps in their knowledge of the game.

## First Time User

As a First Time user:

1. I want my first impression of the site's design to be positive and to be on brand with the overarching themes of the game, which are colourful, vibrant welcoming and positive.

2. I want the site purpose and use to be immediately clear, with the emphasis being on getting the information I require.

3. I want to easily understand the content and find it engaging.

4. I would like to feel that the information is informative and enhancing my experience with the Sky game and community.

## Returning User requirements and expectations

As a Returning user:

1. Most important is that I can quickly locate the information I require.

2. That I can contact the site to make suggestions, provide feedback or request content.

3. That the site is provided by a fan of the game who is familiar with the nomenclature and game culture.

# Design 

My immediate inspiration for the website was the game itself, which is visually stunning. It also resonates with me like its predecessor Journey, which clearly has an Asian cultural influence incorporating Buddist iconography and architecture, traditional East Asian stylings and anime. As a master's graduate in Chinese with over a decade living and working in East Asia, there is an aesthetic to the game that is both immediate and familiar to me.

Perhaps because of this combined with the source material, I immediately had a clear vision for how I wanted my site to look. I utilised the game logo, images from the game and a sky blue to white gradient for my wireframes drawn up in the IOS app Procreate.

I modified the logo with the addition of the word 'guide' in a warm orange, which I took inspiration for from my game avatar's kimono cape.

![Skyguide wireframe 1](https://github.com/alexjohnives/skyguide/blob/master/assets/images/wireframe1.jpg)

Together with the blue to white gradient for the background to reflect a blue sky, I felt the wireframes   immediately achieved a design foundation I was satisfied with.

![Skyguide wireframe 2](https://github.com/alexjohnives/skyguide/blob/master/assets/images/wireframe2.jpg)

From the outset I decided I wanted to use a HTML/ CSS responsive framework. I explored [Materialize](https://materializecss.com/) but settled on Bootstrap 5 instead as I am already familiar with the framework from my first project.

## Color Palette

I decided on keeping my design clean and concise. Rather than importing my background gradient from Procreate, I found an online tool [CSS Gradient](https://cssgradient.io/) to create the background.

For the other colours of the website I referred to the game and used the Google extension [Eye Dropper](https://eyedropper.org/) to take colour references. I then modified these in Procreate and approached the colour stylings for this project using my own judgment. These can be seen in the area logos I created to add a more personal element to the site.

The one colour I avoided was Red. Sky has a large asian following and red text has negative connotations. With this knowledge, I thought it was best to avoid it's use.

I experimented with different text colours and settled on using a black with the opacity adjusted to soften the visual, but keep everything legible.

## Typography

I referred to the game website [Sky: Children of the light](https://thatgamecompany.com/sky/) and liked their use of the google font Lato, which I paired with Roboto for the website text. Sans Serif was selected as the fallback font.

## Icons

Utilising bootstrap in the creation of this site I used their newly released Bootstrap Icons v1.4.0 package [Bootstrap Icons](https://icons.getbootstrap.com/), but have only used one icon for the scroll to top page function.

## Images and Photo Media

With the couple of exceptions listed below, all the artwork, images and film elements utilised in this project were created by me using the in game photo and film capture options.

![Winged Light](https://github.com/alexjohnives/skyguide/blob/master/assets/images/wingedlight.png)

This winged art image on the front page was created by user PlagueDoctorJed who I contacted through the [Sky Fandom Page](https://sky-children-of-the-light.fandom.com/wiki/Sky:_Children_of_the_Light) and gave permission for its use in this site.

![Winged Light](https://github.com/alexjohnives/skyguide/blob/master/assets/images/plaguewings.png)


## Other resources

The aforementioned [Sky Fandom Page](https://sky-children-of-the-light.fandom.com/wiki/Sky:_Children_of_the_Light) was invaluable for planning the logic of presenting the information.

Text from the site's winged light guide was referenced with permission.

Fan art and maps such as the following example also proved useful as references ![Sky Winged light location map](https://github.com/alexjohnives/skyguide/blob/master/assets/images/locationmap.png)

## Languages Used

HTML5

CSS

Javascript

## Tools, Frameworks, Libraries and Programs used

[Visual Studio Code](https://code.visualstudio.com/): Version 1.55.2 was used as code editor. I cloned my Github repository and pushed most of my work from this environment. I tried to utitlise the Prettier formatter extension but encountered some issues and so returned to the default.

[Procreate](https://procreate.art/): I've found this app invaluable for creating the website wireframes, image editing and logos for this project.

[Bootstrap 5.0.0 Beta 3](https://getbootstrap.com): I used the latest release of Bootstrap to assist with the responsiveness and styling of the website.

[Bootstrap Icons v1.4.0](https://icons.getbootstrap.com): Bootstrap’s own icon set was employed for the scroll to top icon.

[Google Chrome](https://www.google.ca/intl/en_ca/chrome/): Google Chrome’s browser inspect feature was used to check website responsiveness and error check javascript code.

[Google Fonts](https://fonts.google.com): Lato and Roboto were imported to the document’s header via links and referenced in CSS.

[Git](https://www.gitpod.io): Was used when contacting student support and for version control.

[Github](https://github.com/): Used to store the project code pushed from Git.

[Apple Quicktime](https://support.apple.com/en-gb/guide/quicktime-player/welcome/mac): Quicktime was used for video editing and primarily removing audio from recorded content.

[Apple Preview](https://support.apple.com/en-gb/guide/preview/welcome/mac) Was used for the occastional photo edit

# Skyguide Javascript Code Development

## Step 1: Skytest Toggle Display.

I have found the leap from using HTML and CSS to incorporating Javascript very challenging. While considering what project I wanted to create, I decided to focus on creating an interactive website of my own design.

Unsure about how but working through what I wanted to achieve, I built a practice website Skytest.

The method I came up with to achieve the click and display information aspect of the site, was based on showing and hiding HTML div elements. This was inspired by an website design tutorial by Brad Traversy [Traversy Media](https://www.traversymedia.com/) on [Udemy](https://www.udemy.com/) I followed where he uses a simple Javascript to expand on click picture elements on a webpage.

After watching this, I found the approach I desired here [W3schools - how to toggle and hide/ show](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp)

From this example I expanded the code to what you see below.

![Skytest JS](https://github.com/alexjohnives/skyguide/blob/master/assets/images/skytestJS.png)

In this code, which I began with at the outset of Skyguide, a click select class was added to all images with the class of img-select, via function addImageSelector.

For each image then, the toggle active class was applied.

The second function selectImage checked to see if the div linked to that image was displayed, and if not it was. Here the HTML code shows for example clicking on the image with id"i0" would toggle the display of div id"i0div" to display or not.
![Skytest HTML](https://github.com/alexjohnives/skyguide/blob/master/assets/images/skytestJS.png)

I was happy with this solution, but after discussing with my mentor he made me aware of some problems with this approach.

1. Since all the code, links and associated media are loaded into the HTML document, for the more extensive project I had in mind this would result in slow loading times, and massive downloads of content for site users that may not be required.

2. This solution was too code light to constitute a strong project submission, and so we discussed finding a more effective approach to achieve this site functionality, and some other Javascript elements to incorporate.

## Step 2: Skyguide

My mentor suggested to me creating a variable which would contain all the information to be called on a click event. He game me an example of how this could be approached and I researched using Javascript for dynamic HTML.

This next stage produced the code in the project files data.js and script.js. I have commented on the code in these files.

## Step 3: Email JS

After completing this new method, I discussed some further ideas for additional javascript elements I could include in the site. Having worked through the Code Institute tutorial for creating a functioning backend for a contact form with EmailJS, this seemed like a useful addition to the site.

However, having only followed the provided source code for the tutorials, I discovered that EmailJS has significantly updated it's service and after trying to unsuccessfully implement this functionality following the CI materials, I instead resorted to the official website docs for [EmailJS](https://www.emailjs.com/docs/).

I have commented in the sendEmail.js file on this code. 

## Step 4: Scroll

Once my contact form was functioning correctly, I remembered having seen some examples of scroll functions on websites which clearly used Javascript to appear on scroll etc. At this point in the website's development I already had an html scroll to top button placed on a footer element, but I was interested to try this alternative approach.

I used the code from this [W3Schools](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp) guide and replaced my html with a javascript scroll to top function.

## Step 5: Eden clock

The final feature I wished to include on this site is a countdown timer. I watched numerous tutorials, and discussed with my mentor in our final meeting possibly using an API clock feature. However, this was dismissed as perhaps not the best solution.

For players in Sky, each week the game resets at 00:00 Pacific Standard Time (PST/UTC-8), currently 0000 PDT/UTC-7 during Daylight Saving Time. When I learned exactly what UTC is and that Javascript can utilise it, I knew there would be a solution.

I watched many tutorials about creating countdown timers, and the closet solution I came to myself was to create a timer that counted down to a specific date.

Then I found this tutorial by [Vincoding](https://vincoding.com/weekly-repeating-countdown-timer-javascript*/) which I modified to create a weekly countdown clock that gives accurate time conversion and should reset at 00:00 PDT (07:00 UTC) every Sunday during daylight saving time. When the PDT switches back to PST for the game creators, the clock only requires to be modified by a digit for the correct time to continue to be displayed.

# Testing User Stories from (UX) section

## Revisiting first time User goals

1. I want my first impression of the site's design to be positive and to be on brand with the overarching themes of the game, which are colourful, welcoming and positive.

-   The user is greeted by a clean design featuring familiar elements including the game logo and a bright colour scheme.

2. I want the site purpose and use to be immediately clear, with the emphasis being on getting the information I require.

-   The landing page clearly and concisely details the purpose and use of the site.

3. I want to easily understand the content and find it engaging.

-   Each page contains a simple explanation and clickable content providing immediate responsiveness.

4. I would like to feel that the information is informative and enhancing my experience with the Sky game and community.

-   The clickable information content includes a visual reminder, concise text and a video. The addition of the Eden clock is extremely useful and as a player I would refer to it!

## Revisiting returning User goals

As a Returning and Frequent visitor:

1. Most important is that I can quickly locate the information I require.

-   For any game user, the information is presented in a logic that is already familiar.

2. That I can contact the site to make suggestions, provide feedback or request content.

-   A contact form is included powered by Email JS.

3. That the site is provided by a fan of the game who is familiar with the nomenclature and game culture.

-   The site uses words and references that users will already be familiar with. The information sections.


# Testing

The website was tested on popular browsers including Google Chrome, Safari, Opera and Mozilla Firefox.

## HTML Testing

Html code was tested using the [W3 HTML Validator](https://validator.w3.org/)

### HTML Test Errors

Running the pages through the validator, I discovered consistent errors throughout which were due to the use of

1. A redundant Navbar ID (navebarDropdown) that was present in the Bootstrap example
2. Sections lacking heading tags.

I've included a sample error report from the sanctuary page that documents these errors across all the pages.


![HTML result 1 Sanctuary a](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatorsanctuary1.jpg)

![HTML result 2 Sanctuary b](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatorsanctuary2.jpg)

In addition the Validator flagged up a problem with the use of the countholder id for the clock display div element.

![HTML result 3 Eden](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatoreden.jpg)

Also, for the Contact form the validator listed the use of the 'textarea' field and 'type' as errors. These were from when I was trying different methods to create the contact form and I clearly forgot to remove them.

![HTML result 4 Contact a](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatorcontact1.jpg)

![HTML result 5 Contact b](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatorcontact1.jpg)

### HTML Test Fixes

Once all the redundant elements from the Navbar etc and the section tags were removed from the html, I restructured my text to incorporate h1 and h2 titles. This solved most of the issues. 

The website was retested and all the pages passed without any warnings or errors, except Eden.

## CSS Testing

CSS was tested using the W3C CSS Validator Services

[CSS Validator] - (<https://jigsaw.w3.org/css-validator/validator>)

### CSS Test Errors

The CSS Validator showed a Parse error, which I could not understand until I reviewed my code and found a rouge '/*' open comment remaining

![CSS Error result](https://github.com/alexjohnives/skyguide/blob/master/assets/images/csserror.png))

### CSS Test Error Fixes

Once this was removed, the CSS code received the all clear

![CSS Validation successful](https://github.com/alexjohnives/skyguide/blob/master/assets/images/cssclear.png))

## Javascript Testing

I passed this project's Javascript code through [Esprima](https://esprima.org/demo/validate.html) and [beautifytools.com](https://beautifytools.com/javascript-validator.php) validators to check for errors. None were found although suggestions for alternate syntax were made.


## Accessibility Testing

[Google Lighthouse](https://developers.google.com/web/tools/lighthouse) and [Wave](https://wave.webaim.org/) Web Accessibility Evaluation Tool were used to test this website.

## Accessibility Testing results - WAVE

Using [Wave](https://wave.webaim.org/) to view the site, it flagged up several areas needing attention.

![Wave Results for index.html](https://github.com/alexjohnives/skyguide/blob/master/assets/images/waveindex.png)

Consistent accross all the pages I was missing decriptive alt tags for the images and Navbar brand. The tool also revealed that the Navbar had some duplicate links, and I clarified the function of aria labels.

The only other issue the site reported was with my scroll to top button, which was flagged as an alert as 'a device dependant handler', which of course cannot be used by keyboard users. As it is only a button to add convenience for scrolling functionality, I did not make any changes. 

### WAVE Test Fixes

![Wave Results for butterfly.html](https://github.com/alexjohnives/skyguide/blob/master/assets/images/waveprarie.png)

I worked my way through the html files and added missing alt descriptions, changed the text structure to include logical headings structure flow etc. 

While using the site I discovered that if I clicked on my dropdown Navbar elements and there was not a link attached, then the site would report a missing link. I left href"#" elements in For the Ilse and Prarie buttons so that when dropdowns were clicked, they always linked to the current page. This I am not sure if it is best practice, but looking at references and to keep the current structure, it seemed the best solution without risking dead links.

After these changes were made, no errors were reported and only alerts remained about the scroll navigation and duplicate links in the navbar.

## Accessibility Test results - Google Lighthouse

Inspecting both the desktop and mobile versions of my website, I generated lighthouse reports which again showed recurring results for each webpage. I've included sample reports for the site index.html as a reference.

### Mobile

![Google Lighthouse Results 1 for index.html](https://github.com/alexjohnives/skyguide/blob/master/assets/images/lighthousemobile1.png)

![Google Lighthouse Results 2 for index.html](https://github.com/alexjohnives/skyguide/blob/master/assets/images/lighthousemobile2.png)

### Desktop

![Google Lighthouse Results 1 for index.html](https://github.com/alexjohnives/skyguide/blob/master/assets/images/lighthouse1.png)

![Google Lighthouse Results 2 for index.html](https://github.com/alexjohnives/skyguide/blob/master/assets/images/lighthouse2.png)

![Google Lighthouse Results 3 for index.html](https://github.com/alexjohnives/skyguide/blob/master/assets/images/lighthouse3.png)


### Accessibility Test Analysis - Google Lighthouse

Although I'm quite pleased with these results, they do highlight a couple of areas which I'm aware I need to improve in. 

The first is correctly sizing and implementing image content, and the report clearly shows that this can be optimised. Currently the images are stated to be displayed at the incorrect aspect ratio, and also the incorrect resolution which results in page loading slowdown. At this stage of the project so close to submission, I will take this information and find out what I can do to improve this aspect of my design going forward.

Lighthouse also made me aware my website pages were lacking meta descriptions. This I amended and ran the tests again.

![Google Lighthouse Final test result for index.html](https://github.com/alexjohnives/skyguide/blob/master/assets/images/lighthousefinal.png)

After all these issues were addressed, I was satisfied that only my image sizing compromised my scores in the best practices section. Everywhere else, the site scored well.

## Responsiveness Testing

Responsiveness was tested using first [Responsinator](https://www.responsinator.com/)

At this point I noticed that the navbar toggler element was not functioning on my Home page. I opened the website on my 1st generation Iphone SE and confirmed that the toggler was non responsive on the Home page, but functioning for the rest of the site.

Comparing my code, at this point I realised by removing ids in the Navbar earlier, I had removed the toggler functionality by mistake. I restored and retested, and confirmed functionality had been restored.

The responsinator also made me aware that my iframe video embeds were not being optimally displayed. Taken on my Iphone this picture shows the issue.

![Incorrect sizing of Iframe on IphoneSE](https://github.com/alexjohnives/skyguide/blob/master/assets/images/iframedisplay.png)

I researched and found that this is a issue due to iframes requiring a defined width and height and aspect ratios. Bootstrap offers responsive classes for these elements [Bootstrap 5 Ratio](https://getbootstrap.com/docs/5.0/helpers/ratio/#example), but using column classes in my project I could not find a satisfactory solution using these.

Instead I found a CSS workaround, the best explanation I found here [Flavio Copes Responsive youtube videos](https://flaviocopes.com/responsive-youtube-videos).

When I applied this solution, the Iframes displayed and resized correctly.

![Corrected sizing of Iframe on IphoneSE](https://github.com/alexjohnives/skyguide/blob/master/assets/images/iframedisplaycorrected.png)

I reinspected the website using [Google Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode) mode, and these issues were resolved.

# Bugs

During the development of this website I did not encounter any bugs. 

## Known Bugs

There are no known bugs on this website.

## Other points of note

Just prior to submission, my mentor stated that if this website was to grow any further, a restructuring of the html pages and associated elements with a new folder structure would be desirable. However, he said at this time, it is probably on the cusp and therefore in his opinion unlikely I would be penalised for submitting it as is.

Following this, I looked into restructuring and again at this time recognise that this is an improvement that can be made, but choose to submit the project as it is.

# Deployment

The site has been deployed on Github pages. Please use the following link.
<https://alexjohnives.github.io/skyguide/index.html>

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    - Alternatively Click [Here](https://raw.githubusercontent.com/) for a GIF demonstrating the process starting from Step 2.
3. Scroll down the Settings page until you locate the "GitHub Pages" Section.
4. Under "Source", click the dropdown called "None" and select "Master Branch".
5. The page will automatically refresh.
6. Scroll back down through the page to locate the now published site [link](https://github.com) in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

### Github Pages

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/)
2. Under the repository name, click "Clone or download".
3. To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
4. Open Git Bash
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
> Cloning into `CI-Clone`...
> remote: Counting objects: 10, done.
> remote: Compressing objects: 100% (8/8), done.
> remove: Total 10 (delta 1), reused 10 (delta 1)
> Unpacking objects: 100% (10/10), done.
```

# Code acknowledgments

All content was written by the developer with exceptions detailed below:

Javascript repeating countdown clock code sourced then modified from [Vincoding.com](https://vincoding.com/weekly-repeating-countdown-timer-javascript/*/)

Scroll to top button code sourced then modified from [w3schools.com](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)

# Media

-   Credit to all the artists whose creative content features on this site, permission has been asked and granted for our collaborations and creative product to be documented here.

PlaguedoctorJed, whose real name is still unknown, agreed for his artwork to be used.

The [Sky Fandom and Wiki pages](https://sky-children-of-the-light.fandom.com/wiki/Sky:_Children_of_the_Light_Wiki) were an invaluable resource and again permission was given for them to be referenced in the development of this website.

# Acknowledgements

-   Thank you to my tutor Reuben Ferrante for his feedback, knowledge and positive guidance.

-   Thank you to tutor support at Code Institute. There are some very talented and knowledgable people there and their guidance has been invaluable.

-   Thanks to Dr Lindsey Smith for all the cups of tea put my way while working and continuing to share Canada lockdown life with me!
