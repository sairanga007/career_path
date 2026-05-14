@echo off
echo Starting IntellCareer Servers...

echo Starting Backend Server...
cd backend
start cmd /k "npm run dev"
cd ..

echo Starting Frontend Server...
cd frontend
start cmd /k "npm run dev"
cd ..

echo Starting JSON Server...
start cmd /k "npx json-server --watch db.json --port 8000"

echo Waiting a few seconds for servers to start...
timeout /t 5 /nobreak >nul

echo Opening Login Page in Browser...
start http://localhost:5173/login

echo Done! The servers are now running in separate windows.
