const express = require('express')
const router = express.Router()
const scheduleController = require('../controller/scheduleController')


//return all schedules correlating to volunteer
router.get('volunteer/:id', scheduleController.getAllSchedules)


//return all schedules correlating to organization
router.get('organization/:id', scheduleController.getAllSchedules)

//create schedule

router.post('/create', scheduleController.postSchedule)

// add volunteer to schedule

router.put('/pickup/:id', scheduleController.pickupVolunteer)

// remove volunteer from schedule
   
router.put('/drop/:id', scheduleController.dropVolunteer)

module.exports = router