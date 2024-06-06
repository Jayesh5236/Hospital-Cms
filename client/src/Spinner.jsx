import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const COUNTDOWN_DURATION = 1200;

    const timeout = setTimeout(() => {
      setCount((prevCount) => prevCount - 1);
    }, COUNTDOWN_DURATION);

    return () => clearTimeout(timeout);
  }, [count]);

  useEffect(() => {
    if (count === 0) {
      navigate(`/${path}`, {
        state: location.pathname,
      });
    }
  }, [count, path, navigate, location]);

  const countdownMessage =
    count === 0
      ? "Redirecting to Login Page..."
      : `Redirecting in ${count} Seconds`;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="text-4xl font-bold text-primary mb-4">
        {countdownMessage}
      </h1>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">
          {count === 0
            ? "Redirecting to Login Page..."
            : `Loading... ${count} seconds remaining`}
        </span>
      </div>
    </div>
  );
};

export default Spinner;