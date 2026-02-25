@echo off
setlocal

cd /d "%~dp0"

set "BASE_PORT=3000"
set "PORT=%BASE_PORT%"
set "HOST=127.0.0.1"

set "NODE_DIR=C:\Program Files\nodejs"
set "NODE_EXE=%NODE_DIR%\node.exe"
set "NPM_CMD=%NODE_DIR%\npm.cmd"

if not exist "%NODE_EXE%" (
  echo [ERROR] node.exe not found at %NODE_EXE%
  echo Install Node.js LTS from: https://nodejs.org/
  pause
  exit /b 1
)

if not exist "%NPM_CMD%" (
  echo [ERROR] npm.cmd not found at %NPM_CMD%
  echo Install Node.js LTS from: https://nodejs.org/
  pause
  exit /b 1
)

set "PATH=%NODE_DIR%;%PATH%"

if not exist "node_modules" (
  echo Installing dependencies...
  call "%NPM_CMD%" install
  if errorlevel 1 (
    echo [ERROR] npm install failed.
    pause
    exit /b 1
  )
)

:find_free_port
netstat -ano | findstr /R /C:":%PORT% .*LISTENING" >nul
if %ERRORLEVEL%==0 (
  set /a PORT+=1
  goto find_free_port
)

set "URL=http://localhost:%PORT%"

echo Starting website at %URL%
if not "%PORT%"=="%BASE_PORT%" (
  echo Port %BASE_PORT% is in use. Using %PORT%.
)

start "" "%URL%"

call "%NPM_CMD%" run dev -- --hostname %HOST% --port %PORT%

echo.
echo Server stopped.
echo Keep this window open to review logs, or press any key to close.
pause >nul
