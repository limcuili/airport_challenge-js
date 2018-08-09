'use strict';

describe('Feature Tests', function(){
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('instructs a plane to land', function(){
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

  it('instructs a plane to takeoff', function(){
    plane.land(airport);
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });

});
