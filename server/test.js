const {spawn} = require('child_process');

const pythonScriptPath = 'D:/YMCA/3rd year/6th semester/Project/cropease/server/pythonScript/supervised.py';

const childPython = spawn('python', [pythonScriptPath]);
        

childPython.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`)
})

childPython.stderr.on('data', (data) => {
    console.log(`stdoerr: ${data}`)
})

childPython.on('close', (close) => {
    console.log(`Child process exited with code ${close}`)
})