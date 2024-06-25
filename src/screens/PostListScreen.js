import Header from "../components/Header"
import { Row, Table,Col,Container} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import { useSelector } from "react-redux"
import toast, { Toaster }from 'react-hot-toast';
import axiosInstance from "../axios"


const PostListScreen = () => {
    const userLogin = useSelector(state=>state.userLogin)
    const {userInfo} = userLogin
    const {id} = userInfo
    const [posts, setPostLists] = useState([])

    const handleDelete = (postId) => {
        console.log('post id : ', postId)
        axiosInstance.delete('/posts/post-delete/', {params:{postId:postId}}).then(response=>{
            console.log(response.data)
            setPostLists(response.data)
            toast.success('Deleted successfully...')
        })
    }




    useEffect(() => {
        axiosInstance.get(`/posts/addposts/`).then(response=>{
            console.log(response.data)
            setPostLists(response.data)
        })
    }, [id])
    return(
        <>  
            <Header />
            <Container>
                <Row>
                    <Col>
                        <h5 className="py-3">Post Management</h5>
                    </Col>
                    {/* <Col>
                    
                    </Col> */}
                </Row>

                <Row>
                    <Table striped bordered hover responsive className="text-center">
                        <thead>
                            <tr>
                                <th>SL.NO</th>
                                <th>POST</th>
                                <th>OWNER</th>
                                <th>LIKE COUNT</th>
                                <th>REPORT COUNT</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>

                            {posts.map((post,index)=>(
                                <tr key={post.id}>
                                <td>{index+1}</td>
                                <td>
                                    <p style={{overflowWrap:'anywhere'}}>{post.content}</p>
                                    {post.image && <img src={post.image} alt="" style={{height:"300px", width:"300px",objectFit:"contain"}}/>}
                                    {post.video && <video controls style={{height:"300px", width:"300px",objectFit:"contain"}}>
                                        <source src={post.video} type='video/mp4' />
                                        Your browser doesn't support the video tag  
                                    </video>}
                                </td>
                                <td>{post.user.name}</td>
                                <td>{post.likeCount}</td>
                                <td>{post.report_count}</td>
                                <td>
                                    <button className="btn btn-danger btn-sm rounded-pill"onClick={()=>handleDelete(post.id)}>Delete</button>
                                </td>
                            </tr>
                            ))}
                            
                        </tbody>
                        <Toaster />
                    </Table>
                </Row>
            </Container>
        </>
    )
}

export default PostListScreen