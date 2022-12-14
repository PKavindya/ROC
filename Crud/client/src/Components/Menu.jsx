import React from 'react'
import bloodDonation from "../assests/BloodDonation.JPG"
import childhome from "../assests/ChildHome.png"

export default function Menu() {

    const project =[{
        id:1,
        title:"Blood Donation for E-weak",
        image:"../assests/BloodDonation.JPG"
      }];

  return (
    <div className='menu'>
<h1>Projects You may like</h1>
{/*{project.map(project=>*/}
    <div className='project' key={1}>
    <img src={bloodDonation} alt=''/>
    <h2>Blood Donation For E week</h2>
    <button>Read</button>
  
    <img src={childhome} alt=''/>
    <h2>Child home Visit</h2>
    <button>Read</button>
    </div>
    {/*})}*/}
    </div>
  )
}
