var express = require('express');
var userModel = require('../Models/register')
var passengerRequest = require('../Models/passengerideModel')
var transpoeterRequest = require('../Models/transporterForm')
let nodemailer = require('nodemailer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',(req,res)=>{
  console.log(req.body);
  let a ='Its loged in Api'
  res.send(a);
})
router.post('/register',async (req,res)=>{
   try {
    const credentials = new userModel({
      username: req.body.username,
      email: req.body.email,
      password:req.body.password
    })
    credentials.save()
    .then(res.json({successUrl:'/login'}))
   console.log(credentials);
  } catch (error) {
   console.log(error);
  }
})

router.post('/login',async (req,res)=>{
    console.log(req.body);
    let user =  await userModel.findOne({email:req.body.email,password:req.body.password});
    if (user) {
      res.json(user)
    }else{
       res.json({noUser: true})
    } 
})

// saving requst datas.... 

router.post('/passengerForm',async (req,res)=>{
  console.log(req.body);
  let Prequsest = new passengerRequest({
    name: req.body.name,
    contact: req.body.contact,
    date:req.body.date,
    time:req.body.time,
    destination:req.body.Destination,
    pickup:req.body.pickupOint,
    hint:req.body.hint,
    id:req.body.id1,
    acceptBy:null,
    endPointT: null,
    satingPointT: null
  })

  Prequsest.save().then(res.json({success:'Request for your ride is Identified. We will get back to you with a suitable TRANSPORTER. THANK YOU'}))
  
  console.log(Prequsest);

})
router.post('/transporterForm',async (req,res)=>{
  console.log(req.body);
  let Trequsest = new transpoeterRequest({
    name: req.body.name,
    contact: req.body.contact,
    date:req.body.date,
    time:req.body.time,
    vehicle:req.body.vehicle,
    vehino:req.body.vehino,
    route:req.body.route,
    routEnd:req.body.routEnd,
    hint:req.body.hint,
    id:req.body.id1,
    acceptBy:null,
    pickUpForP:null,
    destiForP:null
  })
  Trequsest.save().then(res.json({success:'Request for your ride is Identified. We will get back to you with a suitable PASSENGER. THANK YOU'}))
  console.log(Trequsest);
})


// grabingRequsts......

router.get('/grabTrequsets/:id', async(req,res)=>{
   let requsts = await transpoeterRequest.find({ id: { $ne: req.params.id } })
  //  console.log(requsts);
   if (requsts) {
    res.json(requsts)
   }else{
    res.json({noRequest: "No Requests by now"})
  }
})

router.get('/grabPrequests/:id', async(req,res)=>{
  let requsts = await passengerRequest.find({ id: { $ne: req.params.id } })
  if (requsts) {
   console.log(requsts);
   res.json(requsts)
  }else{
   res.json({noRequest: "No Requests by now"})
 }
})

router.get('/getPassengerCreatedRequest/:id',async(req,res)=>{
  //  console.log(req.params.id)
   try {
   let id3 = req.params.id
      let Requests = await passengerRequest.find({id:id3})
      // console.log(Requests);
      res.json(Requests)
   } catch (error) {
    console.log(error);
   }
})
router.get('/getTransporterCreatedRequest/:id',async(req,res)=>{
  try {
    let id3 = req.params.id
       let Requests = await transpoeterRequest.find({id:id3})
      //  console.log(Requests);
       res.json(Requests)
    } catch (error) {
     console.log(error);
    }
})

router.post('/passengeRequestAceepted', async (req,res)=>{
  // console.log(req.body);
  let id = req.body.obJId
  console.log(id);
    try {
    let update = await transpoeterRequest.findByIdAndUpdate(id, { acceptBy: req.body.acctBy, pickUpForP:req.body.pickup, destiForP:req.body.desti },{new:true});
    console.log(update,"--------------")
    let rideData  = await userModel.findOne({_id:update.id})
    let ridermail = rideData.email;
    console.log(rideData)
    let transporter = nodemailer.createTransport({
      service:'gmail',
      auth:{
        user:'ecommercetest246@gmail.com',
        pass:'iftgqrcgrduigxuk'
      },
      tls:{
        rejectUnauthorized:false,
      },
    })
    let mailOption  = {
      from:"Hitch Hiker Team",
      to:ridermail,
      subject:"Hitch hiker Alert!!",
      Text:`hai ${rideData.username} your Ride has been Booked by someone login to explore your Ride!!`
    };
    transporter.sendMail(mailOption,function(err,info){
      if(err){
        console.log(err)
      }else{
        console.log("emailsent Succecfully")
        res.json(update)
      }
    })
    // console.log(update);
   
    } catch (error) {
      console.log(error);
    }
})

router.post('/transporterRequestAccepted',async (req,res)=>{
  console.log(req.body);
  try {
    let update = await passengerRequest.findByIdAndUpdate(req.body.objId,{acceptBy:req.body.acceptBy,  satingPointT:req.body.startingPoint,  endPointT:req.body.endPoint,status:"booked"},{new:true})
    
    // console.log(update);
    res.json(update)
  } catch (error) {
    console.log(error);
  }
})
router.post('/getAcceptedPassengerforT',async(req,res)=>{
  console.log(req.body);
  try {
    let Passenger = await userModel.find({_id:req.body.passengerId})
    console.log(Passenger);
    res.json(Passenger)
  } catch (error) {
    console.log(error);
  }
})
router.post('/getAcceptedTransporterforP',async(req,res)=>{
  console.log(req.body);
  try {
    let Passenger = await userModel.find({_id:req.body.passengerId})
    console.log(Passenger);
    res.json(Passenger)
  } catch (error) {
    console.log(error);
  }
})

router.delete('/deleteObject/:id',async(req,res)=>{
  console.log(req.params.id);
   let ress = await passengerRequest.findByIdAndDelete(req.params.id)
   if (ress != null) {
    res.json({status:'deleted'})
   }
   
})
router.delete('/deleteObjectT/:id',async(req,res)=>{
  console.log(req.params.id);
   let ress = await transpoeterRequest.findByIdAndDelete(req.params.id)
   if (ress != null) {
    res.json({status:'deleted'})
   }
   
})

router.get('/allTransporters',async(req,res)=>{
    let transportrs = await transpoeterRequest.find()
    // console.log(transportrs);
    if (transportrs) {
      res.json(transportrs)
    }else[
      res.json({responce:null})
    ]    
})


router.get('/allPassengers',async(req,res)=>{
  let passengers = await passengerRequest.find()
  console.log(passengers);
  if (passengers) {
    res.json(passengers)
  }else[
    res.json({responce:null})
  ]    
})
module.exports = router;
