React is awesome and I love it and I hope you will too.

But here's the thing: React is also kind of hard, especially for folks who aren't
rock solid on their javascript fundamentals.  So...let's get rock solid on those,
before we start!  If you take the time to review some stuff and maybe extend 
your JS knowledge in a few key areas, you'll probably have a lot more fun with React.

For a lot of you, this will be a combination of review and some new stuff.  But stick with it,
and I bet you will learn some things you didn't know.

For instance, I bet you know what a javascript function is, something like this:

const sum = function (a, b){
    return a + b
}

Which will take in two numbers and add them together and return the sum.  Simple stuff, right?

Well, how about this function:

( 
    () => 0 
)()


What's the return value?

If you said, zero, you're right!  IF you coudn't figure it out, and maybe didn't even think that was a legit
javascript function declaration, well, don't worry, you're not alone.  functions
in javsacript confuse the heck out of a lot of people.

Functions are also the bedrock on which javascript, and react and redux, are built.
So getting comfortable with functions and all the ways we use them is absolutely essential
to becoming a competent web developer, whether you're using React or any other library.

So let's take some time to make sure we understand them.


What we're going to do in these first few exercises is, use functions to 
build something kind of simple -- some hearts made out of divs -- first without react and then with react.

Along the way we'll take a semi-deep dive into functions and array methods and make sure you know
the es6 syntax that you really need to know to write decent react code.

And, building this first WITHOUT react, will help you see why we love and need React, and
some of the ways it makes the apps that we build more reconfigurable and performant.

So, I'll see you in the next video, where we'll get started with functions.  



# arrow functions and template literals

Open the project and then open the file using live server, you should see a smiley face, wave and 
text that says 'hi!'  

Refresh the page, and notice how the background color for the page changes. 

Now take a look at the index.html file.  Find the div that has the two emojis and the text 'hi'.

Wait what?  Yeah, I know, it's not there.

Now open the index.js file and let's have a look at what's written there.  THIS is where you'll find the div with the emojis and the text that says hi there.  Let's go over this code line by line and make sure we understand what's going on; along the way we'll get a chance to have a look at some very useful javascript language features that you will use CONSTANTLY in your react code. 

Notice that first line?  The function declaration?

```
const getRandomColor = () => ${Math.floor()}`

```





You're looking at a function declaration.  It returns something called a template literal, which contains the javsacript to generate a random hex color.

It's actually a pretty useful function; I include it in a utils.js file in almost all of my 
projects, honestly.  If, like me, you love you some random colors from time to time,
save it somewhere safe and use it as your own.  

You can see that it's written using the arrow syntax, which is my favorite way to write javascript function declarations.  
<!-- For one thing, it's shorter.  For another, I just LIKE it.  I feel like that arrow
really shows us what functions are : functions take in values and turn them into
 something else.  To me, the arrow communicates that transformation in a way that
 is really satisfying. -->


We could also write this function like

const getRandomColor = function(){
    return `#${Math.floor(Math.random() * 2 * 24).toString(16)}`
}

Comparing the two syntaxes, you can see that we basically use the => 

We're going to use this function in the program that we're about to write, so let's take a minute and understand it.

``


Template literals are a way combining strings and javascript variables.  

We write them with backticks rather than quotation marks, and then when we want to include javascript code in them, we write a dollar sign and a pair of curly braces and write our javascript inside them.




# manipulating the DOM





