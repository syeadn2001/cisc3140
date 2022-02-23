BEGIN{
   FS = ","
}


NR>1{
   sum = 0 
   for(i = 8; i<=NF; i++){
      sum +=$i
   } 
   
   printf "%-10i %-10i %-10i %-14s %-10s\n", sum, $7, $4, $5, $6 > "unsorted"

}

END{
}




