@echo off
title Save TrendParlour to GitHub

set PATH=C:\Users\ncp034\Documents\node-v26.5.0-win-x64;%PATH%

cd /d C:\Users\ncp034\Documents\TrendParlour2-main\TrendParlour2-main

git add .

set /p message=Commit message:

git commit -m "%message%"

git push

pause