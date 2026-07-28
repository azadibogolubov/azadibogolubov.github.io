<#
  start.ps1

  Installs dependencies for both the frontend and backend, then starts
  both dev servers at once. Run this from the project root (the folder
  that contains /frontend and /backend), e.g.:

      .\start.ps1

  Each server opens in its own new PowerShell window so their logs don't
  mix. Close those windows (or Ctrl+C in each) to stop them.
#>

$ErrorActionPreference = "Stop"

$root = $PSScriptRoot
$frontend = Join-Path $root "frontend"
$backend = Join-Path $root "backend"

if (-not (Test-Path $frontend)) {
    Write-Error "Couldn't find a 'frontend' folder next to this script."
}
if (-not (Test-Path $backend)) {
    Write-Error "Couldn't find a 'backend' folder next to this script."
}

Write-Host "Installing backend dependencies..." -ForegroundColor Cyan
Push-Location $backend
npm install
Pop-Location

Write-Host "Installing frontend dependencies..." -ForegroundColor Cyan
Push-Location $frontend
npm install
Pop-Location

Write-Host "Starting backend (http://localhost:4000)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$backend'; npm run dev"

Write-Host "Starting frontend (http://localhost:5173)..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$frontend'; npm run dev"

Write-Host "Both servers are starting in their own windows." -ForegroundColor Yellow
