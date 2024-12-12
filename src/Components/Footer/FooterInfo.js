import React from 'react'

function FooterInfo({infoList}) {
  return (
    <div className='box ft-info'>
        <div className='box-content'>
            <h4>More Details</h4>
            <ul className='info-links'>
            <li><a href='https://github.com/Bashir-Alansary/Medical.git' target='_blank'>Medical</a></li>
            <li><a href='https://github.com/Bashir-Alansary/Pharmacy.git' target='_blank'>Pharmacy</a></li>
            </ul>
            <ul className='social-links'>
            {
                infoList.map(item => <li key={item.id}><a href={item.link} target="_blank"><img src={item.image} alt={item.name}/></a></li>)
            }
            </ul>
        </div>
    </div>
  )
}

export default FooterInfo;
