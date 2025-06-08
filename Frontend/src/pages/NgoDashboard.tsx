import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NgoDashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to dashboard
    navigate('/ngo-dashboard', { replace: true });
  }, [navigate]);

  return null;
};

export default NgoDashboard;