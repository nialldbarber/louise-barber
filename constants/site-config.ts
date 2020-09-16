export interface Items {
  id: number;
  href: string;
  page: string;
}

export const navItems: Array<Items> = [
  {id: 1, href: '/', page: 'Home'},
  {id: 2, href: '/about', page: 'About'},
];

export const ART_PAGE: string = '/art/';

export enum TITLE {
  MAIN = 'LOUISE H BARBER',
  FOOTER = '© lhb',
  DESC = 'Art by Louise Barber',
}

export enum INSTA {
  URL = 'https://www.instagram.com/louhbarberart/',
  IMG = '/instagram.svg',
  ALT = 'Instagram Logo',
}
