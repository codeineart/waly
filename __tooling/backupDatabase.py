#!/usr/bin/python3.5
import sys
from subprocess import call

# if len(sys.argv) > 1:
# 	#call(["mongodump", "--db", "mpm_data", "--out", str(sys.argv[1])])
# 	call(["mongodump", "--db", "mpm_data", "--out", "./"])
# else:  
# 	print("Please provide folder name for database backup")
# 	print("Usage: ./backupDatabase.py [folder_dump_name]")

print("Dumping database...")
call(["mongodump", "--db", "mpm_data", "--out", "./"])