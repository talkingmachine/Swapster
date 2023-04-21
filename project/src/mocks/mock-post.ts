import { nanoid } from 'nanoid';

type post = {
  id: string;
  title: string;
  postPreview: string;
  description: string;
  stats: {
    likes: number;
    likesAdded: number;
    dislikes: number;
    dislikesAdded: number;
    comments: number;
    commentsAdded: number;
    views: number;
  };
  date: string;
  tags: string[];
  comments: number[];

}

const postData: post[] = [
  {
    id: nanoid(7),
    title: 'Просадки курса — не помеха: как заработать на криптовалютах с минимальным риском',
    postPreview: 'https://www.shutterstock.com/image-photo/web-site-codes-on-computer-600w-501062212.jpg',
    description: 'На 3 июля 2022 года на рынке цифровых активов наблюдается медвежий тренд. Котировки всех криптовалют медленно снижаются на протяжении последних нескольких месяцев. Торговля монетами и токенами в таких условиях сложна и связана с большой вероятностью потери сбережений. Но существуют десятки методов заработка на криптовалютах, причем с минимальными рисками. Из них популярными являются 6 способов...',
    stats: {
      likes: 350,
      likesAdded: 45,
      dislikes: 10,
      dislikesAdded: 2,
      comments: 25,
      commentsAdded: 14,
      views: 3500,
    },
    date: 'Sun Jan 22 2023 16:20:47 GMT+0300',
    tags: [
      'all',
      'popular',
      'new',
      'about-cryptocurrency',
      'forecasts'
    ],
    comments: [1, 2, 3, 4],
  },
];

export {postData};
