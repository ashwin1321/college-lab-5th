clc;
clear all;
close all;
A = [000000; 001100; 011110; 000000]
B = strel([1;1;1])
A_dilated_by_B = imdilate(A,B)
