import {getUsers, deleteUser} from '../../api/userApi'
 // @ngInject

export default class HomeController {
  constructor($log) {
    this.$log= $log;
    this.$log.info('loading from constructor');
    var tableState = {};
    this.select = {
        value: "Option1",
        choices: ["Option1", "I'm an option", "This is materialize", "No, this is Patrick."]
    };
    this.name = 'Users';
    this.visibility = true;
    this.rowCollection = [];
    this.rowDisplayed = [];
    this.loadUsers(tableState);
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
}
