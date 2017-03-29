import {getUsers, deleteUser} from '../../api/userApi'

export default class HomeController {
  constructor($log) {
    var tableState = {};
    this.name = 'Users';
    this.visibility = true;
    this.rowCollection = [];
    this.rowDisplayed = [];
    this.loadUsers(tableState);
    this.$log= $log;
    this.$log.info('loading from constructor')
  }

  loadUsers(tableState) {
     getUsers(tableState).then(result => {
      this.rowDisplayed = result;
    });
    console.info('users', this.rowDisplayed);
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
}

HomeController.$inject = ['$log'];
