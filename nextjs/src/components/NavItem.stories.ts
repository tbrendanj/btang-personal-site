import type { Meta, StoryObj } from '@storybook/nextjs-vite';

// import { fn } from 'storybook/test';

import NavItem from './NavItem';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/NavItem',
  component: NavItem,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //   args: { onClick: fn() },
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    href: 'https://github.com',
    text: 'Button',
  },
};

/**
 * TODO list:
 * query for single blog post by title
 * query for single project by title
 * add project-specific fields as optional to commonpage
 * query for all blog posts paginated
 * query for all projects paginated
 * query for title search results for blog
 * query for title search results for projects
 * component - commonqueryitem (optional field for project status)
 * commonpage needs optional params status and url for projects
 * blog main
 * project main
 * blog/[page]
 * project/[page]
 * blog/post/[url]
 * project/post/[url]
 * blog/search/[term]
 * project/search/[term]
 * make fields have common names across all types
 * multi image support at bottom of common page
 * contact page set up to basically just show an email
 * check current best practices for typescript declaring react fcs
 *
 * planned future features (write into project post for this)
 * full contact form
 * highlight the header tab for the part of website viewer is on
 * advanced blog and project searches
 * international locales
 */
