const express = require('express');
const {handleGetAllUsers,handleGetUserById,UpdateUserById,handleDeleteUserById,handleCreateNewUserById}=require('../controllers/user');

const router = express.Router();

// router.get('/users',async (req, res) => {
//     const allDbUsers= await User.find({});
//     const html=`
//     <ul>
//     ${allDbUsers.map(user=>`<li>${user.first_name} ${user.last_name}- ${user.email}</li>`).join('')}
//     </ul>
//     `;
//     res.send(html);
// });

 app.use(express.json());
// router.get('/', (req, res) => {
//     return res.json(users)
// });




// router.get('/',handleGetAllUsers);

router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUserById);

router
.route("/:id")
.get(handleGetUserById)
.patch(UpdateUserById)
.delete(handleDeleteUserById);


//post request
// router.post("/",handleCreateNewUserById)

module.exports = router;
