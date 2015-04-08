## Use expect to test nodejs app

### Using chai

````js
var chai = require('chai');
var expect = chai.expect;
````

### compare value

````js
var a = '123'
expect(a).to.equal('123');
````

### compare array

http://stackoverflow.com/questions/17526805/chai-test-array-equality-doesnt-work-as-expected

````js
var arr = [1,2,3,4];
expect(arr).to.equal([1,2,3,4]); // wrong
expect(arr).to.eql([1,2,3,4]); // ok
````