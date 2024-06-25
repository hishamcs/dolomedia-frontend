import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './editProfile.scss'
import FormInput from '../formInput/FormInput';
import { useSelector } from 'react-redux';
import { Fragment, useState } from 'react';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const name = {
        name: 'name',
        type: 'text',
        errorMessage: "Username should be 3-16 characters and shouldn't include any special character and number",
        placeholder: 'UserName',
        pattern: "^[A-Za-z]{3,16}$",
        required: true,
  }

  


const EditProfile = ({openUpdate, setOpenUpdate}) => {
    const [ChangePwd, setChangePwd] = useState(false)
    const userInfo = useSelector(state=>state.userLogin.userInfo)

    console.log('userInfo : ', userInfo)
    return(
        <Modal
            open={openUpdate}
            // onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style} className='editProfile'style={{backgroundColor:"#9f9898"}}>
                <div className='headd'>
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Update Profile
                    </Typography>
                    <button onClick={()=> setOpenUpdate(false)}>x</button>
                </div>
                <hr/>
                <Typography id="modal-modal-description" sx={{ mt: 2 }} className='formCont'>
                    <form>
                        <FormInput />
                        <FormInput />
                    <button>Update</button>
                    </form>
                    <p>Change Password</p>
                </Typography>
            </Box>
        </Modal>
    )
}

export default EditProfile