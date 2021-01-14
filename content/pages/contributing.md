---
title: How to add, edit, or remove text/images on this website.
name: contributing
---

An authorized member of Global Alliance for Peace, can manage any content on www.allianceforpeace.org. This guide aims to guide interested content creators and editors on how to do it.

## Background

This website is based on [Nuxt.js content](https://content.nuxtjs.org) library, its files are hosted on [GitHub](https://github.com/vinmugambi/form) and served by [Netlify](https://netlify.com). This structure makes the website faster and secure than the previous version which was based on Wordpress and Sage.

## Getting authorized

To request permission to edit please send an email to info@allianceforpeace.org

### First login

After consultation with concerned officials, we will send you an email with a link to complete sign up.

![An email inviting an editor for signup](/media/netlify_invite.png)

Click on the _Accept the invite_ link. You will arrive at this page, that ask for your password to complete signup. Enter you desired password or click to continue with google (recommended if you have gmail)

![An image showing the create password page](/media/netlify-create-password.png)

After creating password or linking google visit www.allianceforpeace.org/admin and login to acess the dashboard. Visit this link each time need to access the dashboard or if on login you are redirected to home Global Alliance for Peace's homepage. 

Here is how the dashboard looks like.
![image of Netlify CMS dashboard](/media/dashboard.png)

## Managing text

Most text in this website, including this guide, is written and formatted in Markdown; a simple markup language that adds formatting to plain text documents. To learn more about Markdown visit [the markdown guide website](https://www.markdownguide.org/getting-started/).

### How text files are organised

Textual content in our website is categorised into either _Pages_ or _Programs_.

- Pages hold the text that appears in webpages that tell visitors about non-profit. They include about, contact, donate, and home.
- Programs items holds text for pages describing our programs.

### Adding a text file.

Suppose you wanted to add a new program.

1. Click _Programs_ on the side menu
2. Find the New Post button in the middle section near the top and click on it.
3. You will see a form that requests for page details including title, body, description.

![Creating a new program](/media/new-program.png)

- Title is the name of the program and will appear at the top of that program webpage and must be provided.
- Description is an optional short introduction for the program
- Publish date is the time the page goes live. Default is immediately after save.
- Images is an optional comma separated list of links to images that relate to the program. For instance `/media/covid19-emergency-appeal.jpg, /media/covid19-emergency-appeal-1.jpg`
- Location is the physical location of the main activities of the progream/project. It is optional.
- Body is the main content of the page that tells the details of the program and canoot be left empty.

4. Find the save button at the top left corner of the page and click it to save the new program.

<alert>

We have disabled ability to add text files other than _Programs_. However, If you are conversant with GitHub you can edit any file create a pull request.

</alert>

### Editing  a text file

To edit, for example a _Page_ type.

1. Click _Pages_ on the side menu.
2. On the middle panel, find the title of the page you want to edit and click on it.
3. A form with the current page details will appear.
4. Find and edit the desired part.

![Editing a page](/media/edit-page.png)

5. After making edit, save to publish the changes.

### Deleting a text file.

<alert>

It is not possible to delete text files other than program files.

</alert>

To delete a progams: click on the _Programs_ in the side menu and find the program you wish to delete in the middle panel. Click on it and find the reddish delete button at the top of the page.

### Edit text on home page.

The home page holds with the content we want our visitors to see first. In this case a tagline, what we do and our most recent programs. Unlike other pages it is not written in pure makdown. Still, some parts can be edited.

- To edit the tagline _Campaigning for peace and for the rights of Africans refugees affected by war_ : Click on pages on the side menu and find the home page. Click on it, edit its description, and save.

- To edit the what we do section. Click on settings on the side mene, find what we do in the middle panel and click on it.
  Find the items you want to edit, expand it, edit, and save.

## Images

For an image to appear on the website, it must either be uploaded or a link to its location provided. To upload an image find the media button on the top navbar menu and click on it. On the floating window that appears, find the upload button and select the file and upload appropriately.

![upload a file](/media/upload.png)

### Make an image appear on the gallery page

1. Click on Settings in the side menu.
2. Find _Gallery_ in the centre section and click on it.
3. Find the add `Add media (image or video) +` button and click on it.
4. Fill all the fields except ID which is not required.

<alert>

If you uploaded an image named `food-aid.jpg`, the image link location would be `/media/food-aid.jpg`.

</alert>

### Make an video appear on the gallery page

This websites supports only videos that have already been uploaded to YouTube.

The procedure for adding a video is similar to that of adding an image described above. However, you must provide the YouTube video id and location is not required.

<alert>

A youtube video id is the string of characters that come after `v=` in the video url when viewing YouTube on a browser.

</alert>


## Anything unclear or missing

Send an email to info@allianceforpeace.org requesting for clarification.
