var fortunes = [
  'No',
  'Maybe',
  'When Hell freezes over',
  'Is the Pope Catholic?',
  'Try again!',
  'Tomorrow!',
  'It is certain',
  'It is decidedly so',
  'Without a doubt',
  'Yes, definitely',
  'You may rely on it',
  'As I see it, yes',
  'Most likely',
  'Outlook good',
  'Yes',
  'Signs point to yes',
  'Reply hazy try again',
  'Ask again later',
  'Better not tell you now',
  'Cannot predict now',
  'Concentrate and ask again',
  'Dont count on it',
  'My reply is no',
  'My sources say no',
  'Outlook not so good',
  'If you are willing to make out with the person next to you',
  'Very doubtful'
]

module.exports = {
  fortunes: fortunes,
  getRandom: function () {
    var index = Math.floor(Math.random() * fortunes.length);
    return fortunes[index]
  }
}
