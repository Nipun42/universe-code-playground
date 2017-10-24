$(document).ready(function() {

  var Playground = {
    gridSize: {
      w: 560/3,
      h: 199
    }
  }

  var CodeBlock = {
    element: document.querySelector('.code-block'),
    // method that sets the block's width, height, and position using integers representing columns and rows
    set: function(style) {
      style.width = (style.width * Playground.gridSize.w)+'px'
      style.height = (style.height * Playground.gridSize.h)+'px'

      style.left = style.left * Playground.gridSize.w+'px'
      style.top = style.top * Playground.gridSize.h+'px'

      $(this.element).css(style)
    }
  }

  // Make Code Block resizable
  $( CodeBlock.element ).resizable({
    grid: [Playground.gridSize.w, Playground.gridSize.h],
    handle: '.handle',
    handles: 'n, e, s, w, ne, se, sw, nw',
    containment: "parent"
  })

  // Set Code Block's starting position and size in Columns and Rows
  CodeBlock.set({
    left: 1,
    top: 1,
    width: 2,
    height: 2
  })

  // Fade in Code Block
  $(CodeBlock.element).addClass('ready')

})
