import expres from 'express'
import {getFeedPosts,getUserPosts,likePost} from '../controllers/postController.js'
import verifyToken from '../middleware/verifyToken.js'

const router = expres.Router()

router.use(verifyToken)

router.get('/',getFeedPosts)
router.get('/:userId/posts',getUserPosts)
router.patch('/:id/like',likePost)

export default router