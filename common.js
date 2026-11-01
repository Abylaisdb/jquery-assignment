$(document).ready(function () {
  const pages = [
    ['index.html', 'Part 1: Selectors'],
    ['effects.html', 'Part 2: Effects'],
    ['dom.html', 'Part 3: DOM'],
    ['animations.html', 'Part 4: Animations'],
    ['project.html', 'Part 5: Mini Project']
  ];
  const current = location.pathname.split('/').pop() || 'index.html';
  const $nav = $('<nav></nav>');
  pages.forEach(function (p) {
    $('<a></a>').attr('href', p[0]).text(p[1])
      .toggleClass('active', p[0] === current).appendTo($nav);
  });
  $('body').prepend($nav);
});
