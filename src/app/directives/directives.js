let academicExperience = () => {
    return {
        restrict: 'E',
        scope: {
        experience: '=experience'
        },
        template: require('../templates/academic-experience.html')
    };
};
  
let technicalSkills = () => {
    return {
        restrict: 'E',
        scope: {
        skills: '=skills'
        },
        template: require('../templates/technical-skills.html')
    };
};
  
let education = () => {
    return {
        restrict: 'E',
        scope: {
        education: '=education'
        },
        template: require('../templates/education.html')
    };
};
  
let languages = () => {
    return {
        restrict: 'E',
        scope: {
        languages: '=languages'
        },
        template: require('../templates/languages.html')
    };
};
  
let courses = () => {
    return {
        restrict: 'E',
        scope: {
        courses: '=courses'
        },
        template: require('../templates/courses.html')
    };
};
  
let references = () => {
    return {
        restrict: 'E',
        scope: {
        references: '=references'
        },
        template: require('../templates/references.html')
    };
};

export default {
    academicExperience,
    technicalSkills,
    education,
    languages,
    courses,
    references
};