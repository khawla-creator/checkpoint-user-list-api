import React from 'react';
import './styles.css'
import {BiUserCircle} from 'react-icons/bi'
import {BsPhone} from 'react-icons/bs'
import {FaHome} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {CgWebsite} from 'react-icons/cg'


const CardUser =({user})=> {
  return (
              <div className='card-user'>
                      <div className='user-Name'>
                      <BiUserCircle style={{fontSize:'100px', color: '0a1884'}} />
                      <h1>{user.username}</h1>
                      </div>
                      <div className='user-Information' >
                                        <h1>{`Name: ${user.name}`}</h1>
                                        <br/>
                                        <span ><BsPhone style={{fontSize:'20px'}}/> {` Phone : ${user.phone}`}</span>
                                        <span ><FaHome style={{fontSize:'20px'}}/>{` Address : ${user.address.street}-${user.address.suite}-${user.address.city}`}</span>
                                        <span><HiOutlineMail style={{fontSize:'20px'}}/>{` email : ${user.email}`}</span>
                                        <span><CgWebsite style={{fontSize:'20px'}}/> {` webSite : ${user.website}`}</span>
                      </div>
              </div>
  )
}

export default CardUser; 

//   id: 4
// name: "Patricia Lebsack"
// username: "Karianne"
// email: "Julianne.OConner@kory.org"
// address: Object
// phone: "493-170-9623 x156"
// website: "kale.biz"
// company: Object


// adress: Object
// street: "Douglas Extension"
// suite: "Suite 847"
// city: "McKenziehaven"
// zipcode: "59590-4157"
// geo: Object