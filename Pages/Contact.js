import React,{useState} from "react";


function Form() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const collectData= async(e)=>{
        e.preventDefault();
        let result=await fetch('http://localhost:4000/',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
        });
        result=await result.json;
        localStorage.setItem("user",JSON.stringify(result));
    }
  return (
    <div>
    <form onSubmit={collectData}>
<div className="form-group">    
<label for="exampleInputEmail1">Name</label>
<input type="name" className="form-conmtrol" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"
value={name} onChange={(e)=> setName(e.target.value)
}/>


</div>
<div className="form-group">
<label for="exampleInputEmail1">Email address</label>
<input type="email" className="form-conmtrol" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email"
value={email} onChange={(e)=> setEmail(e.target.value)
}/>
</div>
<div className="form-group">
<label for="exampleInputPassword1">Password</label>
<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
value={password} onChange={(e)=> setPassword(e.target.value)
}/>
</div>
<div className="form-group form-check">
<input type="checkbox" className="form-check-input" id="exampleCheck1"/>
<label className="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Form;