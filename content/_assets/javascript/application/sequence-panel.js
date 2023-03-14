/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing.
 *
 * using David Waslsh's debounce
 * https://davidwalsh.name/javascript-debounce-function
 * which is take from underscore.js
 *
 * @example
 *   var myEfficientFn = debounce(function() {
 *     // All the taxing stuff you do
 *   }, 250);
 *
 * @param {function} func - the function to execute
 * @param {integer} wait - the tine to wait in milliseconds
 * @param {boolean} immediate - whether to call the function immediately or at the end of the timeout
 * @returns
 */

const debounce = function (func, wait = 250, immediate = false) {
  let timeout = null;

  return function () {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(context, args);
    }
  };
};

let oldX = 0

const handleSequenceNavigation = ({ clientX, target }) => {
  const { sequence } = target
  const {
    currentSequenceIndex,
    nextCanvas,
    previousCanvas,
    setSequenceIndex,
    totalCanvases
  } = sequence
  const draggingLeft = clientX < oldX
  const draggingRight = clientX > oldX
  if (draggingLeft) {
    if (currentSequenceIndex === 0) {
      setSequenceIndex(totalCanvases - 1)
    } else {
      previousCanvas()
    }
  } else if (draggingRight) {
    if (currentSequenceIndex === totalCanvases - 1) {
      setSequenceIndex(0)
    } else {
      nextCanvas()
    }
  }
}

const handleMouseMove = (event) => {
  handleSequenceNavigation(event)
  oldX = event.clientX
}

const debouncedMouseMove = debounce(handleMouseMove, 5, true)

const handleMouseDown = ({ clientX }) => {
  oldX = clientX
  window.addEventListener('mousemove', debouncedMouseMove)
}

const handleMouseUp = () => {
  oldX = 0
  window.removeEventListener('mousemove', debouncedMouseMove)
}

const handleMouseLeave = () => {
  oldX = 0
  window.removeEventListener('mousemove', debouncedMouseMove)
}

const setUpUIEventHandlers = () => {
  const sequencePanels = document.querySelectorAll('sequence-panel')
  for (const sequencePanel of sequencePanels) {
    sequencePanel.addEventListener('mousedown', handleMouseDown)
    sequencePanel.addEventListener('mouseup', handleMouseUp)
    sequencePanel.addEventListener('mouseleave', handleMouseLeave)
  }
}

export { setUpUIEventHandlers }
