import data from "./data.js";
import './table.css'

function DynamicData() {
  return <div>
      <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Profile Picture</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
               {
                data.map((value)=>{
                    return(
                        <tr>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.age}</td>
                            <td>{value.address}</td>
                            <td><img src={value.profile} alt="profile" width={100} /></td>
                            <td><button>Delete</button> <br /> <button>Update</button></td>
                          

                        </tr>
                    )
                })
               }
        </tbody>
      </table>
  </div>;
}

export default DynamicData;

//   <ul>
//             {
//              data.map((value,index)=>{
//                 return(
//                     <>
//                     <li>{index+1}</li>
//                     <li>{value.name}</li>
//                     <li>{value.age}</li>
//                     <li>{value.address}</li>
//                     <li><img src={value.profile} alt="profile" width={100} /></li>
//                     </>
//                 )
//              })
//           }
//           </ul>
