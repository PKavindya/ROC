import React from 'react'
import { Link } from 'react-router-dom'
import Menu from '../Components/Menu'
import bagDonation from "../assests/BagDonation.jpg"

export const Project = () => {
  return (
    <div className='single'>
      <div className='content'>
      <img src={bagDonation} alt=""/>
      <div className="user">
        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHKf1Dsl-_E_Q/profile-displayphoto-shrink_800_800/0/1650914420006?e=2147483647&v=beta&t=RcOcIUXeH7CLUPdbxRxhWmx9G_R693svcKsV8Ctu2rg" alt=''/>
        <div className="info">
          <span>Kavindya</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className="edit">
          <Link to={`/project?edit=2`}>
          <img src='' alt=''/>
          </Link>
          <img src="" alt="" />
        </div>
      </div>
      <h1>Bag Donation Kilinochchi</h1>
      <p>
School bags were provided to
the students of
KN/Sivapathakalaiyakam
G.T.M.S school those who are
facing economical struggles to
continue their studies.
Rotary club of Kilinochchi town sponsored and
provided us school bags to distribute among
students.In this project 30 bags have been given
to grade 10 students and they were selected by
school principal according to their family annual
income.

</p>
      </div>
       <Menu/>
    </div>
  )
}
