@echo off
echo Copying PULSE Magazine to XAMPP...
echo.

REM Set paths
set "PROJECT_PATH=%~dp0php-backend"
set "XAMPP_PATH=C:\xampp\htdocs\pulse-magazine"

echo Source: %PROJECT_PATH%
echo Destination: %XAMPP_PATH%
echo.

REM Check if XAMPP exists
if not exist "C:\xampp\htdocs\" (
    echo ERROR: XAMPP not found at C:\xampp\
    echo Please install XAMPP or update the path in this script.
    pause
    exit /b 1
)

REM Remove existing folder if it exists
if exist "%XAMPP_PATH%" (
    echo Removing existing files...
    rmdir /s /q "%XAMPP_PATH%"
)

REM Copy files
echo Copying files...
xcopy "%PROJECT_PATH%" "%XAMPP_PATH%" /E /I /H /Y

REM Create uploads folder with permissions
if not exist "%XAMPP_PATH%\uploads" (
    mkdir "%XAMPP_PATH%\uploads"
)

echo.
echo SUCCESS! Files copied successfully!
echo.
echo You can now access your website at:
echo http://localhost/pulse-magazine/
echo.
echo Admin panel at:
echo http://localhost/pulse-magazine/admin/
echo.
echo Don't forget to:
echo 1. Start XAMPP (Apache + MySQL)
echo 2. Create database 'pulse_magazine'
echo 3. Import the SQL files from database folder
echo.

pause
