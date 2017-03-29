import {getUsers, deleteUser} from '../../api/userApi'
 // @ngInject

export default class HomeController {
  constructor($log) {
    this.$log= $log;
    this.$log.info('loading from constructor');
    var tableState = {};
    this.name = 'Users';
    this.visibility = true;
    this.rowCollection = [];
    this.rowDisplayed = [];
    this.loadUsers(tableState);
    this.options = {
      customClass: this.getDayClass,
      minDate: new Date(),
      showWeeks: true
    };
    this.today();
    this.toggleMin();
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date(tomorrow);
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    this.events = [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];
  }

  loadUsers(tableState) {
    getUsers(tableState).then(result => {
      this.rowDisplayed = result;
      console.info('users', this.rowDisplayed);
    });
  }

  onClick() {
    this.loadUsers({});
  }


  changeName() {
    this.name = 'EQ Bank';
  }

  deleteUser(userId) {
    deleteUser(userId);
  }


  today() {
    this.dt = new Date();
  }


  clear(){
    this.dt = null;
  }

  // Disable weekend selection
  disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  toggleMin() {
    this.options.minDate = this.options.minDate ? null : new Date();
  }

  setDate(year, month, day) {
    this.dt = new Date(year, month, day);
  }

  getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < this.events.length; i++) {
        var currentDay = new Date(this.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return this.events[i].status;
        }
      }
    }
  }
}
import datepicker from 'angular-ui-bootstrap/src/datepicker/index-nocss.js';

HomeController.$inject = [datepicker];
