lab1:

	#Adds the total points column to new data and puts it in "unsorted.txt"  
	awk -f newPoints.awk data_lab1/data.csv
	#Sorts the previous file in descending order and stores it in "sorted.txt"
	sort -k1 -rn unsorted > sorted
	#Adds the proper rankings to complete the first part => puts it in "part.txt"
	awk -f newRank.awk sorted
	#Creates properly ranked text files of each car_make
	awk -f topThree.awk part1
	#Creating header for part2 of the lab
	awk 'BEGIN{printf "%-10s %-10s %-10s %-10s %-14s %-10s\n\n", "ranking", "points", "car_id", "year", "car make", "car model" > "part2"}'
	@#Copying top 3 records from the car tables created previously
	@awk 'NR<4{print $0 >> "part2"}' cars/Acura
	@awk 'NR<4{print $0 >> "part2"}' cars/Audi
	@awk 'NR<4{print $0 >> "part2"}' cars/Benz
	@awk 'NR<4{print $0 >> "part2"}' cars/Bmw
	@awk 'NR<4{print $0 >> "part2"}' cars/Chevy
	@awk 'NR<4{print $0 >> "part2"}' cars/Chrystler
	@awk 'NR<4{print $0 >> "part2"}' cars/Civic
	@awk 'NR<4{print $0 >> "part2"}' cars/Dodge
	@awk 'NR<4{print $0 >> "part2"}' cars/Ford
	@awk 'NR<4{print $0 >> "part2"}' cars/Honda
	@awk 'NR<4{print $0 >> "part2"}' cars/Hyundai
	@awk 'NR<4{print $0 >> "part2"}' cars/Infiniti
	@awk 'NR<4{print $0 >> "part2"}' cars/Infinity
	@awk 'NR<4{print $0 >> "part2"}' cars/Jeep
	@awk 'NR<4{print $0 >> "part2"}' cars/Lexus
	@awk 'NR<4{print $0 >> "part2"}' cars/Mazda
	@awk 'NR<4{print $0 >> "part2"}' cars/Mercedes
	@awk 'NR<4{print $0 >> "part2"}' cars/Mitsu
	@awk 'NR<4{print $0 >> "part2"}' cars/Mitsub
	@awk 'NR<4{print $0 >> "part2"}' cars/Nissan
	@awk 'NR<4{print $0 >> "part2"}' cars/Scion
	@awk 'NR<4{print $0 >> "part2"}' cars/Subaru
	@awk 'NR<4{print $0 >> "part2"}' cars/Toyota
	@awk 'NR<4{print $0 >> "part2"}'  cars/Volkswagen
	@awk 'NR<4{print $0 >> "part2"}' cars/Volvo	


