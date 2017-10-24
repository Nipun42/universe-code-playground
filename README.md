# Universe Code Playground

Universe is the easiest way to make a website. Choose a custom domain, build your site, and share it in less than a minute—all on your iPhone, for free. Get it at [onuniverse.com](onuniverse.com).

The new **Code Block** lets you run custom web code in your Universe site. This playground makes it easy to create your own blocks and see how they will respond to the Universe grid.

![](https://i.imgur.com/zkZHsDJ.png)

If you're new to programming or don't know where to start, check out the Code Block Gallery in the Universe app for ideas.

## Getting started
1. Download or clone this repository.

2. Open `index.html` in your web browser.

3. Open `code-block.html` in your text editor. (Lost? Get [Sublime Text](https://www.sublimetext.com/) or [Atom](https://atom.io/))

4. Write HTML, CSS, and Javascript. Save the file and refresh your browser to see changes. Stretch the block and see how it responds.

5. When you're happy, copy everything in `code-block.html`, and paste it into a Code Block in the Universe app.

## Code Block Guidelines
* The Universe grid is very flexible. Play around with how your block responds to different sizes and orientations.

* Try out your code on a few different browsers to make sure everything works.

* Scripts and stylesheets should be included inside `code-block.html` or hosted elsewhere and linked in your code.

* Images must be hosted elsewhere.

* Avoid creating Code Blocks that scroll.

* Have fun!

## Pro Tips
Permanently change the Code Block's size and position by changing these values at the bottom of `extras/script.js`:

```javascript
// Set Code Block's starting position and size in columns and rows
CodeBlock.set({
  left: 1,
  top: 1,
  width: 2,
  height: 2
})
```
