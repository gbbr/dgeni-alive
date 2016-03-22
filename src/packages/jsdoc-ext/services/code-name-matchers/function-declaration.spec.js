var matcherFactory = require('./function-declaration');

describe('FunctionDeclaration matcher', function() {

  var matcher;

  beforeEach(function() {
    matcher = matcherFactory();
  });

  it("should return null if value is not supported", function() {
    expect(matcher({
      id: null
    })).toBeNull();
    expect(matcher({
      id: {}
    })).toBeNull();
    expect(matcher({
      id: {
        name: null
      }
    })).toBeNull();
    expect(matcher({
      id: {
        name: ""
      }
    })).toBeNull();
  });

  it("should return function name", function() {
    expect(matcher({
      id: {
        name: "test"
      }
    })).toEqual("test");
  });
});