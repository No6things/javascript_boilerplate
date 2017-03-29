import {getUsers, deleteUser} from '../../api/userApi'
export default class HomeController {
  constructor(randomNames) {
    this.random = randomNames;
    this.name = 'World';
    this.visibility = true;
    getUsers().then(result => {
      this.rowCollection = result;
    });
  }

  changeName() {
    this.name = 'angular-tips';
  }

  randomName() {
    this.name = this.random.getName();
  }

  deleteUser(userId) {
    deleteUser(userId);
    this.visibility = false;
  }
}

HomeController.$inject = ['randomNames'];
