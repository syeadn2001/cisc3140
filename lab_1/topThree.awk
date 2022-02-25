FNR > 3 {
	fileName = $5""
	dir = sprintf("%s/%s", "cars", fileName)
		
	if(!(fileName in a)){
		a[fileName]=0
		print $0 > dir
	}
	else{
		print $0 >> dir

	}
}
