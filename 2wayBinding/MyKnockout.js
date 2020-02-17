function bind(elem, model, property) {
  let el = document.getElementById(elem);
  //if (el.hasAttribute('data-bind'); проверка на data-bind
  bindingType = el.getAttribute('data-bind').split(':')[0];

  let targetProxy = new Proxy(model, {
    set: function(target, key, value) {
      calc();
      console.log(targetProxy);
      return true;
    }
  });

  switch (bindingType) {
    case 'value':
      el.addEventListener('change', function() {
        model[property] = el.value;
        targetProxy[property] = el.value;
        console.log(model);
      });

      model[property] = el.value;

      break;
    case 'text':
      el.innerText = model[property];
      break;
    default:
  }
}
