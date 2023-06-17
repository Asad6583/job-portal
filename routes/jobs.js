const express = require('express')

const router = express.Router()
const {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
  showStats
} = require('../controllers/jobs')

router.get('/',getAllJobs);
router.post('/createJob',createJob);
router.get('/stats',showStats)
router.get('/:id',getJob).get(getJob);
router.delete('/:id',deleteJob);
router.patch('/:id',updateJob);

module.exports = router
