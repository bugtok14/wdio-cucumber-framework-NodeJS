import { spawn } from 'child_process';

// This script provides a Node.js-based runner for executing single feature files.

// Get command-line arguments, excluding the first two (node executable and script path).
const args = process.argv.slice(2);

// Find the index of the --spec flag.
const specIndex = args.findIndex(arg => arg === '--spec');
let specPath;

// Check if --spec and a path were provided.
if (specIndex !== -1 && args[specIndex + 1]) {
  specPath = args[specIndex + 1];
} else {
  console.error('\x1b[31mError: You must provide a path to a feature file using the --spec flag.\x1b[0m');
  console.error('Usage: node e2e.js --spec <path_to_your_feature_file>');
  process.exit(1);
}

console.log(`\x1b[32mRunning feature file: ${specPath}\x1b[0m`);

// Define the command and arguments to run.
const command = 'npx';
const commandArgs = ['wdio', 'wdio.conf.ts', '--spec', specPath];

// Spawn a child process to run the wdio command.
const wdioProcess = spawn(command, commandArgs, {
  // Use shell: true on Windows to correctly resolve .cmd scripts like npx.cmd.
  shell: process.platform === 'win32',
  // Inherit stdio to see the output in real-time in the current terminal.
  stdio: 'inherit'
});

// Listen for the process to close and exit with the same code.
wdioProcess.on('close', (code) => {
  console.log(`\x1b[34mWDIO process exited with code ${code}\x1b[0m`);
  process.exit(code);
});

// Handle any errors that occur when trying to spawn the process.
wdioProcess.on('error', (err) => {
  console.error('\x1b[31mFailed to start WDIO process.\x1b[0m');
  console.error(err);
  process.exit(1);
});
