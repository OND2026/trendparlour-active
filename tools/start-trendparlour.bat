@echo off
title TrendParlour Development Server

echo.
echo =====================================
echo       Starting TrendParlour
echo =====================================
echo.

set PATH=C:\Users\ncp034\Documents\node-v26.5.0-win-x64;%PATH%

cd /d C:\Users\ncp034\Documents\TrendParlour2-main\TrendParlour2-main

start http://localhost:3000

npm run dev

pause