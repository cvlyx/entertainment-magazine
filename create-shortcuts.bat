@echo off
echo Creating desktop shortcuts for PULSE Magazine...
echo.

REM Get desktop path
set "DESKTOP=%USERPROFILE%\Desktop"

REM Create shortcut for website
echo Creating website shortcut...
echo [InternetShortcut] > "%DESKTOP%\PULSE Magazine - Website.url"
echo URL=http://localhost/pulse-magazine/ >> "%DESKTOP%\PULSE Magazine - Website.url"
echo IconFile=C:\Windows\System32\shell32.dll >> "%DESKTOP%\PULSE Magazine - Website.url"
echo IconIndex=13 >> "%DESKTOP%\PULSE Magazine - Website.url"

REM Create shortcut for admin panel
echo Creating admin panel shortcut...
echo [InternetShortcut] > "%DESKTOP%\PULSE Magazine - Admin.url"
echo URL=http://localhost/pulse-magazine/admin/ >> "%DESKTOP%\PULSE Magazine - Admin.url"
echo IconFile=C:\Windows\System32\shell32.dll >> "%DESKTOP%\PULSE Magazine - Admin.url"
echo IconIndex=1 >> "%DESKTOP%\PULSE Magazine - Admin.url"

REM Create shortcut for XAMPP Control Panel
echo Creating XAMPP Control Panel shortcut...
echo [InternetShortcut] > "%DESKTOP%\XAMPP Control Panel.url"
echo URL=C:\xampp\xampp-control.exe >> "%DESKTOP%\XAMPP Control Panel.url"
echo IconFile=C:\xampp\xampp-control.exe >> "%DESKTOP%\XAMPP Control Panel.url"
echo IconIndex=0 >> "%DESKTOP%\XAMPP Control Panel.url"

REM Create shortcut for phpMyAdmin
echo Creating phpMyAdmin shortcut...
echo [InternetShortcut] > "%DESKTOP%\phpMyAdmin - Database.url"
echo URL=http://localhost/phpmyadmin/ >> "%DESKTOP%\phpMyAdmin - Database.url"
echo IconFile=C:\Windows\System32\shell32.dll >> "%DESKTOP%\phpMyAdmin - Database.url"
echo IconIndex=16 >> "%DESKTOP%\phpMyAdmin - Database.url"

echo.
echo SUCCESS! Desktop shortcuts created:
echo - PULSE Magazine - Website
echo - PULSE Magazine - Admin  
echo - XAMPP Control Panel
echo - phpMyAdmin - Database
echo.

pause
