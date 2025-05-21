# Change directories as needed
$nodeDir = "C:\Dev\final_year_project\backend\fyp_backend\src"
$pythonDir = "C:\Dev\final_year_project\backend\fyp_backend\python_ai_backend"

# Start Node.js server
Start-Process powershell -ArgumentList "cd `"$nodeDir`"; node server.js" -WindowStyle Normal

# Start Python server
Start-Process powershell -ArgumentList "cd `"$pythonDir`"; python load_sdxl_model.py" -WindowStyle Normal
