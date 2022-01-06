const express= require('express');
const { getBootcamps,getBootcamp,createBootcamp,updateBootcamp,deleteBootcamp} = require('../controllers/bootcamps')
const router = express.Router();
// router.get('/',(req,res)=>{
//     res.status(200).json({sucess:true, msg:`Show all bootcamp`})
// });
// router.get('/:id',(req,res)=>{
//     res.status(200).json({sucess:true, msg:`Show single bootcamp${req.params.id}`})
// });

// router.post('/',(req,res)=>{
//     res.status(200).json({sucess:true, msg:`Create new bootcamp`})
// });
// router.put('/:id',(req,res)=>{
//     res.status(200).json({sucess:true, msg:`Update bootcamp${req.params.id}`})
// });
// router.delete('/:id',(req,res)=>{
//     res.status(200).json({sucess:true, msg:`Delete bootcamp${req.params.id}`})
// });
router.route('/').get(getBootcamps).post(createBootcamp).put(updateBootcamp).delete(deleteBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);

module.exports = router
