const express = require('express');
const fs= require('fs')
const users=require("./MOCK_DATA.json")

const {connectMongoDb}=require('./connection');
const {logReqRes}=require('./middlewares');

const userRouter = require('./routes/user');

const app = express();
const PORT = 3000;

//connect to mongodb
connectMongoDb('mongodb://127.0.0.1:27017/youtube-app-1')

// mongoose.connect('mongodb://127.0.0.1:27017/youtube-app-1')
 .then(()=>console.log("connected to db"))
 .catch(err=>console.log("Mongo error",err));


//Middleware-plugin
app.use(express.urlencoded({extended:false}));

//self made middleware
app.use(logReqRes("log.txt"));
// app.use((req,res,next)=>{
//     fs.appendFile(
//         "log.txt",
//         `\n${Date.now()}: ${req.method}: ${req.ip}: ${req.path}\n`,(err,data)=>{
//             next();
//         }
//     )
    //res.setHeader("X-My name","Masil farooq").....//always add X to custom headers.

    //console.log(req.headers)

   // return res.json ({msg:"hello from middleware 1"});

// });


//for browsers only
//getting person names
// app.get('/users',async (req, res) => {
//     const allDbUsers= await User.find({});
//     const html=`
//     <ul>
//     ${allDbUsers.map(user=>`<li>${user.first_name} ${user.last_name}- ${user.email}</li>`).join('')}
//     </ul>
//     `;
//     res.send(html);
// });


//routes
//global for all routes browser to understand json and also for mobile apps
//REstful API
// app.use(express.json());
// app.get('/api/users', (req, res) => {
//     return res.json(users)
// });

//single user
//dynamically getting user by id
// app.get('/api/users/:id', (req, res) => {
//     const id =Number(req.params.id);//using number because id is in string form 
//     const user=users.find(user=>user.id===id);
//     return res.json(user)
// }
// );

// app
// .route("/api/users/:id")
// .get(async(req,res)=>{
//     const user= await User.findById(req.params.id);
//     //  const id =Number(req.params.id);//using number because id is in string form 
//     // const user=users.find(user=>user.id===id);
//     if (!user) return res.status(404).json({error:"user not found"})
//     return res.json(user)
// })
// .patch(async(req,res)=>{
//     await User.findByIdAndUpdate(req.params.id,req.body);
//     //partial edit user with id e.g email
//     return res.json({status:'success'})
// })
// .delete(async(req,res)=>{
//     await User.findByIdAndDelete(req.params.id);
//     //dalete user with id
//     return res.json({status:'success'})
// })


// //post request
// app.post('/api/users',async (req, res) => {
//     const body = req.body;
//     if(!body|| !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender){
//         return res.status(400).json({msg:'all fields required'})
//     }
//     const result= await User.create({
//         first_name: body.first_name,
//         last_name: body.last_name,
//         email: body.email,
//         job_title: body.job_title,

// });
//     return res.status(201).json({msg:'user created'});
// });
    

//patch request
// app.patch('/api/users/:id', (req, res) => {
//     //todo :update user by id
//     return res.json({status:'pending'});
// }
//we can do all put,patch,delete requests in app.route also


//Routes
app.use('/api/users',userRouter);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
