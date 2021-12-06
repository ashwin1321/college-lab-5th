#include <stdbool.h>
#include <time.h>
#include <stdio.h>

double time_taken;

void insertionSort(int A[], int n)
{
    int i, j, key;
    clock_t initial, final;
    
    initial = clock();                                  // initial processor time
    for (i = 1; i < n; i++)
    {
        key = A[i];
        
        for (j = i - 1; j >= 0 && key < A[j]; j--)      // compare key with each elementuntil an element smaller than key is found
        {
            A[j + 1] = A[j];
        }
        A[j + 1] = key;
    }

    final = clock();                                    // final processor time
    
    time_taken = (double)(final - initial) / CLOCKS_PER_SEC;  // total time taken by the sorting in seconds
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

    insertionSort(A, n);

    printf("\nSorted items:\n");
    for (i = 0; i < n; i++)
    {
        printf("%d \t", A[i]);
    }
    printf("\nTime taken to sort %d items = %lf", n, time_taken);
    return 0;
}
