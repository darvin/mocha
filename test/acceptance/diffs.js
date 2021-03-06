
var fs = require('fs')
  , cssin = fs.readFileSync('test/acceptance/fixtures/css.in', 'ascii')
  , cssout = fs.readFileSync('test/acceptance/fixtures/css.out', 'ascii');

describe('diffs', function(){
  it('should display a word diff for small strings', function(){
    var a = 'foo bar baz'
      , b = 'foo rar baz';

    // a.should.equal(b);
  })

  it('should display a word diff for medium strings', function(){
    var a = 'foo bar baz\nfoo bar baz\nfoo bar baz'
      , b = 'foo bar baz\nfoo rar baz\nfoo bar raz';

    // a.should.equal(b);
  })

  it('should display a word diff for large strings', function(){
    // cssin.should.equal(cssout);
  })

  it('should work with objects', function(){
    var tobi = {
      name: 'tobi',
      species: 'ferret',
      color: 'white',
      age: 2
    };

    var loki = {
      name: 'loki',
      species: 'ferret',
      color: 'brown',
      age: 2
    };

    // tobi.should.eql(loki);
  })
})
