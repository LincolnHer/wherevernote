// backend/routes/api/index.js
// const asyncHandler = require('express-async-handler');
// const { setTokenCookie } = require('../../utils/auth.js');
// const { User } = require('../../db/models');

const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const notebooksRouter = require('./notebook.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/notebooks', notebooksRouter)

// POST /api/test
// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });

// GET /set-token-cookie
// router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
//   const user = await User.findOne({
//       where: {
//         username: 'Demo-lition'
//       }
//     });
//   setTokenCookie(res, user);
//   return res.json({ user });
// }));

// GET /api/restore-user
// const { restoreUser } = require('../../utils/auth.js');
// router.get(
//   '/restore-user',
//   restoreUser,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

// GET /api/require-auth
// const { requireAuth } = require('../../utils/auth.js');
// router.get(
//   '/require-auth',
//   requireAuth,
//   (req, res) => {
//     return res.json(req.user);
//   }
// );

module.exports = router;
