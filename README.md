# B. Tang's Personal Site

A personal site written using NextJS and Strapi to serve blog posts.

# Description

This is the code for a personal website that serves blog posts and a project portfolio via NextJS with Strapi as a CMS. NextJS is used to take advantage of static site generation for faster page loads and Strapi is used as a CMS because I found it simple to set up and host on Strapi Cloud.

Blog posts are defined with the following fields:

> Title: The post title. This is what gets used for search functionality.
>
> Short description: The description that gets displayed on the list of blog posts.
>
> Text: The post content.
>
> Main Image: The main image for the blog post.
>
> Images: Any images the user might want to attach to the post.
>
> Release date: The datetime after which the post should begin appearing, allowing the owner to control when posts go live.
>
> Url slug: The url the post should appear at. In the list of blog posts, this is what each blog post element should link to.

Projects are defined with the following fields:

> Name: The project name. This is what gets used for search functionality.
>
> Short description: The description that gets displayed on the list of projects.
>
> Text: Text content for the project page.
>
> Main Image: The main image for the project post.
>
> Images: Any images the user might want to attach to the post.
>
> Release date: The datetime after which the post should begin appearing, allowing the owner to control when posts go live.
>
> Link: A link relevant to the project; the owner might use this to attach a link to Github or somewhere a live demo is hosted.
>
> Status: Whether the project is in active development or not. Limited to "active" or "inactive".
>
> Url slug: The url the project should appear at. In the list of project, this is what each project element should link to.

There are a handful of things that you might argue would be better served from Strapi that I have hard coded in (which I will point out in code comments in the NextJS code), but since this site was simply designed for myself to use and I don't see said items changing often if at all, I felt hard coding them in and not having to make requests to Strapi for the data was okay.

# Testing

Testing components is done via Storybook. Go into the nextjs folder and run `npm run storybook`

# How to Run

Don't forget to `npm i` in each of the project root, nextjs, and strapi.

Copy the `.env.sample` files in the root and nextjs into `.env` in their respective locations. For local testing, you can use the following credentials for Strapi in the root `.env`:

> STRAPI_URL=http://strapi:1337
>
> DATABASE_HOST=db
>
> DATABASE_PORT=5432
>
> DATABASE_NAME=strapi
>
> DATABASE_USERNAME=strapi
>
> DATABASE_PASSWORD=strapi

The postgres credentials don't really matter right now since I have yet to do anything involving a postgres db. You can write `strapi` into all of them and it will work fine.

`npm run dev` starts the Next and Strapi servers in development mode. Next will be located at localhost:3000; head there to see the site in action. Strapi will be located at localhost:1337.

# Future Features

Contact page with a contact form

Highlight the header tab for the part of website the viewer is on

Advanced searches for blog and project posts (as opposed to the current title-only search)

Implmement international locales
