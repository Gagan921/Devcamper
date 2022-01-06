// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req,res,next)=>{
    res.status(200).json({sucess:true, msg:`Show bootcamp`,hello:req.hello})

}

// @desc Get a single bootcamp
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req,res,next)=>{                        //This is just creating arrow function to fetch logic from controllers
    res.status(200).json({sucess:true, msg:`Show single bootcamp${req.params.id}`})

}

// @desc create a bootcamp
// @route POST /api/v1/bootcamps
// @access Private
exports.createBootcamp = (req,res,next)=>{
    res.status(200).json({sucess:true, msg:`Create bootcamp`})

}

// @desc Update a bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamp = (req,res,next)=>{
    res.status(200).json({sucess:true, msg:`Update bootcamp${req.params.id}`})

}


// @desc Delete bootcamp
// @route DELETE /api/v1/bootcamps
// @access Private
exports.deleteBootcamp = (req,res,next)=>{
    res.status(200).json({sucess:true, msg:`Delete bootcamp${req.params.id}`})

}

