
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
})

function shout(string) {
  return string.toUpperCase();
}


describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})

function whisper(string) {
  return string.toLowerCase();
}


describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('Hello');

    expect(spy).toHaveBeenCalledWith['HELLO'];

    console.log.restore();
  })
})

function logShout(string) {
  return string.toUpperCase();
}

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('hello');

    expect(spy).toHaveBeenCalledWith['hello'];

    console.log.restore();
  })
})

function logWhisper(string) {
  return string.toLowerCase();
}

describe('sayHiToHeadphonedRoommate(string)', function() {
  if('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
  })

  if('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
  })

  if('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
    expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
      "I would love to!"
    );
  });
})

function sayHiToHeadphonedRoommate(string) {
  return string();
}