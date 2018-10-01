var budgetController = (function(){

})();

var UIController = (function(){

})();

var controller = (function(budgetCtrl, UICtrl){
  var ctrlAddItem = function() {
    // добавляем пункт списка
    console.log('It works!');
  };

  // слушаем клик мышки
  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  // слушаем нажатие ENTER
  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });

})(budgetController, UIController);
