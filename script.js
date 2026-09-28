const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const doctor = document.getElementById("doctor").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const reason = document.getElementById("reason").value.trim();

        const successMessage =
            document.getElementById("successMessage");

        const errorMessage =
            document.getElementById("errorMessage");

        const latestBooking =
            document.getElementById("latestBooking");

        // Clear old messages
        successMessage.innerHTML = "";
        errorMessage.innerHTML = "";

        // Name validation
        if (name === "") {
            errorMessage.innerHTML = "Please enter your name.";
            return;
        }

        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            errorMessage.innerHTML =
                "Please enter a valid email address.";
            return;
        }

        // Phone validation
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            errorMessage.innerHTML =
                "Please enter a valid 10-digit phone number.";
            return;
        }

        // Doctor validation
        if (doctor === "") {
            errorMessage.innerHTML =
                "Please select a doctor.";
            return;
        }

        // Date validation
        if (date === "") {
            errorMessage.innerHTML =
                "Please select an appointment date.";
            return;
        }

        // Time validation
        if (time === "") {
            errorMessage.innerHTML =
                "Please select an appointment time.";
            return;
        }

        // Reason validation
        if (reason === "") {
            errorMessage.innerHTML =
                "Please enter the reason for your visit.";
            return;
        }

        // Create booking object
        const booking = {
            name: name,
            email: email,
            phone: phone,
            doctor: doctor,
            date: date,
            time: time,
            reason: reason
        };

        // Get previous bookings
        let bookings =
            JSON.parse(localStorage.getItem("appointments")) || [];

        // Add new booking
        bookings.push(booking);

        // Save bookings in localStorage
        localStorage.setItem(
            "appointments",
            JSON.stringify(bookings)
        );

        // Success message
        successMessage.innerHTML =
            "✅ Appointment booked successfully!";

        // Show latest booking
        showLatestBooking(booking);

        // Clear form
        appointmentForm.reset();
    });


    // Function to show latest booking
    function showLatestBooking(booking) {

        const latestBooking =
            document.getElementById("latestBooking");

        latestBooking.innerHTML = `
            <div class="booking-card">
                <h2>Latest Appointment</h2>

                <p>
                    <strong>Patient:</strong>
                    ${booking.name}
                </p>

                <p>
                    <strong>Email:</strong>
                    ${booking.email}
                </p>

                <p>
                    <strong>Phone:</strong>
                    ${booking.phone}
                </p>

                <p>
                    <strong>Doctor:</strong>
                    ${booking.doctor}
                </p>

                <p>
                    <strong>Date:</strong>
                    ${booking.date}
                </p>

                <p>
                    <strong>Time:</strong>
                    ${booking.time}
                </p>

                <p>
                    <strong>Reason:</strong>
                    ${booking.reason}
                </p>
            </div>
        `;
    }


    // Show previously saved latest booking
    const savedBookings =
        JSON.parse(localStorage.getItem("appointments")) || [];

    if (savedBookings.length > 0) {

        const latest =
            savedBookings[savedBookings.length - 1];

        showLatestBooking(latest);
        // ===============================
// REGISTER FUNCTION
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const message = document.getElementById("registerMessage");

        // Check password
        if (password !== confirmPassword) {
            message.textContent = "Passwords do not match!";
            return;
        }

        // Get existing users
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email already exists
        const existingUser = users.find(user => user.email === email);

        if (existingUser) {
            message.textContent = "Email is already registered!";
            return;
        }

        // Create new user
        const newUser = {
            name: name,
            email: email,
            password: password
        };

        users.push(newUser);

        // Save users
        localStorage.setItem("users", JSON.stringify(users));

        message.textContent = "Registration successful!";

        // Clear form
        registerForm.reset();

        // Go to login after 1 second
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    });
}
    }
}