#!/usr/bin/python3.5
import sys
from subprocess import call

# if len(sys.argv) > 1:
# 	#call(["mongorestore", "--db=mpm_data", str(sys.argv[1])]) 
# else:  
# 	print("Please provide the nomber of folder where the collections rest.")
# 	print("Usage: ./restoreDatabase.py [dumped_folder]")

print("Restoring database...")
call(["mongorestore", "--db=mpm_data", "./mpm_data"])
