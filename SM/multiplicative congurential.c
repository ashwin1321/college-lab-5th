#include <stdio.h>

int main()
{
    int i, X0, m, a, N, random_number[100];

    printf("Enter the values of X0, m, a: ");
    scanf("%d %d %d", &X0, &m, &a);
    printf("\nEnter the no of random numbers: ");
    scanf("%d", &N);

    random_number[0] = X0;

    for (i = 1; i < N; i++)
    {
        random_number[i] = (random_number[i - 1] * a) % m;
    }

    printf("\nRandom numbers:\n");
    for (i = 0; i < N; i++)
    {
        printf("%d ", random_number[i]);
    }
}