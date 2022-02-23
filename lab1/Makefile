lab1:
#	(head -n 1 unsorted)|sort -k1 -n unsorted > "sorted
	
	awk -f newRank.awk data_lab1/data.csv
	#awk 'NR>2{} "unsorted" | sort -n > "sorted"
	awk 'BEGIN{printf "%-10s %-10s %-10s %-14s %-10s\n\n", "ranking", "car_id", "year", "car make", "car model" > "sorted"}' unsorted
	sort -k1 -n unsorted >> sorted



