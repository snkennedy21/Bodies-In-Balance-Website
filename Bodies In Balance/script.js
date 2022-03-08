'use strict';


// This function handles opening/closing accordians when icon is clicked
(function () {
  let accordianIcon = document.querySelectorAll('.accordian-icon');
  let accordianContent = document.querySelectorAll('.accordian-text-img-container');

  // Icon Click Event
  accordianIcon.forEach((icon) => {
    icon.addEventListener('click', function () {

      // This line adds/removes accordian text/image content when icon is clicked
      icon.nextElementSibling.classList.toggle('hidden');

      // This if/else block changes the color of the accordian number when icon is clicked
      if (!icon.previousElementSibling.firstElementChild.classList.contains('number-color')) {
        icon.previousElementSibling.firstElementChild.classList.add('number-color');
        icon.classList.add('number-color');
      } else if (icon.previousElementSibling.firstElementChild.classList.contains('number-color')) {
        icon.previousElementSibling.firstElementChild.classList.remove('number-color');
        icon.classList.remove('number-color');
      }

      // This if/else block adds/removes the accordian border when the icon is clicked
      if (!icon.parentElement.classList.contains('accordian-border')) {
        icon.parentElement.classList.add('accordian-border');
      } else if (icon.parentElement.classList.contains('accordian-border')) {
        icon.parentElement.classList.remove('accordian-border');
      }

      // This if/else block rotates the icon on click
      if (!icon.classList.contains('rotate-1')) {
        icon.classList.add('rotate-1');
        icon.classList.remove('rotate-2');
      } else if (icon.classList.contains('rotate-1')) {
        icon.classList.remove('rotate-1');
        icon.classList.add('rotate-2');
      }
    });
  });
})();

(function () {})();