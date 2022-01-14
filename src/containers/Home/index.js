import react from 'react'
import { connect} from 'react-redux';
import './style.css'; 

import {set_data} from '../../store/actions'

 class Home extends react.Component{
 //    static getDerivedStateFromProps(state,props)
// //    {
// //        console.log("yes==>",this.props)
// //        return{

// //        }
// //    }
   render(){
        console.log("yes==>",this.props)
         let user={name:"Faisal ramz",email:"yes@gmail.com"}
        return(
            <div>
                <h1>Home</h1>
                {/* <button onClick={()=>this.props.facebook_login()}>FACE_BOOK LOGIN</button> */}
                { <button onClick={()=>this.props.set_data(user)}>SET_DATA</button> }
           </div>
       )
     }
    
 }
const mapStateToProps=(state)=>({
 users:state.users,
 name:"Faisal"


})

// const mapDispatchToProp=(dispatch)=>({
//  set_data:(data)=>dispatch(set_data(data)),
//  facebook_login:(data)=>dispatch(facebook_login())
// })

export default connect(mapStateToProps,null)(Home);
