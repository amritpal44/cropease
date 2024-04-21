const {spawn} = require('child_process')

exports.supervisedPrediction = async(req, res) => {
    
    try {

        const {N, P, K, temperature, humidity, ph, rainfall} = req.body;

        if(!N || !P || !K || !temperature || !humidity || !ph || !rainfall){
            return res.status(400).json({
                success: false,
                message: "All required fields are not entered."
            })
        }

        const pythonScriptPath = 'D:/YMCA/3rd year/6th semester/Project/cropease/server/pythonScript/supervised.py';
        //const childPython = spawn('python', [pythonScriptPath]);
        const childPython =  spawn('python', [pythonScriptPath, N, P, K, temperature, humidity, ph, rainfall]);
        
        childPython.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`)

            return res.status(200).json({
                success: true,
                message: "Prediction successful",
                data: data.toString('utf-8').trim()
            })
        })
        
        childPython.stderr.on('data', (data) => {
            console.log(`stdoerr: ${data}`)
        })
        
        childPython.on('close', (close) => {
            console.log(`Child process exited with code ${close}`)
        })

    } catch (error) {
        console.log("error", error)
        return res.status(500).json({
            success: false,
            message: "Some issues in supervised learning backend",
            error: error
        })
    }
}