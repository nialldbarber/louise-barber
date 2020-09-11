export interface Items {
  id: number;
  href: string;
  page: string;
}

export const navItems: Array<Items> = [
  {id: 1, href: '/', page: 'Home'},
  {id: 2, href: '/about', page: 'About'},
];

export const SITE_TITLE: string = 'Louise Hannah Barber';
export const SITE_DEFAULT_DESCRIPTION: string = 'Art by Louise Barber';
export const ART_PAGE: string = '/art/';
