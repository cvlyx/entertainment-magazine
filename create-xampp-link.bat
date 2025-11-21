@echo off
echo Creating symbolic link for PULSE Magazine in XAMPP...
echo.

REM Check if running as administrator
net session >nul 2>&1
if %errorLevel% == 0 (
    echo Running as administrator - Good!
) else (
    echo ERROR: This script must be run as Administrator!
    echo Right-click this file and select "Run as administrator"
    pause
    exit /b 1
)

REM Set paths
set "PROJECT_PATH=%~dp0php-backend"
set "XAMPP_PATH=C:\xampp\htdocs\pulse-magazine"

echo Project path: %PROJECT_PATH%
echo XAMPP path: %XAMPP_PATH%
echo.

REM Remove existing link if it exists
if exist "%XAMPP_PATH%" (
    echo Removing existing link...
    rmdir "%XAMPP_PATH%" 2>nul
)

REM Create symbolic link
echo Creating symbolic link...
mklink /D "%XAMPP_PATH%" "%PROJECT_PATH%"

if %errorLevel% == 0 (
    echo.
    echo SUCCESS! Symbolic link created successfully!
    echo.
    echo You can now access your website at:
    echo http://localhost/pulse-magazine/
    echo.
    echo Admin panel at:
    echo http://localhost/pulse-magazine/admin/
    echo.
) else (
    echo.
    echo ERROR: Failed to create symbolic link!
    echo Make sure XAMPP is installed at C:\xampp\
    echo.
)

pause
