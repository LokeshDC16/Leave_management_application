import React from 'react';

const CRUDProject = () => {
  return (
    <div style={styles.container}>
      <img src={require('./download.jpeg').default} alt="CRUD Project" style={styles.image} />
      <h2 style={styles.title}>Leave Management Application</h2>
      <p style={styles.description}>Welcome</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    // marginTop: '50px',
    height: 720 ,
    fontFamily: 'Arial, sans-serif',
    background: '#ABB8C3',
    padding: '20px',
  },
  image: {
    width: '200px',
    marginBottom: '20px',
  },
  title: {
    color: '#1a237e', // Dark blue
    fontSize: '24px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    fontStyle: 'italic',
  },
};

export default CRUDProject;
