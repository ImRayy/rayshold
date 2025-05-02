## Content Tree

```txt
📁 src
 └─📁 content
    └─📁 blog  ← symlinked from external content repo
```

## Build & Deploy

**Clone repos**

```bash
git clone https://github.com/ImRayy/rayshold-posts
git clone https://github.com/ImRayy/rayshold
```

**Symlink posts to `src/content` folder**

```bash
ln -s rayshold/src/content/blog rayshold-posts/blog
```

**Deploy to vercel**

```bash
pnpx vercel build
pnpx vercel deploy --prebuilt
```

**Why this approach?**

I didn’t want to deal with the hassle of CDNs, and Git is definitely more convenient for maintenance and implementation. But why a separate repo? I wanted to avoid cluttering the main site repo with commits like `chore: fix typo`. Creating a separate repo for the blog was the best solution, while the main site’s functionality remains unchanged, of course.

## Design Inspirations

- [fuwari](https://github.com/saicaca/fuwari) ([archive](https://fuwari.vercel.app/archive/) page)
