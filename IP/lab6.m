% Edge Detection using Sobel, Prewitt and Roberts Operators

clc;
clear all;
close all;
a = imread('C:\Users\Ashwin\Desktop\1.png');
b = rgb2gray(a);
subplot(2,2,1);
imshow(a);
title('original Image');
c1 = edge(b,'sobel');
subplot (2,2,2);
imshow(c1);
title('Sobel Operator');
c2 = edge(b,'prewitt');
subplot(2,2,3);
imshow(c2);
title('Prewitt Operator');
c3 = edge(b, 'roberts');
subplot(2,2,4);
imshow(c3);
title('Roberts Operator')