@echo off
title PULSE Magazine - XAMPP Setup
color 0A
echo.
echo  ██████╗ ██╗   ██╗██╗     ███████╗███████╗
echo  ██╔══██╗██║   ██║██║     ██╔════╝██╔════╝
echo  ██████╔╝██║   ██║██║     ███████╗█████╗  
echo  ██╔═══╝ ██║   ██║██║     ╚════██║██╔══╝  
echo  ██║     ╚██████╔╝███████╗███████║███████╗
echo  ╚═╝      ╚═════╝ ╚══════╝╚══════╝╚══════╝
echo.
echo  African Entertainment Magazine - XAMPP Setup
echo  ============================================
echo.

REM Check if running as administrator
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo  WARNING: For best results, run as Administrator
    echo  Right-click this file and select "Run as administrator"
    echo.
)

echo  Choose setup method:
echo  1. Create Symbolic Link (Recommended - files stay in current location)
echo  2. Copy Files to XAMPP (Traditional method)
echo  3. Create Desktop Shortcuts Only
echo  4. Complete Setup (Link + Shortcuts + Start Services)
echo.
set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" goto :symlink
if "%choice%"=="2" goto :copy
if "%choice%"=="3" goto :shortcuts
if "%choice%"=="4" goto :complete
goto :invalid

:symlink
echo.
echo Creating symbolic link...
set "PROJECT_PATH=%~dp0php-backend"
set "XAMPP_PATH=C:\xampp\htdocs\pulse-magazine"

if exist "%XAMPP_PATH%" rmdir "%XAMPP_PATH%" 2>nul
mklink /D "%XAMPP_PATH%" "%PROJECT_PATH%" >nul 2>&1

if %errorLevel% == 0 (
    echo ✓ Symbolic link created successfully!
) else (
    echo ✗ Failed to create symbolic link. Trying copy method...
    goto :copy
)
goto :end

:copy
echo.
echo Copying files to XAMPP...
set "PROJECT_PATH=%~dp0php-backend"
set "XAMPP_PATH=C:\xampp\htdocs\pulse-magazine"

if exist "%XAMPP_PATH%" rmdir /s /q "%XAMPP_PATH%"
xcopy "%PROJECT_PATH%" "%XAMPP_PATH%" /E /I /H /Y >nul
if not exist "%XAMPP_PATH%\uploads" mkdir "%XAMPP_PATH%\uploads"
echo ✓ Files copied successfully!
goto :end

:shortcuts
echo.
echo Creating desktop shortcuts...
set "DESKTOP=%USERPROFILE%\Desktop"

echo [InternetShortcut] > "%DESKTOP%\PULSE Magazine.url"
echo URL=http://localhost/pulse-magazine/ >> "%DESKTOP%\PULSE Magazine.url"

echo [InternetShortcut] > "%DESKTOP%\PULSE Admin.url"
echo URL=http://localhost/pulse-magazine/admin/ >> "%DESKTOP%\PULSE Admin.url"

echo [InternetShortcut] > "%DESKTOP%\XAMPP Control.url"
echo URL=C:\xampp\xampp-control.exe >> "%DESKTOP%\XAMPP Control.url"

echo ✓ Desktop shortcuts created!
goto :end

:complete
echo.
echo Performing complete setup...

REM Create link/copy
set "PROJECT_PATH=%~dp0php-backend"
set "XAMPP_PATH=C:\xampp\htdocs\pulse-magazine"

if exist "%XAMPP_PATH%" rmdir "%XAMPP_PATH%" 2>nul
mklink /D "%XAMPP_PATH%" "%PROJECT_PATH%" >nul 2>&1

if %errorLevel% neq 0 (
    xcopy "%PROJECT_PATH%" "%XAMPP_PATH%" /E /I /H /Y >nul
    if not exist "%XAMPP_PATH%\uploads" mkdir "%XAMPP_PATH%\uploads"
    echo ✓ Files copied to XAMPP
) else (
    echo ✓ Symbolic link created
)

REM Create shortcuts
set "DESKTOP=%USERPROFILE%\Desktop"
echo [InternetShortcut] > "%DESKTOP%\PULSE Magazine.url"
echo URL=http://localhost/pulse-magazine/ >> "%DESKTOP%\PULSE Magazine.url"
echo [InternetShortcut] > "%DESKTOP%\PULSE Admin.url"
echo URL=http://localhost/pulse-magazine/admin/ >> "%DESKTOP%\PULSE Admin.url"
echo ✓ Desktop shortcuts created

REM Try to start XAMPP services
echo.
echo Starting XAMPP services...
if exist "C:\xampp\xampp-control.exe" (
    start "" "C:\xampp\xampp-control.exe"
    echo ✓ XAMPP Control Panel opened
) else (
    echo ⚠ XAMPP not found at default location
)

goto :end

:invalid
echo Invalid choice. Please run the script again.
goto :end

:end
echo.
echo ============================================
echo  Setup Complete!
echo ============================================
echo.
echo  Next steps:
echo  1. Start XAMPP (Apache + MySQL)
echo  2. Open phpMyAdmin: http://localhost/phpmyadmin/
echo  3. Create database: pulse_magazine
echo  4. Import: database/schema.sql
echo  5. Import: database/sample-data.sql (optional)
echo.
echo  Access your website:
echo  🌐 Website: http://localhost/pulse-magazine/
echo  🔧 Admin:   http://localhost/pulse-magazine/admin/
echo  📊 Database: http://localhost/phpmyadmin/
echo.
echo  Default admin login:
echo  Username: admin
echo  Password: admin123
echo.
echo Press any key to open your website...
pause >nul

REM Open website in default browser
start http://localhost/pulse-magazine/

exit
