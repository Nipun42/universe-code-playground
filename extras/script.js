$(document).ready(function() {

  var Viewer = {
    gridSize: {
      w: 560/3,
      h: 199
    }
  }

  var CodeBlock = {
    element: document.querySelector('.code-block'),
    set: function(style) {
      style.width = (style.width * Viewer.gridSize.w)+'px'
      style.height = (style.height * Viewer.gridSize.h)+'px'

      style.left = style.left * Viewer.gridSize.w+'px'
      style.top = style.top * Viewer.gridSize.h+'px'

      $(this.element).css(style)
    }
  }

  $( CodeBlock.element ).resizable({
    grid: [Viewer.gridSize.w, Viewer.gridSize.h],
    handle: '.handle',
    handles: 'n, e, s, w, ne, se, sw, nw',
    containment: "parent"
  })

  // INITIAL PLACE AND RESIZE
  CodeBlock.set({
    left: 1,
    top: 2,
    width: 2,
    height: 2
  })


  var State = {
    
  }


})
