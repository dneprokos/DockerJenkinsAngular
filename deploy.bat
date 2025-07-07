@echo off
echo 🚀 Starting Angular Firebase Deployment...
echo.

REM Check if PowerShell is available
powershell -Command "Get-Host" >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ PowerShell is not available
    pause
    exit /b 1
)

REM Run the PowerShell deployment script
powershell -ExecutionPolicy Bypass -File "deploy.ps1" %*

REM Pause to show results
pause 