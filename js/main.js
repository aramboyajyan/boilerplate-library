
/**
 * @file
 * Main JS.
 *
 * Created by: Topsitemakers
 * http://www.topsitemakers.com/
 */

angular.module('boilerplateLibraryApp', [])
  .controller('boilerplateLibraryController', function($scope, $http) {
    // Default project language.
    $scope.projectLanguage = 'php';

    // // Load the list of projects.
    this.projects = [
      // PHP projects.
        {title: 'Slim-Skeleton', url: 'slimphp/Slim-Skeleton', language: 'php'},
        {title: 'slim-jade', url: 'w33ble/slim-jade', language: 'php'},
        {title: 'Bonfire', url: 'ci-bonfire/Bonfire', language: 'php'},
        {title: 'CodeIgniter-Bootstrap', url: 'sjlu/CodeIgniter-Bootstrap', language: 'php'},
        {title: 'Symfony 2 Sonata Admin Boilerplate', url: 'liquidlabs/Symfony2-Sonata-Admin-Boilerplate', language: 'php'},
        {title: 'Silex Skeleton', url: 'silexphp/Silex-Skeleton', language: 'php'},
        {title: 'Silicone Skeleton', url: 'elfet/silicone-skeleton', language: 'php'},
        {title: 'Yii Boilerplate', url: 'clevertech/yiiboilerplate', language: 'php'},
        {title: 'Zend Framework Boilerplate', url: 'michael-romer/zf-boilerplate', language: 'php'},
        {title: 'Zend Framework Boilerplate 2', url: 'michael-romer/zfb2', language: 'php'},
        {title: 'Zend Skeleton Module', url: 'zendframework/ZendSkeletonModule', language: 'php'},
        {title: 'Zend Skeleton Application', url: 'zendframework/ZendSkeletonApplication', language: 'php'},
        {title: 'Apigility Skeleton Application', url: 'zfcampus/zf-apigility-skeleton', language: 'php'},
        {title: 'Zend Framework Restful Module Skeleton', url: 'scaraveos/ZF2-Restful-Module-Skeleton', language: 'php'},
      // JavaScript projects.
        {title: 'JavaScript Boilerplate', url: 'mdarif/JavaScript-Boilerplate', language: 'javascript'},
        {title: 'JavaScript Project Boilerplate', url: 'young-steveo/javascript-project-boilerplate', language: 'javascript'},
        {title: 'JavaScript Library Boilerplate', url: '', language: 'javascript'},
        {title: 'Boilerplate JS', url: 'ectechno/boilerplatejs', language: 'javascript'},
        {title: 'jQuery Boilerplate', url: 'jquery-boilerplate/jquery-boilerplate/', language: 'javascript'},
        {title: 'jQuery Plugin Boilerplate', url: 'websanova/boilerplate', language: 'javascript'},
        {title: 'jQuery Mobile Boilerplate', url: 'commadelimited/jQuery-Mobile-Boilerplate', language: 'javascript'},
      // Python projects.
        {title: 'Flask Boilerplate', url: 'mjhea0/flask-boilerplate', language: 'python'},
        {title: 'Hello Flask', url: 'fogleman/HelloFlask', language: 'python'},
        {title: 'FBone', url: 'imwilsonxu/fbone', language: 'python'},
        {title: 'Overholt', url: 'mattupstate/overholt', language: 'python'},
        {title: 'Flask Foundation', url: 'klen/Flask-Foundation', language: 'python'},
        {title: 'Flask Bootstrap Skeleton', url: 'albertogg/flask-bootstrap-skel', language: 'python'},
        {title: 'Flask Skeleton', url: 'nickhs/flask_skeleton', language: 'python'},
        {title: 'Django Bootstrap Toolkit', url: 'dyve/django-bootstrap-toolkit', language: 'python'},
        {title: 'Django HTML5 Boilerplate', url: 'django-html5-boilerplate', language: 'python'}
    ];
  });
