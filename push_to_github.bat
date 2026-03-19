@echo off
REM Script para inicializar repo y empujar a GitHub (Windows)
REM Ejecuta desde la carpeta del proyecto: push_to_github.bat

SET REPO_URL=https://github.com/LucasRpoR/LucasRepo.git

if not exist .git (
  git init
  git add .
  git commit -m "Initial site"
  git branch -M main
  git remote add origin %REPO_URL%
)

echo Pushing to %REPO_URL% ...
git add .
git commit -m "Update site" || echo "No changes to commit"
git push -u origin main

echo Hecho. Si hay errores, asegúrate de tener Git instalado y estar autenticado.
pause
