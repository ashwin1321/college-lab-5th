clc;
close all;
clear all;

a = imread('C:\Users\Ashwi\Desktop\squidward.png')
b = im2bw(a, 0.4);
subplot(2,3,1);
imshow(b);
title('Original Binary Image');

c = bwmorph(b, 'remove');
subplot(2,3,2);
imshow(c);
title('Outline of the image');

se = strel('line',11,90);
e = imdilate(b,se);
subplot(2,3,4);
imshow(e);
title('Dilation of original image');

d = bwmorph(b, 'skel', Inf);
subplot(2,3,3);
imshow(d);
title('Skeleton of image');

f = imerode(b, se);
subplot(2,3,5);
imshow(f);
title('Erosion');

g = bwmorph(b, 'bothat');
subplot(2,3,6);
imshow(g);
title('Bottom hat');