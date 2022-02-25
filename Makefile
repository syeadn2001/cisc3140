lab1: init	
	+$(MAKE) -C lab_1


init: 
	git submodule update --init -recursive
	touch init


