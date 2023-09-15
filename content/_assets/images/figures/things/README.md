# Things Images

The images in this directory (`content/_assets/images/figures/things`) are for the Contents grid. There is one for each thing in the book.

- The files must be JPG format, and the filrnames must match exactly the name of the corresponding Markdown file for the thing

- Images that are not on a white background have been cropped to one of two aspect ratios: 3:2.5 or 3:2.1. The smaller one is used for things with names that take up two lines in the grid.

- The images have been processed from the full resolution versions with this script:

    ```
    magick grid-images--cropped/*.jpg -resize '450x450>' -quality 80 -profile adobe-rgb-1998.icm -set filename:name '%t' grid-images--thumbnails/'%[filename:name].jpg'
    ```
