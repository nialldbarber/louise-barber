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
  MAIN = 'Louise Hannah Barber',
  FOOTER = '© LHB',
  DESC = 'Art by Louise Barber',
}
