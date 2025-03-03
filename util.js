
function assert(x, message) {
  if (!x) {
    throw new Error("Assertion failed: " + (message || ''));
  }
}

function $(selector) {
  return [].slice.apply(document.querySelectorAll(selector));
}

var replaceChildren = function(container, children) {
  container.innerHTML = '';
  children = children instanceof Array ? children : [children];
  children.forEach(function(child) {
    container.appendChild(child);
  });
}

var sum = function(seq) {
  return seq.reduce(function(a, b) { return a + b; }, 0);
}

var setClassBool = function(el, className, value) {
  if (value) {
    el.classList.add(className);
  } else {
    el.classList.remove(className);
  }
}

