% Implementation of Erosion at morphological analysis:

clc;
clear all;
close all;
A = [000000; 001100; 011110; 000000]
B = strel([1;1;1])
A_eroded_by_B = imread(A,B)
