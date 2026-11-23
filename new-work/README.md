# New work

Drop full-size PNG, JPG, JPEG, or WEBP originals in this folder, then run:

```powershell
npm run add-work
```

Each image is converted to WebP at quality 80 with a maximum width of 1600px and saved in `public/images/projects`. Originals are moved to `new-work/done`.

Original images are ignored by git. Commit only the generated WebP files you want to deploy.
