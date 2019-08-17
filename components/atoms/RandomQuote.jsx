import quotes from '../../assets/data/quotes';
import Typography from './Typography';

const getRandomQuotes = () => {
  const shortenQuotes = quotes.filter(quote => quote[1].length < 100);
  const length = shortenQuotes.length;

  return shortenQuotes[Math.floor(Math.random() * length)];
};

const RandomQuote = ({ className }) => {
  const [author, quote] = getRandomQuotes();

  return (
    <>
      <Typography
        variant={'p'}
        children={quote}
        className={`${className}__quote`}
      />
      <Typography
        variant={'h6'}
        children={'- ' + author}
        className={`${className}__author`}
      />
    </>
  );
};

export default RandomQuote;
