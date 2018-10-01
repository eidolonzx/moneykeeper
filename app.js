var budgetController = (function(){

})();

var UIController = (function(){

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();

var controller = (function(budgetCtrl, UICtrl){

  var DOM = UIController.getDOMstrings();

  var ctrlAddItem = function() {
    // 1. Получаем данные из поля ввода
    var input = UIController.getInput();
    console.log(input);

    // 2. Добавляем объект в budget controller

    // 3. Добавляем объект в UI

    // 4. Пересчитываем бюджет

    // 5. Отображаем итоговый бюджет в UI

  };

  // слушаем клик мышки
  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  // слушаем нажатие ENTER
  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
