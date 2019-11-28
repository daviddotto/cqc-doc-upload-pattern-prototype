const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Save page load time to 'time' variable
router.all('*', (req, _, next) => {
	req.session.data['time'] = new Date().getTime()
	req.session.data['fileUploaded'] = false
	req.session.data['fileProcessing'] = false
	req.session.data['fromCheck'] = false
	next()
})

router.post('/correct-file', (req, res) => {
	const isFileCorrect = req.session.data['doc-correct'] == 'yes'
	if (isFileCorrect) {
		res.redirect('multiple/doc-list')
	} else {
		res.redirect('multiple/upload-document')
	}
})

router.post('/correct-cv', (req, res) => {
	const isFileCorrect = req.session.data['doc-correct'] == 'yes'
	if (isFileCorrect) {
		res.redirect('single-file/check-your-answers')
	} else {
		res.redirect('single-file/cv-upload?fromCheck=true')
	}
})

module.exports = router
