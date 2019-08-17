import List from '../molecules/List';

const contactInfo = [
  {
    name: 'Github',
    url: 'https://www.github.com/sojurner'
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/paulkim-sojurner/'
  },
  {
    name: 'Email',
    mailUrl: 'paul.kim0591@gmail.com'
  },
  {
    name: 'Resume',
    url:
      'https://drive.google.com/file/d/1anbv6eDYMmSOrqo2xnDf0jVa1caoEIK2/view'
  }
];

const Contact = props => {
  return <List listItems={contactInfo} {...props} />;
};

export default Contact;
