
const removeUserDetails = () => {
    localStorage.removeItem('pickup')
    localStorage.removeItem('destination')
    localStorage.removeItem('uuid');
}
export default removeUserDetails;