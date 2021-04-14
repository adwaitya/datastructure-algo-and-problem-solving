export default function IsArraySortedOrder(Arr, n) {
    if(n === 1 ) 
        return 1;
    return (Arr[n - 1] < Arr[n - 2] ? 0 : IsArraySortedOrder(Arr, n- 1));

}