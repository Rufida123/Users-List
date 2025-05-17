import { useLocation, useNavigate } from 'react-router-dom';

export default function UserDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const user = state?.user;

  if (!user) {
    return (
      <div>
        <p>User data not available. Go back to the <button onClick={() => navigate('/')}>Dashboard</button>.</p>
      </div>
    );
  }

  return (
    <div className='userData-container'>
    <div className='userData'>
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'30px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fa-solid fa-user-tie" style={{ color: '#3586dc', fontSize: '30px', marginRight: '10px' }}></i>
      <div>
        <h5 style={{ color: 'gray', margin: 0, fontSize: '14px' }}>Contacts for:</h5>
        <h5 style={{ margin: 0, fontSize: '16px' }}>{user.name}</h5>
      </div>
    </div>
    <div>
      <h5 style={{ color: 'gray', margin: '0 150px 0 0', fontSize: '14px' }}>Username:</h5>
      <h5 style={{ margin: 0, fontSize: '14px', color: '#333' }}>@{user.username}</h5>
    </div>
  </div>

<div className="tape">
  Contact Info
</div>

  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'30px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fa-solid fa-envelope" style={{fontSize:'20px', marginRight: '10px' }}></i>
      <div>
        <h5 style={{ color: 'gray', margin: 0, fontSize: '12px' }}>Email:</h5>
        <h5 style={{ margin: 0, fontSize: '14px' }}>{user.email}</h5>
      </div>
    </div>
    <div style={{marginLeft:"50px"}}>
      <h5 style={{ color: 'gray', margin: '0 150px 0 0', fontSize: '12px' }}>Phone:</h5>
      <h5 style={{ margin: 0, fontSize: '14px', color: '#333' }}>{user.phone}</h5>
    </div>
        <div>
      <h5 style={{ color: 'gray', margin: '0 150px 0 0', fontSize: '12px' }}>Website:</h5>
      <h5 style={{ margin: 0, fontSize: '14px', color: '#333' }}>{user.website}</h5>
    </div>
  </div>

<div className="tape">
  Address
</div>

<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'30px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fa-solid fa-city" style={{fontSize:'20px', marginRight: '10px' }}></i>
      <div>
        <h5 style={{ color: 'gray', margin: 0, fontSize: '12px' }}>City:</h5>
        <h5 style={{ margin: 0, fontSize: '14px' }}>{user.address.city}</h5>
      </div>
    </div>
    <div style={{marginLeft:"50px"}}>
      <h5 style={{ color: 'gray', margin: '0 150px 0 0', fontSize: '12px' }}>Street:</h5>
      <h5 style={{ margin: 0, fontSize: '14px', color: '#333' }}>{user.address.street}</h5>
    </div>
        <div>
      <h5 style={{ color: 'gray', margin: '0 150px 0 0', fontSize: '12px' }}>ZipCode:</h5>
      <h5 style={{ margin: 0, fontSize: '14px', color: '#333' }}>{user.address.zipcode}</h5>
    </div>
  </div>

<div className="tape">
  Company
</div>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'30px' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <i className="fa-solid fa-briefcase" style={{fontSize:'20px', marginRight: '10px' }}></i>
      <div>
        <h5 style={{ color: 'gray', margin: 0, fontSize: '12px' }}>Company Name:</h5>
        <h5 style={{ margin: 0, fontSize: '14px' }}>{user.company.name}</h5>
      </div>
    </div>
    <div>
      <h5 style={{ color: 'gray', margin: '0 150px 0 0', fontSize: '12px' }}>Company Catch Phrase:</h5>
      <h5 style={{ margin: 0, fontSize: '14px', color: '#333' }}>{user.company.catchPhrase}</h5>
      </div>
  </div>
<div style={{ marginTop: '20px' }}>
  <button
    onClick={() => navigate('/')}
    className="back-button"
  >
    Back to Dashboard
  </button>
</div>
</div>
</div>
  );
}