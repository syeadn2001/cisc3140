BEGIN{
 
}

NR>=3{
    fileName = $5""	
    print $0 >>"cars/"fileName
}
   





