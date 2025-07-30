export const checkValidateData = (email, password,name,mobile) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isMobileValid = /^\+?[0-9]{10,15}$/.test(mobile);

    if (!isEmailValid) return "Email-Id is Not Valid";
    if (!isPasswordValid) return "Password is Not Valid";
    if(!isNameValid) return "Name Not Valid";
    if(!isMobileValid) return "Mobile Number Not Valid";

    return null;
}