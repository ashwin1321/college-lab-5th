%  Implementation of global thresholding at Image Segmentation.

clc;
close all;
clear all;

I = imread('C:\Users\Ashwin\Desktop\1.png');
level = graythresh(I);
BW = im2bw(I,level);
imshow(BW);
% im2bw(I,level) = converts grays cale image I to binary image i.e bw