BEGIN{
   printf "%-10s %-10s %-10s %-10s %-14s %-10s\n\n", "ranking", "points", "car_id", "year", "car make", "car model" > "part1"
   rank = 1
}


#printf "%-10s %-10s %-10s %-10s %-14s %-10s\n\n", "ranking", "points", "car_id", "year", "car make", "car model" > "sorted"

NR==1{
   printf "%-10s %-10s %-10s %-10s %-14s %-10s\n", rank, $1, $2, $3, $4, $5 >> "part1"
   prevPoints = $1
}


NR>1{
   if(prevPoints!=$1){
	rank++
   }
   
   printf "%-10s %-10s %-10s %-10s %-14s %-10s\n", rank, $1, $2, $3, $4, $5 >> "part1"

}

END{
}




