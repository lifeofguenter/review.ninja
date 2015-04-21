'use strict';
// settings test
describe('Merge Directive', function() {

    var scope, repo, httpBackend, element, elScope, timeout, pull;

    beforeEach(angular.mock.module('app'));

    beforeEach(angular.mock.module('templates'));

    beforeEach(angular.mock.inject(function($injector, $rootScope, $compile, $stateParams, $timeout) {
        $stateParams.user = 'gabe';
        $stateParams.repo = 1234;
        timeout = $timeout;

        httpBackend = $injector.get('$httpBackend');

        httpBackend.when('GET', '/config').respond({

        });

        scope = $rootScope.$new();
        pull = {
            head: {
                repo: {
                    id: 1234
                }
            },
            base: {
                repo: {
                    id: 123
                }
            }
        };
        element = $compile("<merge-button permissions='{push:false}' pull='{stars: false}'></merge-button>")(scope);
        scope.$digest();
        elScope = element.isolateScope();
        elScope.pull = pull;
        console.log(elScope);
    }));

    it('should get if thing is branch', function() {

    });

    it('should watch status + set default status', function() {

    });

    it('should get star text', function() {

    });

    it('should delete branch', function() {

    });

    it('should merge branch', function() {

    });

    // should push onto stack
    it('should confirm', function() {
        elScope.confirm();
        (elScope.showConfirmation).should.be.true;
        timeout.flush();
        (elScope.showConfirmation).should.be.false;
    });
});
