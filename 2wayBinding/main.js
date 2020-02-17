document.querySelector('#startdate').value = formatDate(new Date());
document.querySelector('#enddate').value = formatDate(new Date(2020, 01, 25));

const pricing = {
  'studio': 10,
  '1bed': 15,
  '2bed': 20
};

let model = {
  startdate: 'yyyy-mm-dd',
  enddate: 'yyyy-mm-dd',
  room: '',
  days: 0,
  sum: 0
};

bind('startdate', model, 'startdate');
bind('enddate', model, 'enddate');
bind('room', model, 'room');

calc();

function calc() {
  getSum();
  bind('days', model, 'days');
  bind('sum', model, 'sum');
}

function getSum() {
  if (model.startdate && model.enddate && model.room) {
    model.days = Math.round(
      (new Date(model.enddate) - new Date(model.startdate)) /
        (24 * 60 * 60 * 1000)
    );
    if (pricing[model.room]) {
      model.sum = pricing[model.room] * model.days;
    }
  }
}

function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yyyy = date.getFullYear();

  return yyyy + '-' + mm + '-' + dd;
}
