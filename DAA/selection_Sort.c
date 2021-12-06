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

void selectionSort(int A[], int n)
{
    int i, j, min_index;
    clock_t initial, final;

   
    initial = clock();                                     // initial processor time

    for (i = 0; i < n; i++)
    {
        min_index = i;                                     // assume the minimum element is ith element
        
        for (j = i + 1; j < n; j++)                        // compare the minimum with the elements to the right of it
        {
            
            if (A[j] < A[min_index])                      // change the minimum index if another element is smaller than current minimum
            {
                min_index = j;
            }
        }
        
        swap(&A[min_index], &A[i]);                        // swap the found minimum with the ith element
    }
   
    final = clock();                                       // initial processor time
    
    time_taken = (double)(final - initial) / CLOCKS_PER_SEC;    // total time taken by the sorting in seconds
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
    selectionSort(A, n);

    printf("\nSorted items:\n");
    for (i = 0; i < n; i++)
    {
        printf("%d \t", A[i]);
    }
    printf("\nTime taken to sort %d items = %lf", n, time_taken);
    return 0;
}
