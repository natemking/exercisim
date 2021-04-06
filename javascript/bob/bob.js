//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let trimmed = message.trim();

  switch (true) {
    case trimmed === '':
      return 'Fine. Be that way!';
    case (/[0-9a-z]\?$|\W+\?$|!(?= )/).test(trimmed):
        return 'Sure.';
    case (/^[^0-9a-z]+\?$/).test(trimmed):
      return 'Calm down, I know what I\'m doing!';
    case (/^[^0-9a-z]+$|[A-Z]!$|[%^*@#$()]+/).test(trimmed):
      return 'Whoa, chill out!';
    default:
      return 'Whatever.';
  }
};

