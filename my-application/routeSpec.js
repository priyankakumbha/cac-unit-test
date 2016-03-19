describe("cacApp", function() {
    beforeEach(module("cacApp"));

    describe("/route", function() {
        it('should load the template, controller and call the resolve',
        inject(function($location, $rootScope, $httpBackend, $route) {
            $httpBackend.whenGET('home.html').respond('...');
            $httpBackend.expectGET('/api/current-user').respond({});

            $rootScope.$apply(function() {
                $location.path('/');
            });
            expect($route.current.controller).toBe("HomeCtrl");
            expect($route.current.loadedTemplateUrl).toBe("home.html");
            $rootScope.$digest();
            $httpBackend.flush();
            $httpBackend.verifyNoOutstandingRequest();
            $httpBackend.verifyNoOutstandingExpectation();
        }));
    });
});