clc;
clear all;
close all;
a = imread('C:\Users\ashwi\Desktop\download (1).jfif');
size(a);
subplot(1,2,1);
imshow(a);
title('Original Image');

b = 255-a;
subplot(1,2,2);
imshow(b);
title('Negative Image');
inf=imfinfo('C:\Users\ashwi\Desktop\download (1).jfif')
figure;
c=rgb2gray(a);
subplot(1,2,1);
imshow(c);
title('Original Image');

d = 255-c;
subplot(1,2,2);
imshow(d);
title('Negative Image');
inf=imfinfo('C:\Users\ashwi\Desktop\download (1).jfif');

img1 = imread('C:\Users\ashwi\Desktop\download (1).jfif'); 
figure(4);
impixel(img1);