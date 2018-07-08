#/bin/bash

STAMP=$(date)

echo $STAMP

echo "[BUILDING $STAMP]"

yarn run build &&

echo "[COMMITTING]"

git add . &&
git commit -m "DEPLOYMENT: $(date)"

echo "[DEPLOYING]"

git push QAserver master

echo "[DONE]"
