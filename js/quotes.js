const quotes = [
  {
    quote: "Cast all your anxiety on him because he cares for you.",
    verse: "1 Peter 5:7",
  },
  {
    quote: 'Surely God is my salvation; I will trust and not be afraid. The LORD, the LORD himself, is my strength and my defense ; he has become my salvation.',
    verse: 'Isaiah 12:2',
  },
  {
    quote: 'You will keep in perfect peace those whose minds are steadfast, because they trust in you.',
    verse: 'Isaiah 26:3',
  },
  {
    quote: 'but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.',
    verse: 'Isaiah 40:31',
  },
  {
    quote: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
    verse: 'Isaiah 41:10',
  },
  {
    quote: 'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.',
    verse: 'Isaiah 43:2',
  },
  {
    quote: 'For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future.',
    verse: 'Jeremiah 29:11',
  },
  {
    quote: '“I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.”',
    verse: 'John 16:33',
  },
  {
    quote: 'Jesus looked at them and said, “With man this is impossible, but not with God; all things are possible with God.”',
    verse: 'Mark 10:27',
  },
  {
    quote: 'Come to me, all you who are weary and burdened, and I will give you rest.',
    verse: 'Matthew 11:28',
  }
];

const quote = document.querySelector('#quote span:first-child');
const verse = document.querySelector('#quote span:last-child');

// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
verse.innerText = todaysQuote.verse;