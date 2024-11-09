export const validate = (email,password) => {
    
    const isValidEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
    
    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);

    if(!isValidEmail) return "Email is Not Valid";

    if(!isValidPassword) return "Password is Not Valid";

    return null;
}