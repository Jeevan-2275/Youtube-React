
import './Navbar.css'

function Navbar() {
    
  const sugestion =[
    {id:1,title:'All'},
    {id:2,title:'Cook Studio'},
    {id:3,title:' UX'},
    {id:4,title:'Case'},
    {id:5,title:'Music'},
    {id:6,title:'Bangla'},
    {id:7,title:'Tour'},
    {id:8,title:'Santmartin'},
    {id:9,title:'Tech'},
    {id:10,title:'iPhone13'}
  ]

    return(



<div>
<div className="search">Search</div>
<div>
  <img
    className="mark"
    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/search.png?raw=true"
    alt="Search Icon"
  />
</div>
<div>
  <img
    className="mic"
    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/mic.png?raw=true"
    alt="Mic Icon"
  />
</div>
<br />
<div>
  <img
    className="s"
    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/create.png?raw=true"
    alt="Create Icon"
  />
</div>
<div>
  <img
    className="s1"
    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/more.png?raw=true"
    alt="More Options Icon"
  />
</div>
<div>
  <img
    className="s2"
    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/bell.png?raw=true"
    alt="Bell Icon"
  />
</div>
<div>
  <img
    className="s3"
    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/a13580378d0b069a01444a65219224700691e411/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"
    alt="Profile Icon"
  />
</div>



<div className="att">

{sugestion.map((i)=>(
  <div key={i.id} className="sub">
    {i.title}
  </div>

))}
</div>
  

</div>





)
};
export  default Navbar;