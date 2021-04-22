# Skyguide : An interactive game guide

[Skyguide](https://alexjohnives.github.io/skyguide/)

<https://alexjohnives.github.io/skyguide/index.html>

An interactive memory aid to collecting winged lights in Sky: Children of the light

![Website shown on different display sizes](https://github.com/alexjohnives/skyguide/blob/master/assets/images/skyguideresponse.png)

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
  * [Languages Used](#languages-used)
  * [Tools, Frameworks, Libraries and Programs used](#tools--frameworks--libraries-and-programs-used)
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
    + [CSS Test Warnings](#css-test-warnings)
    + [CSS Test Warning Fixes](#css-test-warning-fixes)
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
- [Credits](#credits)
- [Code](#code)
- [Media](#media)
- [Acknowledgements](#acknowledgements)

# Introduction

I was a beta tester for this MMO (Massively Mulitplayer Online Game) in 2019. Having not played since it launched that same year, I revisited a couple of months ago to see how it had progressed. I discovered it had become incredibly popular with over 50 million downloads, a huge international online community and a significantly expanded virtual world to explore.

What first appealed to me about Sky, is it's a game that promotes community, kindness and friendship. For this reason it attracts a wide range of age groups, and particularly many younger players.

To progress, players have to collect light which they can trade for other in game currencies, and winged lights which they use to complete the final level of the game. For players who want to progress, they soon learn that there are patterns of play for collecting these two elements which yield the optimum results.

Winged lights in the game are at fixed locations, and there are over 100 of them. Once collected, these can be traded in once a week before the game resets on Sundays 0000 at UTC (-7hours).

Having learned that many players resort to reading game guides and watching videos, I thought that an interactive website could instead provide the optimum resource for players in locating and memorising these locations.

# Project goals

The goal of this project website is to create an interactive memory guide and resource for the online game Sky: Children of the light.

1. I wanted to present a guide that does not spoil the content of the game, and acts more as an interactive assistive visual aid, enabling first time and more experienced users to request only the information they require.

2. I wanted to create a site that provided engagement with the user, which promotes their experience of the game.

3. I wanted the website information to be laid out in a logical form which would facilitate players refering to it as they play.

4. I plan to take an expanded version of this website live in the future, and with this in mind wished to include a functioning contact section.

5. For returning users I hoped to provide a Sky reset clock and other Sky centric information they might find useful.

# User Experience

Users will be immediately struck by how much there is to memorise in Sky, and how quickly new users can be overwhelmed. Exploring the online community, I discovered fan sites and videos which provided guides to address this need to help locate items etc, but these required sifting though lengthy text guides, or watching videos that shared game content and were also generally non specific.

I imagined as a user a tool that would serve as a memory aid, showing me a visual reference in this example for each winged light location. This would allow information to be tailored to each user's personal experience, and would help identify the gaps in their knowledge of the game.

## First Time User

As a First Time user:

1. I want my first impression of the site's design to be positive and to be on brand with the overarching themes of the game, which are colourful, welcoming and positive.

2. I want the site purpose and use to be immediatly clear, with the emphasis being on getting the information I require.

3. I want to easily understand the content and find it engaging.

4. I would like to feel that the information is informative and enhancing my experience with the Sky game and community.

## Returning User requirements and expectations

As a Returning user:

1. Most important is that I can quickly locate the information I require.

2. That I can contact the site to make suggestions, provide feedback or request content.

3. That the site is provided by a fan of the game who is familiar with the nomenclature and game culture.

# Design 

My immediate inspiration for the website was the game itself, which is visually stunning. It also resonates with me like its predessor Journey, which clearly has an Asian cultural influence incorporating Buddist iconography and architecture, traditional East Asian styings and anime. As a master's graduate in Chinese with over a decade living and working in East Asia, there is an aesthetic to the game that is both immediate and familiar to me.

Perhaps because of this combined with the source material, I immediately had a clear vision for how I wanted my site to look. I utilised the game logo, images from the game and a sky blue to white gradient for my wireframes drawn up in the IOS app Procreate.

I modifyed the logo with the additon of the word 'guide' in a warm orange, which I took inspiration for from my game avatar's kimono cape.

![Skyguide wireframe 1](https://github.com/alexjohnives/skyguide/blob/master/assets/images/wireframe1.jpg)

Together with the blue to white gradiant for the background to reflect a blue sky, I felt the wireframes immediatly achieved a design foundation I was satisfied with.

![Skyguide wireframe 2](https://github.com/alexjohnives/skyguide/blob/master/assets/images/wireframe2.jpg)

From the outset I decided I wanted to use a HTML/ CSS responsive framework. I explored [Materialize](https://materializecss.com/) but settled on Bootstrap 5 instead as I am already familiar with the framework from my first project.

## Color Palette

I decided on keeping my design clean and concise. Rather than importing my background gradient from Procreate, I found an online tool [CSS Gradient](https://cssgradient.io/) to create the background.

For the other colours of the website I referred to the game and used the Google extension [Eye Dropper](https://eyedropper.org/) to take colour references. I then modified these in Procreate and approached the colour styings for this project using my own judgment. These can be seen in the area logos I created to add a more personal element to the site.

## Typography

I referred to the game website [Sky: Children of the light](https://thatgamecompany.com/sky/) and liked their use of the google font Lato, which I paired with Roboto for the website text. Sans Serif was selected as the fallback font.

## Icons

Utilising bootstrap in the creation of this site I used their newly released Bootstrap Icons v1.4.0 package [Bootstrap Icons](https://icons.getbootstrap.com/), but have only used one icon for the scroll to top page function.

## Images and Photo Media

With a couple of exceptions, all the images and movie elements utilised in this project were taken by me using the in game photo and film capture options.

![Winged Light](https://github.com/alexjohnives/skyguide/blob/master/assets/images/wingedlight.png)

This winged art image on the front page was created by user PlagueDoctorJed who I contacted through the [Sky Fandom Page](https://sky-children-of-the-light.fandom.com/wiki/Sky:_Children_of_the_Light) and gave permission for its use in this site.

![Winged Light](https://github.com/alexjohnives/skyguide/blob/master/assets/images/plaguewings.png)


## Other resources

The aforementioned [Sky Fandom Page](https://sky-children-of-the-light.fandom.com/wiki/Sky:_Children_of_the_Light) was invaluable for planning the logic of presenting the information.

Text from the site's winged light guide was used and modified.

Fan art and maps ![Sky Winged light location map](https://github.com/alexjohnives/skyguide/blob/master/assets/images/locationmap.png) proved invaluable.

## Languages Used

HTML5

CSS

Javascript

## Tools, Frameworks, Libraries and Programs used

[Visual Studio Code](https://code.visualstudio.com/): Version 1.55.2 was used as code editor. I cloned my Github repository and pushed most of my work from this environment.

[Procreate](https://procreate.art/): I've found this app invaluable for creating the website wireframes, image editing and logos for this project.

[Bootstrap 5.0.0 Beta 3](https://getbootstrap.com): I used the latest release of Bootstrap to assist with the responsiveness and styling of the website. I discovered that it was so new documentation about new features was sometimes limited. I did however refer a great deal to the Bootstrap 5 website documentation and examples.

[Bootstrap Icons v1.4.0](https://icons.getbootstrap.com): Bootstrap’s own icon set was employed for the scroll to top icon.

[Google Chrome](https://www.google.ca/intl/en_ca/chrome/): Google Chrome’s browser inspect feature was used to check website responsiveness and error check javascript code.

[Google Fonts](https://fonts.google.com): Lato and Roboto were imported to the document’s header via links and referenced in CSS.

[Git](https://www.gitpod.io): Was used when contacting student support and for version control.

[Github](https://github.com/): Used to store the project code pushed from Git.

[Apple Quicktime](https://support.apple.com/en-gb/guide/quicktime-player/welcome/mac): Quicktime was used for video editing and primarily removing audio from recorded content.

[Apple Preview](https://support.apple.com/en-gb/guide/preview/welcome/mac) Was used for the occastional photo edit

# Testing User Stories from (UX) section

## Revisiting first time User goals

1. I want my first impression of the site's design to be positive and to be on brand with the overarching themes of the game, which are colourful, welcoming and positive.

-   The user is greeted by a clean design featuring familiar elements including the game logo and a bright colour scheme.

2. I want the site purpose and use to be immediatly clear, with the emphasis being on getting the information I require.

-   The landing page clearly and consisely details the purpose and use of the site.

3. I want to easily understand the content and find it engaging.

-   Each page contains a simple explanation and clickable content providing immediate responsiveness.

4. I would like to feel that the information is informative and enhancing my experience with the Sky game and community.

-   The clickable information content includes a visual reminder, concise text and a video.

## Revisiting returning User goals

As a Returning and Frequent visitor:

1. Most important is that I can quickly locate the information I require.

-   For any game user, the information is presented in a logic that is already familiar.

2. That I can contact the site to make suggestions, provide feedback or request content.

-   A contact form is included powered by Email JS.

3. That the site is provided by a fan of the game who is familiar with the nomenclature and game culture.

-   The site uses words and references that users will already be familiar with. The information sections.

# Testing

The website was tested on popular browsers incluing Google Chrome, Safari, Opera and Mozilla Firefox.

## HTML Testing

Html code was tested using the [W3 HTML Validator](https://validator.w3.org/)

### HTML Test Errors

Running the pages through the validator, I discovered consistent errors thoughout which were due to the use of

1. A redundant Navbar ID (navebarDropdown) that was present in the Bootstrap example
2. Sections lacking heading tags.

I've includeded a sample error report from the sanctuary page that documents these errors accross all the pages.


![HTML result 1 Sanctuary a](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatorsanctuary1.jpg)

![HTML result 2 Sanctuary b](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatorsanctuary2.jpg)

In addition the Validator flagged up a problem with the use of the countholder id for the clock display div element.

![HTML result 3 Eden](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatoreden.jpg)

Also, for the Contact form the validator listed the use of the 'textarea' field and 'type' as errors. These were from when I was trying different methods to create the contact form and I clearly forgot to remove them.

![HTML result 4 Contact a](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatorcontact1.jpg)

![HTML result 5 Contact b](https://github.com/alexjohnives/skyguide/blob/master/assets/images/validatorcontact1.jpg)

### HTML Test Fixes

Once all the redundant elements from the Navbar etc and the section tags were removed from the html, I restructured my text to incororate h1 and h2 titles. This solved most of the issues. 

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

### CSS Test Warnings

![CSS result 3]()

### CSS Test Warning Fixes

## Accessibility Testing

[Google Lighthouse](https://developers.google.com/web/tools/lighthouse) and [Wave](https://wave.webaim.org/) Web Accessibility Evaluation Tool were used to test this website.

## Accessibility Testing results - WAVE

![Wave Results for index.html]()

![Wave Results for about.html]()

### WAVE Errors

![Wave Errors corrected for index.html]()

![Wave Errors corrected for about.html]()

### WAVE Alerts

### WAVE Test Fixes

## Accessibility Test results - Google Lighthouse

### Mobile

![Google Lighthouse Results for index.html]()

![Google Lighthouse Results for about.html]()

### Desktop

![Google Lighthouse Results for index.html]()

![Google Lighthouse Results for index.html]()

### Accessibility Test Analysis - Google Lighthouse

![Google Lighthouse Results for index.html]()

## Responsiveness Testing

Responsiveness was tested using first [Responsinator](https://www.responsinator.com/)

![Responsinator Results for index.html]()

I inspected the website using [Google Device Mode](https://developers.google.com/web/tools/chrome-devtools/device-mode) mode across a number of devices and encountered no issues.

# Bugs

During the development of this website I encountered a couple of glitches.

## Known Bugs

There are no known bugs on this website.

## Other points of note


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

# Credits

-   All content was written by the developer with exceptions detailed below:

# Code

    The code was modified for the purposes of this project.

# Media

-   Credit to all the artists whose creative content features on this site, permission has been asked and granted for our collaborations and creative product to be documented here.

# Acknowledgements

-   Thank you to my tutor Reuben Ferrante for his feedback, knowledge and positive guidance. Also

-   Thanks to Dr Lindsey Smith for all the cups of tea put my way while working.
