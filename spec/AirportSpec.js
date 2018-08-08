'use strict';

describe('Airport', function(){
  var airport;
  var plane;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('initializes with an empty array', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('checks that a plane has landed', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

});
