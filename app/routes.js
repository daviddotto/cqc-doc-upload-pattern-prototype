const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Save page load time to 'time' variable
router.all('*', (req, _, next) => {
    req.session.data['time'] = new Date().getTime()
    req.session.data['fileUploaded'] = false
    next()
})

router.post('/correct-file', (req, res) => {
    const isFileCorrect = req.session.data['doc-correct'] == 'yes'
    if (isFileCorrect) {
        res.redirect('index')
    } else {
        res.redirect('upload-document')
    }
})

module.exports = router
