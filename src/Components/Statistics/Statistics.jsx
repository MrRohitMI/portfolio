import React from 'react'
import GitStatistics from '../GitStatistics'
import './Statistics.css'
const Statistics = () => {
  return (
    <>
     <h1 style={{textAlign:'left',fontSize:'40px',fontWeight:'bold',marginLeft:'7%',marginBottom:'40px'}}> Statistics </h1>
     <GitStatistics/>
    <div className="stat">
            <div className="individualStat">
                       <div>1200+</div>
                        <div><h3>Hours</h3>of Coding</div>
            </div>
           <div className="individualStat">
                      <div >600+</div>
                     <div><h3>DSA</h3>Problems</div>
           </div>
            <div className="individualStat">
                    <div >10+</div>
                       <div><h3>Projects</h3>Done</div>
            </div>
            <div className="individualStat" id="hours">
                         <div>100+</div>
                          <div><h3>Hours</h3> of Soft Skills Sessions</div>
            </div>
       </div>
    </>
  )
}
export default Statistics