type Items = {
  id: number;
  href: string;
  page: string;
};

const navItems: Array<Items> = [
  {id: 1, href: '/', page: 'Home'},
  {id: 2, href: '/about', page: 'About'},
];

function getCurrentYear(): number {
  const date: Date = new Date();
  return date.getFullYear();
}

export {navItems, getCurrentYear};
