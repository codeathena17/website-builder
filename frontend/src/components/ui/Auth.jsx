import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import registrationImg from '../assets/registration.png'

export default function Auth() {
  const navigate = useNavigate()
  const [isSignUp, setIsSignUp] = useState(false)

  // Signup state
  const [firstName, setFirstName] = useState('')
  const [signupUsername, setSignupUsername] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('')
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [showSignupConfirm, setShowSignupConfirm] = useState(false)

  // Login state
  const [loginEmailOrUsername, setLoginEmailOrUsername] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [loginError, setLoginError] = useState('')

  const handleSignup = (e) => {
    e.preventDefault()
    setIsSignUp(false)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    if (loginEmailOrUsername && loginPassword === 'password') {
      setLoginError('')
      navigate('/')
      return
    }
    setLoginError('Invalid email/username or password')
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-white-900 via-white-800 to-white-900 flex items-center justify-center p-4">
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .form-container {
          transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          width: 100%;
        }

        .form-container.slide-left {
          transform: translateX(-100%);
        }

        .overlay-panel {
          transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), z-index 0.6s;
        }

        .overlay-panel.slide-in {
          transform: translateX(0);
        }

        @media (max-width: 768px) {
          .form-container {
            width: 100% !important;
          }
          .overlay-panel {
            display: none !important;
          }
        }
      `}</style>
      
      <div className="w-full max-w-6xl">
        {/* Main authentication container */}
        <div className="relative w-full h-auto md:h-[700px] bg-white rounded-xl shadow-2xl overflow-hidden">
          
          {/* Forms container - main content area */}
          <div className="relative w-full h-full flex">
            {/* Login Form - slides from left */}
            <div
              className="form-container"
              style={{
                transform: isSignUp ? 'translateX(-100%)' : 'translateX(0)',
              }}
            >
              <div className="w-full px-6 flex flex-col items-center justify-center  bg-white min-h-[500px] md:min-h-full">
                <div className="w-full max-w-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Login</h1>
                 
                  
                  <form onSubmit={handleLogin} className="space-y-4">
                    {loginError && (
                      <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">{loginError}</div>
                    )}
                    <br></br>
                    <br></br>
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">Email or Username</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                        <input
                          type="text"
                          value={loginEmailOrUsername}
                          onChange={(e) => setLoginEmailOrUsername(e.target.value)}
                          className="w-full pl-10 pr-4 py-3.5 text-lg border-4 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="email@example.com or username"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                        <input
                          type={showLoginPassword ? 'text' : 'password'}
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          className="w-full pl-10 pr-10 py-3.5 text-lg border-4 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowLoginPassword(!showLoginPassword)}
                          className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-700 transition-colors"
                        >
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all transform hover:scale-105"
                    >
                      Sign In
                    </button>
                  </form>
                  
                  <p className="text-center text-slate-600 text-sm mt-6">
                    Don't have an account?{' '}
                    <button
                      onClick={() => setIsSignUp(true)}
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </div>
            </div>

            {/* Sign Up Form - slides from right */}
            <div
              className="form-container"
              style={{
                transform: isSignUp ? 'translateX(0)' : 'translateX(100%)',
              }}
            >
              <div className="w-full px-6 flex flex-col items-center justify-center bg-slate-50 min-h-[500px] md:min-h-full">
                <div className="w-full max-w-2xl">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Create Account</h1>
                  
                  <form onSubmit={handleSignup} className="space-y-3">
                    <br></br>
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-9 py-3.5 text-lg border-4 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">Username</label>
                      <input
                        type="text"
                        value={signupUsername}
                        onChange={(e) => setSignupUsername(e.target.value)}
                        className="w-full px-4 py-3.5 text-lg border-4 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="johndoe"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                        <input
                          type="email"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-3.5 text-lg border-4 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">Create Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                        <input
                          type={showSignupPassword ? 'text' : 'password'}
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          className="w-full pl-10 pr-10 py-3.5 text-lg border-4 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowSignupPassword(!showSignupPassword)}
                          className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-700 transition-colors"
                        >
                          
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-2">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                        <input
                          type={showSignupConfirm ? 'text' : 'password'}
                          value={signupConfirmPassword}
                          onChange={(e) => setSignupConfirmPassword(e.target.value)}
                          className="w-full pl-10 pr-10 py-3.5 text-lg border-4 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="••••••••"
                        />
                        <button
                          type="button"
                          onClick={() => setShowSignupConfirm(!showSignupConfirm)}
                          className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-700 transition-colors"
                        >
    
                        </button>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold  rounded-lg transition-all transform hover:scale-105 py-2.5"
                    >
                      Create Account
                    </button>
                  </form>

                  <p className="text-center text-slate-600 text-sm mt-6">
                    Already have an account?{' '}
                    <button
                      onClick={() => setIsSignUp(false)}
                      className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Overlay Panel - slides in from right or left */}
          <div
            className="absolute top-0 right-0 w-full md:w-1/2 h-full hidden md:flex flex-col items-center justify-center p-8 z-30 overlay-panel"
            style={{
              backgroundImage: `url(${registrationImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: isSignUp ? 'translateX(-100%)' : 'translateX(0)',
            }}
          >
            {/* Dark overlay on background image */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray/60 via-gray/50 to-gray/60" />
            
            {/* Overlay content */}
            <div className="relative z-10 text-center max-w-xs">
              {!isSignUp ? (
                <>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Welcome to Buildora</h2>
                  <p className="text-slate-100 mb-8 text-base leading-relaxed">
                    Let's start your journey with us and build clear, productive websites together.
                  </p>
                  <button
                    onClick={() => setIsSignUp(true)}
                    className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                  >
                    Sign Up 
                  </button>
                </>
              ) : (
                <>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Hello!</h2>
                  <p className="text-slate-100 mb-8 text-base leading-relaxed">
                    Already have an account? Click below to continue building amazing things with us.
                  </p>
                  <button
                    onClick={() => setIsSignUp(false)}
                    className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
                  >
                    Sign In
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
