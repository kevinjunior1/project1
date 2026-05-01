// Function to save patient data locally
function savePatientLocally(patientData) {
    // Get existing records or start empty array
    let patients = JSON.parse(localStorage.getItem('clinic_queue')) || [];
    
    // Add timestamp and status
    patientData.timestamp = new Date().toLocaleString();
    patientData.synced = false;

    patients.push(patientData);
    
    // Save back to local storage
    localStorage.setItem('clinic_queue', JSON.stringify(patients));
    
    alert("Check-in Successful! Data saved offline.");
}

// Form Submission Event
document.getElementById('checkinForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const data = {
        name: document.getElementById('patientName').value,
        reason: document.getElementById('reason').value
    };

    savePatientLocally(data);
    e.target.reset(); // Clear form
});