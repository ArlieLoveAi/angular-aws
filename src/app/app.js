import angular from 'angular';
import directives from "./directives/directives"
import controllers from "./controllers/controllers"

import factories from "./factories/factories";
//const person = require('./person.json');

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'appCtrl',
    controllerAs: 'app'
  };
};

const MODULE_NAME = 'app';
console.log('factories', factories)
angular.module(MODULE_NAME, [])
  .factory('getItems', factories.getItems)
  .directive('app', app)
  .controller('appCtrl', controllers.appCtrl)
  .directive('languages', directives.languages)
  .directive('academicExperience', directives.academicExperience)
  .directive('education', directives.education)
  .directive('courses', directives.courses)
  .directive('technicalSkills', directives.technicalSkills)
  .directive('references', directives.references);

export default MODULE_NAME;