import logo from './logo.svg';
import './App.css';

function App() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`the name you enterd was :${name}`)
    // onSubmit(name, email);
    navigate('/CataloguePage')
    
  };

  return (
    <form 
    onSubmit={handleSubmit}
    style={{ 
      marginLeft: 50, 
      paddingTop: 50, 
      borderWidth: 1,
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      width:'40%',
     
       }}>
      <label htmlFor="name" >Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.name)}
        required
        style={{height:30 , borderRadius:3}}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.email)}
        required
        style={{height:30 , borderRadius:3}}
      />

      <button type="submit" style={{marginTop:10 ,width:'50%', height:30 ,}} >Submit</button>
    </form>
  );
};


export default App;
