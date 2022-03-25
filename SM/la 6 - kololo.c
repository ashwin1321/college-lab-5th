#include<stdio.h>

void main(){
    int n;
    float alpha=0.565;
    printf("How many numbers do you want to enter?\n");
    scanf("%d", &n);
    float random_number[n];
    float d_positive[n];
    float d_negative[n];
    printf("Enter random number:\n");
    for(int i=1; i<=n; i++){
        scanf("%f", &random_number[i]);
    }
    for(int i=1; i<=n; i++){
        float temp1=(float)i/n;
        float temp2=(float)(i-1)/n;
        d_positive[i]=temp1-random_number[i];
        d_negative[i]=random_number[i]-temp2;

        if(d_positive[i]<0){
            d_positive[i]=0;
        }
    }
    printf("\ti\t\tRi\t\ti/n-R\t\tR-(i-1)/n\n");
    for(int i=1; i<=n; i++){
        printf("\t%d\t\t%.3f\t\t%.3f\t\t%.3f\n", i, random_number[i], d_positive[i], d_negative[i]);
    }
    float d_neg_max=d_negative[1];
    float d_pos_max=d_positive[1];
    for(int i=2; i<=n; i++){
        if(d_pos_max<d_positive[i]){
            d_pos_max=d_positive[i];
        }
        if(d_neg_max<d_negative[i]){
            d_neg_max=d_negative[i];
        }
    }
    printf("\n\nD+ =  %.3f\nD- =  %.3f\n", d_pos_max, d_neg_max);
    float d;
    if(d_pos_max>d_neg_max){
        d=d_pos_max;
    }
    else{
        d=d_neg_max;
    }
    printf("D =  %.3f\n", d);
    if(d<alpha){
        printf("\nRandom Number are uniformly distributed.\n");
    }
    else{
        printf("\nRandom Number are not uniformly distributed.\n");
    }
    
}