const Volunteer = require("../models/volunteer");
const jwt = require('jasonwebtoken');



exports.getAllVolunteers = async(req, res) =>{
    // retrieve all volunteers from DB
    const volunteers = await Volunteer.find()

    // if no volunteers
    if (!volunteers.length) {
        return res.status(400).json({ message: "No Volunteers found" })
    }

    // respond with all volunteer data in json form
    res.json(volunteers)
}




exports.getVolunteer = async (req, res) =>{
    // Get specific volunteer from DB by ID
    let id = req.params.id
    const volunteer = await Volunteer.findById(id)

    // if no vulunteer is found
    if(!volunteer){
        return res.status(400).json({ message: "Volunteer not found" })
    }

    // respond with specific volunteer data in json
    res.json(volunteer)
}




exports.login = async (req, res) => {
    // here we store email and password from form
    let {email, password} = req.body

    // here we make sure they input user and pass
    if(!email || !password){
        return res.status(400).json({ message: 'All fields are required' })
    }

    email = email.toLowerCase();

    // here we check if user is existing in DB
    const exists = await Volunteer.findone({email: email})

    if(!exist){
        return res.status(400).json({ message: "Volunteer does not exists" })
    }

    // here we check if the password is correct with user
    const isPassword = await exists.comparePassword(password)

    if(!isPassword){
        return res.status(400).json({ message: "Wrong password" })
    }

    const accessToken = jwt.sign(
        {
            "VolunteerInfo": {
                "email": exists.email,
                "roles":[ "volunteer"]
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
    )

    res.cookie('jwt', {
        httpOnly: true, //accessible only by web server 
        secure: true, //https
        sameSite: 'None', //cross-site cookie 
    })
}

exports.signUp = async (req, res) => {
    let volunteer = new Volunteer(req.body);

    if (!volunteer.firstname || !volunteer.lastname  || !volunteer.password || !volunteer.email) {
        return res.status(400).json({ message: "All field are required" })
    }

    volunteer.email = volunteer.email.toLowerCase()

    const isDuplicate = await Volunteer.findOne({email: volunteer.email})

    if(isDuplicate){
        return res.status(400).json({ message: "Volunteer with email already exists" })
    }

    const isSaved = await volunteer.save()

    if(isSaved){
        res.status(201).json({ message: `The volunteer  ${volunteer.firstname + " "+ volunteer.lastname} has been created successfully` })
    }
    else{
        res.status(400).json({ message: 'Invalid data recived' })

    }

}