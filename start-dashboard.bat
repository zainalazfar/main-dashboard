@echo off
title Launching Creator Main Dashboard...
cd /d "%~dp0"
echo ========================================================
echo       Creator Main Dashboard & Showcase Hub
echo ========================================================
echo.
echo Starting local web server at http://localhost:5174 ...
echo Opening your web browser automatically...
echo.
echo ========================================================
echo.

node node_modules\vite\bin\vite.js --port 5174 --open
