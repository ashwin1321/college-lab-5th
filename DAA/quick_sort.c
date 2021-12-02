 #include&lt;stdio.h&gt;
// #include&quot;sort_helpers.h&quot;
int main(){
int A[100],n;
displayTitle(&quot;Merge Sort&quot;);
printf(&quot;Enter number of items to sort: &quot;);
scanf(&quot;%d&quot;,&amp;n);
getSortableArray(A,n);
mergeSort(A,0,n-1);
displaySortedItems(A,n);
return 0;
}
void mergeSort(int A[],int left,int right){
int m;
if(left&lt;right){
m=(left+right)/2;
mergeSort(A,left,m);
mergeSort(A,m+1,right);
Merge(A,left,m,right);
}
}
void Merge(int A[],int left,int mid,int right){
int B[right-left+1];
int i=left,j=mid+1,k=0;
while(i&lt;=mid &amp;&amp; j&lt;=right)
B[k++]=A[i]&lt;=A[j]?A[i++]:A[j++];
while(i&lt;=mid)
B[k++]=A[i++];
while(j&lt;=right)
B[k++]=A[j++];
for(i=left;i&lt;=right;i++)
A[i]=B[i-left];
}