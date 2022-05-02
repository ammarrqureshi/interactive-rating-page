# Interactive rating component


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

Took this mini challenge, just to test my skills. But in the time of Google and Youtube, nothing is limited. Only sky is the limit. Everything can be learnt from this Free University availaible on our finger tips. If you ever need a rating card for any of the project , check it out. This might help.

This file contains all the process, links and tech stack. Enjoy!

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


### Links

- Github URL: [Github Repo](https://github.com/ammarrqureshi/interactive-rating-page.git)
- Live Site URL: [Vercel Site](https://interactive-rating-page.vercel.app/)

## My process
1. I always start developing for mobile first (MOBILE-FIRST APPROACH)
2. Built the functionalities first
3. Used the inner box for the content and a outer box to adjust the padding collectively
4. Created separate functions for each of the small functionalities or interactions
5. Finally fixed the layout using CSS Flexbox (Flexbox is the Marvel of Universe)
6. ENDED WITH ADDING CUSTOM STYLES.
7. At the end a Readme file is the characteristic of Good Coder.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I learned
Had some issues with simple JS workflow and calls, this helped to clear them. Moreover I grasped the idea of project learning. Which means that you just hop on making projects that you think you cannot make, learn along the way from Google and Youtube (Or Stackoverflow You say!). This accelarate learning by 1000x;

Check this simple function I created to check the selected Rating:

```js
function displayRating()
    {
        var selectedItem;
    for(var item=0; item<document.form.rating.length; item++){
        if(document.form.rating[item].checked){
            selectedItem= document.form.rating[item].value;
             break;
            
        }
        

    }
    document.getElementById("selected").innerHTML= "You selected "+ selectedItem+" out of 5";
    }
```


### Continued development

I hope to use this card in some future SaaS product. Ui is amazing, just needs a real world usage.

### Useful resources

- [88 Free Custom Radio Buttons ](https://freefrontend.com/css-radio-buttons/) - grapped some ideas for further radio button designs.



## Author
- Twitter - [Ammar Qureshi](https://www.twitter.com/ammarrqureshi)


## Acknowledgments
LOVE YOU GOOGLE
LOVE YOU YOUTUBE
LOVE YOU STACKOVERFLOW
