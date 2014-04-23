'use strict';

describe('A simple directive', function () {

  beforeEach(module('meetup-example'));

  it('should render "Hello World" in a h1 tag', inject(function ($rootScope, $compile) {
    var html = '<simple></simple>';

    var element = $compile(html)($rootScope);
    $rootScope.$apply();

    expect(element.html()).toBe('<h1>Hello World</h1>');
  }));
});
