import angular from 'angular';
//const person = require('./person.json');

import person from "./person"
import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  };
};

let academicExperience = () => {
  return {
    restrict: 'E',
    scope: {
      experience: '=experience'
    },
    template: require('./academic-experience.html')
  };
};

let technicalSkills = () => {
  return {
    restrict: 'E',
    scope: {
      skills: '=skills'
    },
    template: require('./technical-skills.html')
  };
};

class AppCtrl {
  constructor() {
    this.person = person;
    this.maindata = ["id", "celphone", "email", "address"];
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .directive('academicExperience', academicExperience)
  .directive('technicalSkills', technicalSkills)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;