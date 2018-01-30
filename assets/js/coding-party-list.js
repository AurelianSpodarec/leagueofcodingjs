///////////////////////////////////////////
//
//	Coding Party List
//
///////////////////////////////////////////


document.addEventListener('DOMContentLoaded', function() {

'use strict';

window.onload = function () {

  //////////////////////////////////
  // VARIABLES
  //////////////////////////////////
  // Form
  var form = document.querySelector('#registrar');
  var input = form.querySelector('input');

  // Lists
  var partyLists = document.querySelectorAll('.party-lists');
  var partyInvitedList = document.querySelector('#list-invited');
  var partyGoingList = document.querySelector('#list-going');
  var partyNotSure = document.querySelector('#list-not-sure');
  var partyNotGoing = document.querySelector('#list-not-going');

  // List Options
  var listOptions = document.querySelector('.list-options');
  var btnMoveToGoing = document.querySelector('.btnMoveGoing');
  var btnMoveToNotSure = document.querySelector('.btnMoveNotSure');
  var btnMoveToNotGoing = document.querySelector('.btnMoveNotGoing');
  var btnDeleteSelected = document.querySelector('.btnDeleteSelected');

  //////////////////////////////////
  // FUNCTIONS
  //////////////////////////////////

  // Grab the LI (show a tooltip - moving convo);
  // When the mouse with the convo is over one of the headings, make the bg yellow
  // On mouse up on the heading, append the selected list there or a list that was dragged by square not selected

  function dragAndDrop(e) {
    var mouseDown = document.onmousedown = OnMouseDown;
    var mouseUp = document.onmouseup = OnMouseUp;

    // On mouse down, get this element, or selected elements

    // If the element hovers over the h3, change cursor and bg color
    // Mouse Up on h3, append the child to the list
  }

  function createLI(text) {
    var li = document.createElement('li');
    var move = document.createElement('div');
    move.setAttribute('class', 'move');
    li.appendChild(move);
    var span = document.createElement('span');
    span.textContent = text;
    li.appendChild(span);
    var label = document.createElement('label');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    li.appendChild(label);
    var editButton = document.createElement('button');
    editButton.textContent = 'edit';
    li.appendChild(editButton);
    var removeButton = document.createElement('button');
    removeButton.textContent = 'remove';
    li.setAttribute('draggable', 'true');
    li.appendChild(removeButton);
    return li;
  }

  //////////////////////////////////
  // EVENT HANDLERS
  //////////////////////////////////
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value;
    input.value = '';
    var li = createLI(text);
    partyInvitedList.appendChild(li);
  });

  for (var i = 0; i < partyLists.length; i++) {
    partyLists[i].addEventListener('click', function (e) {
      if (e.target.tagName === 'BUTTON') {
        var button = e.target;
        var li = button.parentNode;
        var ul = li.parentNode;
        if (button.textContent === 'remove') {
          ul.removeChild(li);
        } else if (button.textContent === 'edit') {
          var span = li.children[1];
          var _input = document.createElement('input');
          _input.type = 'text';
          _input.value = span.textContent;
          li.insertBefore(_input, span);
          li.removeChild(span);
          button.textContent = 'save';
        } else if (button.textContent === 'save') {
          var _input2 = li.children[1];
          var _span = document.createElement('span');
          _span.textContent = _input2.value;
          li.insertBefore(_span, _input2);
          li.removeChild(_input2);
          button.textContent = 'edit';
        }
      }
    });
  }

  listOptions.addEventListener('click', function (e) {
    for (var i = 0; i < partyLists.length; i++) {
      partyLists[i].querySelectorAll('*:checked').forEach(function (listItems) {
        var button = e.target;
        var items = listItems.parentNode.parentNode;
        if (button.className === 'btnMoveGoing') {
          partyGoingList.appendChild(items);
          items.checked = false;
          var item = listItems;
          item.checked = false;
        } else if (button.className === 'btnMoveNotSure') {
          partyNotSure.appendChild(items);
          var item = listItems;
          item.checked = false;
        } else if (button.className === 'btnMoveNotGoing') {
          partyNotGoing.appendChild(items);
          var item = listItems;
          item.checked = false;
        } else if (button.className === 'btnDeleteSelected') {
          listItems.parentNode.parentNode.remove();
          var item = listItems;
          item.checked = false;
        }
      });
    }
  });
};
  

});