# color-room-films_nuxt
A Nuxt.js rebuild of the Color Room Films website.

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## FFmpeg Video Compression Settings

``` bash
# H264 MP4 @ 1080p
$ ffmpeg -i inputvideo.ext -c:v h264 -an -r:v 24 output.mp4

# VP9 WebM @ 1080p
$ ffmpeg -i inputvideo.ext -vcodec libvpx-vp9 -b:v 1M output.webm
```

## Vimeo Thumbnail Sizes & Links

> 780px x 409px @ 70% quality

**jpg** - https://i.vimeocdn.com/video/IMAGE_ID.jpg?mw=780&mh=409&q=70
**webp** - https://i.vimeocdn.com/video/IMAGE_ID.webp?mw=780&mh=409&q=70