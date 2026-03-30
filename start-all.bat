@echo off
REM Start Backend Server in a new window
start "DEVINO Backend" cmd /k "cd /d "%CD%\server" && npm start"

REM Wait 3 seconds for backend to start
timeout /t 3 /nobreak

REM Start Frontend Server in a new window  
start "DEVINO Frontend" cmd /k "cd /d "%CD%\client" && npm run dev"

echo.
echo ========================================
echo Backend: http://localhost:5000
echo Frontend: http://localhost:3000
echo ========================================
