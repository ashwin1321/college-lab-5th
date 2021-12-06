x = imread('C:\Users\ashwi\Desktop\squidward.png');
x=rgb2gray(x);
x=im2double(x);
[m,n]=size(x);
gamma =1.7; 
c=1;
for i=1:m;
for j=1:n;
ex(i,j)=c*(x(i,j)^gamma);
end
end
subplot(1,2,1)
imshow(x);
title('Original');
subplot(1,2,2)
imshow(ex);
title('Power Image');