document.addEventListener('DOMContentLoaded', function() {
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Here you would typically make an API call to verify credentials
            // For demo purposes, we'll just redirect to OTP page
            window.location.href = 'otp.html';
        });
    }

    // Signup form handling
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            // Basic validation
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }

            // Here you would typically make an API call to register the user
            // For demo purposes, we'll just redirect to OTP page
            window.location.href = 'otp.html';
        });
    }

    // Forgot password form handling
    const forgotForm = document.getElementById('forgotForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            
            // Here you would typically make an API call to send reset password email
            // For demo purposes, we'll just show an alert
            alert('Password reset instructions have been sent to your email');
            window.location.href = 'index.html';
        });
    }

    // OTP form handling
    const otpForm = document.getElementById('otpForm');
    if (otpForm) {
        const otpInputs = document.querySelectorAll('.otp-inputs input');
        
        // Auto-focus next input when a digit is entered
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', function() {
                if (this.value.length === 1) {
                    if (index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                }
            });

            // Handle backspace
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Backspace' && !this.value && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });

        otpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const otp = Array.from(otpInputs).map(input => input.value).join('');
            
            // Here you would typically verify the OTP with your backend
            // For demo purposes, we'll just show an alert
            if (otp.length === 6) {
                alert('OTP verified successfully!');
                // Redirect to dashboard or home page
                // window.location.href = 'dashboard.html';
            } else {
                alert('Please enter a valid 6-digit OTP');
            }
        });
    }

    // Forgot password handling
    const forgotPasswordLink = document.getElementById('forgotPassword');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'forgot.html';
        });
    }

    // Sign up handling
    const signupLink = document.getElementById('signup');
    if (signupLink) {
        signupLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'signup.html';
        });
    }

    // Resend OTP handling
    const resendOTPLink = document.getElementById('resendOTP');
    if (resendOTPLink) {
        resendOTPLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you would typically make an API call to resend OTP
            alert('New OTP has been sent to your email');
        });
    }
}); 