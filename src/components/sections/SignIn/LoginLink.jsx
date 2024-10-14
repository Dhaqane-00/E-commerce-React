import React from 'react';
import { Link } from 'react-router-dom';
function LoginLink() {
  return (
    <div className="flex gap-4 items-center mt-8">
      <p className="self-stretch my-auto opacity-70">
        Create an account?
      </p>
      <div className="flex flex-col self-stretch my-auto font-medium">
        <Link to="/SignUp" className="opacity-70">Sign Up Now</Link>
      </div>
    </div>
  );
}

export default LoginLink;