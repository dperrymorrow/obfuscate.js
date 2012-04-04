# Obfuscate.js jquery plugin

Hide your email address from bots.

## Usage

- include obfuscate.js after jquery in your head or wherever you like
- write your email address on the page like gmail.com/dperrymorrow instead of dperrymorrow@gmail.com
- showEmail() will format back to mailto link with javascript avoiding bots, but not annoying your users

### Standard

````html
<!-- disguises your email links as regular hrefs, tell bots to not follow as they are not valid links -->
<a class="show" href="gmail.com/dperrymorrow" rel="no-follow">david morrow</a>
<a class="show" href="gmail.com/dperrymorrow" rel="no-follow">david morrow</a>
````

````javascript
$('.show').revealEmail()
````
#### Results in
````html
<a class="show" href="mailto:dperrymorrow@gmail.com" rel="no-follow">david morrow</a>
````

### Format the label as well
sometimes you might want to display the email address as the label as well. You can by passing in an additional

````html
<!-- disguises your email links as regular hrefs, tell bots to not follow as they are not valid links -->
<a class="show" href="gmail.com/dperrymorrow" rel="no-follow">gmail.com/dperrymorrow</a>
<a class="show" href="gmail.com/dperrymorrow" rel="no-follow">gmail.com/dperrymorrow</a>
````

````javascript
$('.show').revealEmail(true)
````

#### Results in
````html
<a class="show" href="dperrymorrow@google.com" rel="no-follow">dperrymorrow@gmail.com</a>
````
