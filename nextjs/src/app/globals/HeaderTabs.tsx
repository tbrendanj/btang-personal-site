import { NavItemProps } from '@/components/NavItem';

/**
 * There's an argument that these are better off set in Strapi and requested/elsewhere,
 * but since this repo is built simply for my personal use and I don't see
 * these items changing often if at all, I've decided that it's better to just
 * hardcode them and not make the extra requests to Strapi for my use case.
 */
const HeaderTabs: Array<NavItemProps> = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/about',
    text: 'About',
  },
  {
    href: '/projects',
    text: 'Projects',
  },
  {
    href: '/blog',
    text: 'Blog',
  },
  {
    href: '/contact',
    text: 'Contact',
  },
];

export default HeaderTabs;
