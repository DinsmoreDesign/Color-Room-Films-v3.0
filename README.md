# color-room-films_nuxt

> A Nuxt.js rebuilt of the Color Room Films website.

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