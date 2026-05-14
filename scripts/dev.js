const { spawn } = require('child_process');
const path = require('path');

/**
 * Runner script to start Backend, Frontend, and JSON Server concurrently.
 * Handles Windows-specific command extensions (.cmd) to bypass PowerShell script restrictions.
 */

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';
const npxCmd = isWindows ? 'npx.cmd' : 'npx';

const run = (name, command, args, cwd) => {
  const child = spawn(command, args, { 
    cwd, 
    shell: true, 
    stdio: 'inherit' 
  });

  console.log(`\x1b[36m[${name}]\x1b[0m Starting service...`);

  child.on('error', (err) => {
    console.error(`\x1b[31m[${name}] Failed to start:\x1b[0m`, err.message);
  });

  child.on('close', (code) => {
    if (code !== 0 && code !== null) {
      console.log(`\x1b[31m[${name}] Exited with code ${code}\x1b[0m`);
    }
  });

  return child;
};

// 1. Start JSON Server (Port 8000)
run('JSON-Server', npxCmd, ['json-server', '--watch', 'db.json', '--port', '8000'], path.join(__dirname, '..'));

// 2. Start Backend (Port 5000)
run('Backend', npmCmd, ['run', 'dev'], path.join(__dirname, '../backend'));

// 3. Start Frontend (Port 5173)
run('Frontend', npmCmd, ['run', 'dev'], path.join(__dirname, '../frontend'));

console.log('\x1b[32m[System] All services initiated. Waiting for servers to be ready...\x1b[0m');
