const asyncHandler = require('express-async-handler')

// @desc Get goals
//@route GET /api/Goals
//@access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get Goals' })
})

// @desc set goals
//@route POST /api/Goals
//@access Private
const setGoal = asyncHandler(async (req, res) => {
  if(!req.body.text) {
   res.status(400) 
   throw new Error('Please add a text field.')
  }
  res.status(200).json({ message: 'set goal' })
})

// @desc update goals
//@route PUT /api/Goals/:id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updatete ${req.params.id}` })
})

// @desc delete goals
//@route DELETE /api/Goals/:id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
} 