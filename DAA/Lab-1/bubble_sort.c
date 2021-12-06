#include <stdbool.h>
#include <time.h>
#include <stdio.h>

double time_taken;

void swap(int *a, int *b)
{
    int temp = *a;
    *a = *b;
    *b = temp;
}

void bubbleSort(int A[], int n)
{
    int switched, pass, i;
    clock_t initial, final;

    initial = clock();                                   // initial process time
    switched = true;                                    // check if array swaped or not

    for (pass = 0; pass < n - 1 && switched; pass++)    // if no swaps it stops working
    {
        switched = false;
        for (i = 0; i < n - 1 - pass; i++)
        {
            if (A[i] > A[i + 1])                        // compare adjacent array elements    
            {
                switched = true;                        // states elements have been swapped
                swap(&A[i], &A[i + 1]);
            }
        }
    }

    final = clock();                                    // final processor time
    
    time_taken = (double)(final - initial) / CLOCKS_PER_SEC; // total time taken by the sorting 
}

int main()
{
    int n, i;
    printf("Enter the size of array: ");
    scanf("%d", &n);
    int A[n];
    printf("Enter elements of array: \n");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &A[i]);
    }

    bubbleSort(A, n);

    printf("\nSorted items:\n");
    for (i = 0; i < n; i++)
    {
        printf("%d \t", A[i]);
    }
    printf("\nTime taken to sort %d items = %lf sec", n, time_taken);
    return 0;
}